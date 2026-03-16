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
    case "tagalog":
      return wika;
    case "git":
      return git;
  }
};

export const getCSSVar = (name: string, fallback = ""): string => {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();

  return value || fallback;
};

/* ---------------- COLOR HELPERS ---------------- */

const parseColor = (
  color: string,
): { r: number; g: number; b: number } | null => {
  if (!color) return null;

  const cleaned = color.trim();

  if (/^#[0-9a-fA-F]{6}$/.test(cleaned)) {
    return {
      r: parseInt(cleaned.slice(1, 3), 16),
      g: parseInt(cleaned.slice(3, 5), 16),
      b: parseInt(cleaned.slice(5, 7), 16),
    };
  }

  if (/^#[0-9a-fA-F]{3}$/.test(cleaned)) {
    return {
      r: parseInt(cleaned[1] + cleaned[1], 16),
      g: parseInt(cleaned[2] + cleaned[2], 16),
      b: parseInt(cleaned[3] + cleaned[3], 16),
    };
  }

  const rgbMatch = cleaned.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);

  if (rgbMatch) {
    return {
      r: parseInt(rgbMatch[1]),
      g: parseInt(rgbMatch[2]),
      b: parseInt(rgbMatch[3]),
    };
  }

  return null;
};

const toHex = (color: string, fallback = "#888888"): string => {
  const parsed = parseColor(color);

  if (!parsed) return fallback;

  const { r, g, b } = parsed;

  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};

const token = (v: string, fallback = "888888"): string => {
  const hex = toHex(v, `#${fallback}`).replace("#", "");

  if (!/^[0-9a-fA-F]{6}$/.test(hex)) return fallback;

  return hex;
};

const color = (v: string, fallback = "#888888"): string => {
  const hex = toHex(v, fallback);

  if (!/^#[0-9a-fA-F]{6}$/.test(hex)) return fallback;

  return hex;
};

const blendWithOpacity = (fg: string, bg: string, opacity: number): string => {
  const fgParsed = parseColor(fg);
  const bgParsed = parseColor(bg);

  if (!fgParsed || !bgParsed) return "#000000";

  const r = Math.round(fgParsed.r * opacity + bgParsed.r * (1 - opacity));
  const g = Math.round(fgParsed.g * opacity + bgParsed.g * (1 - opacity));
  const b = Math.round(fgParsed.b * opacity + bgParsed.b * (1 - opacity));

  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};

/* ---------------- MONACO THEME BUILDER ---------------- */

export const buildMonacoTheme = (): editor.IStandaloneThemeData => {
  const bg = getCSSVar("--bg-base", "#0a0a0a");
  const surface = getCSSVar("--bg-surface", "#171717");

  const text = getCSSVar("--text-main", "#ffffff");
  const muted = getCSSVar("--text-muted", "#aaaaaa");

  const border = getCSSVar("--ui-border-strong", "#333333");

  const keyword = getCSSVar("--vsc-token-keyword", "#569cd6");
  const string = getCSSVar("--vsc-token-string", "#ce9178");
  const comment = getCSSVar("--vsc-token-comment", "#6a9955");
  const variable = getCSSVar("--vsc-token-variable", "#9cdcfe");
  const number = getCSSVar("--vsc-token-number", "#b5cea8");
  const type = getCSSVar("--vsc-token-type", "#4ec9b0");
  const operator = getCSSVar("--vsc-token-operator", "#d4d4d4");

  const bgParsed = parseColor(bg);

  const isLight = bgParsed
    ? (bgParsed.r * 299 + bgParsed.g * 587 + bgParsed.b * 114) / 1000 > 128
    : false;

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
