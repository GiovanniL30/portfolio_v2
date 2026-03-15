import Editor, { type Monaco, type OnMount } from "@monaco-editor/react";
import { buildMonacoTheme } from "../../../utils/ui.utils";
import { useEffect, useRef } from "react";

const CodeEditor = () => {
  const editorRef = useRef<Parameters<OnMount>[0] | null>(null);
  const monacoRef = useRef<Monaco | null>(null);

  const applyTheme = (monaco: Monaco) => {
    monaco.editor.defineTheme("wikang-theme", buildMonacoTheme());
    monaco.editor.setTheme("wikang-theme");
  };

  const handleMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;
    applyTheme(monaco);
  };

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

  return <Editor className="-ml-2" defaultLanguage="javascript" defaultValue="// some comment" onMount={handleMount} />;
};

export default CodeEditor;
