import { useRef, useState, type ReactNode } from "react";
import type { FileNode } from "../@types/fileSystem";
import { EditorContext } from "./editorState";
import { aboutTab, readMeTab } from "../data/fileSystem";

export const EditorProvider = ({ children }: { children: ReactNode }) => {
  const [openTabs, setOpenTabs] = useState<FileNode[]>([readMeTab, aboutTab]);
  const [activeFile, setActiveFile] = useState<FileNode | null>(readMeTab);
  const topRef = useRef<HTMLDivElement | null>(null);

  const openFile = (file: FileNode) => {
    if (!openTabs.some((tab) => tab.name === file.name)) {
      setOpenTabs((prev) => [...prev, file]);
    }
    setActiveFile(file);
    setTimeout(() => {
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
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

  const setOpenTab = (file: FileNode) => {
    setActiveFile(file);
    setOpenTabs((prev) => {
      const withoutAbout = prev.filter((c) => c.name !== file.name);
      return [file, ...withoutAbout];
    });
    setTimeout(() => {
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  return (
    <EditorContext.Provider
      value={{
        topRef,
        setOpenTab,
        openTabs,
        activeFile,
        openFile,
        closeTab,
        setActiveFile,
        setOpenTabs,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};
