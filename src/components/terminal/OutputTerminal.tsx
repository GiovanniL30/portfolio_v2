import { useEffect, useRef, useState } from "react";
import { useCompileSourceCode } from "../../_api/compiler.api";
import { useCodeEditorStore } from "../../store/useCodeEditorStore";
import Button from "../ui/Button";
import { useEditorStore } from "../../store/useEditorStore";
import { codeEditorTab } from "../../data/fileSystem";

type OutputLine = {
  kind: "output" | "error";
  text: string;
};

const SANDBOX_BOOTSTRAP = `
<script>
  const __print__ = (...args) => {
    args.forEach(arg => {
      window.parent.postMessage({ type: "print", value: String(arg) }, "*");
    });
  };

  const __MAX_ITER__ = 100_000;
  let __iter__ = 0;
  const __checkLoop__ = () => {
    if (++__iter__ > __MAX_ITER__) {
      throw new Error("Infinite loop detected: exceeded " + __MAX_ITER__ + " iterations.");
    }
  };

  window.onerror = (msg) => {
    window.parent.postMessage({ type: "error", value: String(msg) }, "*");
    return true;
  };
</script>
`;

const OutputTerminal = () => {
  const { sourceCode, compiledSourceCode, setCompiledSourceCode } =
    useCodeEditorStore();
  const { setOpenTab } = useEditorStore();
  const compileMutation = useCompileSourceCode();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [output, setOutput] = useState<OutputLine[]>([]);
  const pendingClear = useRef(false);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type !== "print" && e.data?.type !== "error") return;

      const line: OutputLine = {
        kind: e.data.type === "error" ? "error" : "output",
        text: e.data.value,
      };

      if (pendingClear.current) {
        pendingClear.current = false;
        setOutput([line]);
      } else {
        setOutput((prev) => [...prev, line]);
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  useEffect(() => {
    if (!compiledSourceCode || !iframeRef.current) return;
    iframeRef.current.srcdoc = `
      ${SANDBOX_BOOTSTRAP}
      <script>
        try {
          ${compiledSourceCode}
        } catch (e) {
          window.parent.postMessage({ type: "error", value: e.message }, "*");
        }
      </script>
    `;
  }, [compiledSourceCode]);

  const pushError = (msg: string) => {
    const line: OutputLine = { kind: "error", text: msg };
    if (pendingClear.current) {
      pendingClear.current = false;
      setOutput([line]);
    } else {
      setOutput((prev) => [...prev, line]);
    }
  };

  const compile = () => {
    setOpenTab(codeEditorTab);
    compileMutation.mutate(
      { sourceCode },
      {
        onSuccess: (data) => {
          pendingClear.current = true;
          setCompiledSourceCode(data.compiled);
        },
        onError: (err) => {
          pushError(err.message);
        },
      },
    );
  };

  const clear = () => {
    pendingClear.current = false;
    setOutput([]);
    setCompiledSourceCode(null);
  };

  return (
    <div className="flex flex-col h-full p-5">
      <div className="flex justify-end items-center gap-2 text-xs">
        <Button onClick={compile} disabled={compileMutation.isPending}>
          {compileMutation.isPending ? "Compiling…" : "▶ Run"}
        </Button>
        <Button variant={"outline"} onClick={clear}>
          Clear
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto min-h-0 p-3 font-mono text-sm flex flex-col gap-1">
        {output.length === 0 ? (
          <span className="text-text-muted italic text-xs text-center">
            Press ▶ Run to execute your code
          </span>
        ) : (
          output.map((line, i) => (
            <div
              key={i}
              className={
                line.kind === "error"
                  ? "text-red-400 text-xs"
                  : "text-green-400 text-xs"
              }
            >
              {line.kind === "error" ? "✖ " : "› "}
              {line.text}
            </div>
          ))
        )}
      </div>

      <iframe
        ref={iframeRef}
        sandbox="allow-scripts"
        style={{ display: "none" }}
        title="wikang-sandbox"
      />
    </div>
  );
};

export default OutputTerminal;
