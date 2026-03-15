import reactIcon from "../assets/icons/react.png";
import jsonIcon from "../assets/icons/json.png";
import mdIcon from "../assets/icons/letter-i.png";
import folderIcon from "../assets/icons/folder.png";
import folderOpen from "../assets/icons/icons8-opened-folder-48.png";
import git from "../assets/icons/icons8-git-48.png";
import wika from "../assets/icons/wika.svg";
import type { editor } from "monaco-editor";

export const getFileIcon = (name: string) => {
  const ext = name.split(".").pop()?.toLowerCase();
  switch (ext) {
    case "tsx":
    case "jsx":
      return reactIcon;
    case "json":
      return jsonIcon;
    case "md":
      return mdIcon;
    case "folder":
      return folderIcon;
    case "openfolder":
      return folderOpen;
    case "wika":
      return wika;
    case "git":
      return git;
  }
};

export const getCSSVar = (name: string) => {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
};

const blendWithOpacity = (fg: string, bg: string, opacity: number): string => {
  const fgR = parseInt(fg.slice(1, 3), 16);
  const fgG = parseInt(fg.slice(3, 5), 16);
  const fgB = parseInt(fg.slice(5, 7), 16);

  const bgR = parseInt(bg.slice(1, 3), 16);
  const bgG = parseInt(bg.slice(3, 5), 16);
  const bgB = parseInt(bg.slice(5, 7), 16);

  const r = Math.round(fgR * opacity + bgR * (1 - opacity));
  const g = Math.round(fgG * opacity + bgG * (1 - opacity));
  const b = Math.round(fgB * opacity + bgB * (1 - opacity));

  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};

export const buildMonacoTheme = (): editor.IStandaloneThemeData => {
  const bg = getCSSVar("--bg-base");
  const surface = getCSSVar("--bg-surface");
  const text = getCSSVar("--text-main");
  const muted = getCSSVar("--text-muted");
  const border = getCSSVar("--ui-border-strong");
  const keyword = getCSSVar("--vsc-token-keyword");
  const string = getCSSVar("--vsc-token-string");
  const comment = getCSSVar("--vsc-token-comment");
  const variable = getCSSVar("--vsc-token-variable");
  const number = getCSSVar("--vsc-token-number");
  const type = getCSSVar("--vsc-token-type");
  const operator = getCSSVar("--vsc-token-operator");

  const token = (v: string) => v.replace("#", "");
  const color = (v: string) => (v.startsWith("#") ? v : `#${v}`);

  const r = parseInt(bg.slice(1, 3), 16);
  const g = parseInt(bg.slice(3, 5), 16);
  const b = parseInt(bg.slice(5, 7), 16);
  const isLight = (r * 299 + g * 587 + b * 114) / 1000 > 128;

  const editorBg = blendWithOpacity(surface, bg, 0.6);

  return {
    base: isLight ? "vs" : "vs-dark",
    inherit: false,
    rules: [
      { token: "keyword", foreground: token(keyword), fontStyle: "bold" },
      { token: "string", foreground: token(string) },
      { token: "comment", foreground: token(comment), fontStyle: "italic" },
      { token: "identifier", foreground: token(variable) },
      { token: "number", foreground: token(number) },
      { token: "type", foreground: token(type) },
      { token: "operator", foreground: token(operator) },
      { token: "", foreground: token(text) },
    ],
    colors: {
      "editor.background": editorBg,
      "editor.foreground": color(text),
      "editorLineNumber.foreground": color(muted),
      "editor.lineHighlightBackground": blendWithOpacity(surface, bg, 0.8),
      "editorCursor.foreground": color(keyword),
      "editor.selectionBackground": blendWithOpacity(surface, bg, 0.8),
      "editorIndentGuide.background": color(border),
      "editorWidget.background": color(surface),
      "editorSuggestWidget.background": color(surface),
      "editorSuggestWidget.border": color(border),
      "editorSuggestWidget.selectedBackground": color(border),
    },
  };
};
