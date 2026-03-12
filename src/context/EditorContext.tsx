import { useState, type ReactNode } from "react";
import type { FileNode } from "../@types/fileSystem";
import { EditorContext } from "./editorState";
import { aboutTab } from "../data/fileSystem.tsx";

export const EditorProvider = ({ children }: { children: ReactNode }) => {
  const [openTabs, setOpenTabs] = useState<FileNode[]>([aboutTab]);
  const [activeFile, setActiveFile] = useState<FileNode | null>(aboutTab);

  const openFile = (file: FileNode) => {
    if (!openTabs.some((tab) => tab.name === file.name)) {
      setOpenTabs((prev) => [...prev, file]);
    }
    setActiveFile(file);
  };

  const closeTab = (file: FileNode) => {
    setOpenTabs((prev) => {
      const newTabs = prev.filter((tab) => tab.name !== file.name);
      if (activeFile?.name === file.name) {
        setActiveFile(newTabs.length > 0 ? newTabs[newTabs.length - 1] : null);
      }
      return newTabs;
    });
  };

  return (
    <EditorContext.Provider
      value={{ openTabs, activeFile, openFile, closeTab, setActiveFile }}
    >
      {children}
    </EditorContext.Provider>
  );
};
