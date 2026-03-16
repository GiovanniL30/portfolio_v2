import { createRef } from "react";
import { create } from "zustand";
import type { FileNode } from "../@types/fileSystem";
import { aboutTab, projectsTab, readMeTab } from "../data/fileSystem";

type EditorState = {
  openTabs: FileNode[];
  activeFile: FileNode | null;
  topRef: React.RefObject<HTMLDivElement | null>;

  openFile: (file: FileNode) => void;
  closeTab: (file: FileNode) => void;
  setActiveFile: (file: FileNode) => void;
  setOpenTabs: (tabs: FileNode[]) => void;
  setOpenTab: (file: FileNode) => void;
};

export const useEditorStore = create<EditorState>((set, get) => ({
  openTabs: [],
  activeFile: null,
  topRef: createRef<HTMLDivElement>(),

  openFile: (file) => {
    const { openTabs, topRef } = get();

    if (!openTabs.some((tab) => tab.name === file.name)) {
      set((s) => ({ openTabs: [...s.openTabs, file] }));
    }

    set({ activeFile: file });

    setTimeout(() => {
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  },

  closeTab: (file) => {
    const { activeFile } = get();
    set((s) => {
      const newTabs = s.openTabs.filter((tab) => tab.name !== file.name);
      const newActive =
        activeFile?.name === file.name
          ? (newTabs[newTabs.length - 1] ?? null)
          : s.activeFile;
      return { openTabs: newTabs, activeFile: newActive };
    });
  },

  setActiveFile: (file) => set({ activeFile: file }),

  setOpenTabs: (tabs) => set({ openTabs: tabs }),

  setOpenTab: (file) => {
    const { topRef } = get();
    set((s) => ({
      activeFile: file,
      openTabs: [file, ...s.openTabs.filter((c) => c.name !== file.name)],
    }));
    setTimeout(() => {
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  },
}));

setTimeout(() => {
  useEditorStore.setState({
    openTabs: [readMeTab, aboutTab, projectsTab],
    activeFile: readMeTab,
  });
}, 0);
