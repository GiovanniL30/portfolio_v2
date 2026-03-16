import { useEffect, useRef, useState } from "react";
import type { TerminalLine } from "../../@types/terminal";
import {
  COMMANDS,
  KIND_CLASS,
  toLines,
  WELCOME,
} from "../../utils/terminal.utils";

const Terminal = () => {
  const [lines, setLines] = useState<TerminalLine[]>(WELCOME);
  const [input, setInput] = useState("");
  const [, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const focusInput = () => inputRef.current?.focus();

  const runCommand = (raw: string) => {
    const trimmed = raw.trim();
    const [name = "", ...args] = trimmed.toLowerCase().split(/\s+/);
    const echo: TerminalLine = { kind: "input", text: raw };

    if (!trimmed) {
      setLines((prev) => [...prev, echo]);
      return;
    }

    const cmd = COMMANDS[name];

    if (!cmd) {
      setLines((prev) => [
        ...prev,
        echo,
        {
          kind: "error",
          text: `Command not found: "${name}". Type "help" for help.`,
        },
      ]);
      return;
    }

    const result = cmd.run(args);

    if (result === null) {
      setLines([]);
      return;
    }

    setLines((prev) => [...prev, echo, ...toLines(result)]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cmd = input;
      if (cmd.trim()) setHistory((prev) => [cmd, ...prev]);
      setHistoryIndex(null);
      setInput("");
      runCommand(cmd);
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHistory((prev) => {
        const next =
          historyIndex === null
            ? 0
            : Math.min(historyIndex + 1, prev.length - 1);
        setHistoryIndex(next);
        setInput(prev[next] ?? "");
        return prev;
      });
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === null) return;
      const next = historyIndex - 1;
      if (next < 0) {
        setHistoryIndex(null);
        setInput("");
      } else {
        setHistoryIndex(next);
        setHistory((prev) => {
          setInput(prev[next] ?? "");
          return prev;
        });
      }
    }
  };

  return (
    <div
      className="flex flex-col h-full font-mono text-xs cursor-text"
      onClick={focusInput}
    >
      <div className="flex-1 overflow-y-auto min-h-0 p-3 flex flex-col gap-0.5">
        {lines.map((line, i) => (
          <div key={i} className={KIND_CLASS[line.kind]}>
            {line.kind === "input" ? (
              <span>
                <span className="text-green-400 select-none">❯ </span>
                {line.text}
              </span>
            ) : (
              line.text || <>&nbsp;</>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="flex items-center gap-1 px-3 py-2 border-t border-text-muted/20 shrink-0">
        <span className="text-primary select-none">❯</span>
        <input
          ref={inputRef}
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-text-primary caret-primary placeholder:text-text-muted"
          placeholder="Enter command…"
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
      </div>
    </div>
  );
};

export default Terminal;
