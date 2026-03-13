import { createContext } from "react";
import type { FileNode } from "../@types/fileSystem";

export type EditorState = {
  openTabs: FileNode[];
  activeFile: FileNode | null;
  openFile: (file: FileNode) => void;
  closeTab: (file: FileNode) => void;
  setActiveFile: (file: FileNode) => void;
  setOpenTabs: React.Dispatch<React.SetStateAction<FileNode[]>>;
  setOpenTab: (file: FileNode) => void;
};

export const EditorContext = createContext<EditorState | null>(null);
