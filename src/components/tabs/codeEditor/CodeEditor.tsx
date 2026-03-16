import Editor, { type Monaco, type OnMount } from "@monaco-editor/react";
import { buildMonacoTheme } from "../../../utils/ui.utils";
import { useEffect, useRef } from "react";
import { useGetKeywords } from "../../../_api/compiler.api";
import type { Keyword } from "../../../@types/compiler";
import { useCodeEditorStore } from "../../../store/useCodeEditorStore";

const registerWikang = (monaco: Monaco, keywords: Keyword[]) => {
  const id = "wikang";

  if (monaco.languages.getLanguages().some((l) => l.id === id)) return;

  monaco.languages.register({ id });

  monaco.languages.setMonarchTokensProvider(id, {
    keywords,
    tokenizer: {
      root: [
        [/#.*$/, "comment"],
        [/\/\/.*$/, "comment"],
        [/"([^"\\]|\\.)*"/, "string"],
        [/'([^'\\]|\\.)*'/, "string"],
        [/\b\d+(\.\d+)?\b/, "number"],
        [
          /[a-zA-ZÀ-ÿ_][\w]*/,
          {
            cases: {
              "@keywords": "keyword",
              "@default": "identifier",
            },
          },
        ],
        [/[=!<>]+/, "operator"],
        [/[+\-*/%]/, "operator"],
        [/[{}()[\],]/, "delimiter"],
      ],
    },
  });

  monaco.languages.registerCompletionItemProvider(id, {
    provideCompletionItems: (_, position) => {
      const range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: position.column,
        endColumn: position.column,
      };

      const suggestions = [
        {
          label: "ilagay",
          insertText: "ilagay ${1:x} = ${2:value}",
          detail: "declare variable",
        },
        {
          label: "hindi mabago",
          insertText: "hindi mabago ${1:x} = ${2:value}",
          detail: "declare constant",
        },
        {
          label: "gawa",
          insertText: "gawa ${1:pangalan}(${2:params}) {\n\t$0\n}",
          detail: "define function",
        },
        {
          label: "kapag",
          insertText: "kapag (${1:kondisyon}) {\n\t$0\n}",
          detail: "if statement",
        },
        {
          label: "kung hindi",
          insertText: "kung hindi (${1:kondisyon}) {\n\t$0\n}",
          detail: "else-if block",
        },
        {
          label: "kundi",
          insertText: "kundi {\n\t$0\n}",
          detail: "else block",
        },
        {
          label: "habang",
          insertText: "habang (${1:kondisyon}) {\n\t$0\n}",
          detail: "while loop",
        },
        {
          label: "ulitin",
          insertText: "ulitin ${1:5} {\n\t$0\n}",
          detail: "repeat N times",
        },
        {
          label: "ilabas",
          insertText: "ilabas(${1:value})",
          detail: "print output",
        },
        {
          label: "ibalik",
          insertText: "ibalik ${1:value}",
          detail: "return value",
        },
        { label: "tama", insertText: "tama", detail: "true" },
        { label: "mali", insertText: "mali", detail: "false" },
        { label: "wala", insertText: "wala", detail: "null" },
      ].map((s) => ({
        ...s,
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertTextRules:
          monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        range,
      }));

      return { suggestions };
    },
  });
};

const applyTheme = (monaco: Monaco) => {
  monaco.editor.defineTheme("wikang-theme", buildMonacoTheme());
  monaco.editor.setTheme("wikang-theme");
};

const CodeEditor = () => {
  const { sourceCode, setSourceCode } = useCodeEditorStore();
  const { data: keywords, isLoading: loadingKeywords } = useGetKeywords();

  const editorRef = useRef<Parameters<OnMount>[0] | null>(null);
  const monacoRef = useRef<Monaco | null>(null);
  const registeredRef = useRef(false);

  useEffect(() => {
    if (!monacoRef.current || !keywords || registeredRef.current) return;
    registerWikang(monacoRef.current, keywords.keywords);

    const model = editorRef.current?.getModel();
    if (model) monacoRef.current.editor.setModelLanguage(model, "wikang");
    registeredRef.current = true;
  }, [keywords]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (!monacoRef.current) return;
      applyTheme(monacoRef.current);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const handleMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;

    applyTheme(monaco);

    if (keywords && !registeredRef.current) {
      registerWikang(monaco, keywords.keywords);
      const model = editor.getModel();
      if (model) monaco.editor.setModelLanguage(model, "wikang");
      registeredRef.current = true;
    }

    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      editor.trigger("keyboard", "editor.action.formatDocument", null);
    });
  };

  return (
    <>
      <Editor
        loading={loadingKeywords ? "Naglo-load…" : undefined}
        className="-ml-2"
        defaultLanguage="plaintext"
        defaultValue={sourceCode}
        value={sourceCode}
        onChange={(e) => setSourceCode(e ?? "")}
        onMount={handleMount}
        options={{
          fontSize: 14,
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          fontLigatures: true,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          lineNumbers: "on",
          renderLineHighlight: "line",
          padding: { top: 16 },
          tabSize: 2,
        }}
      />
    </>
  );
};

export default CodeEditor;
