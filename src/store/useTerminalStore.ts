import { create } from "zustand";
import type { TerminalTab } from "../@types/terminal";
import { createRef } from "react";
import type { PanelImperativeHandle } from "react-resizable-panels";

export const TERMINAL_TABS: TerminalTab[] = ["OUTPUT", "TERMINAL"] as const;

type TerminalState = {
  activeTab: TerminalTab;
  tabs: TerminalTab[];
  isTerminalOpen: boolean;
  terminalRef: React.RefObject<PanelImperativeHandle | null>;

  setActiveTab: (tab: TerminalTab) => void;
  setIsTerminalOpen: (isTerminalOpen: boolean) => void;
  toggleTerminal: () => void;
};

export const useTerminalStore = create<TerminalState>((set, get) => ({
  terminalRef: createRef<PanelImperativeHandle>(),
  isTerminalOpen: true,
  activeTab: "OUTPUT",
  tabs: [...TERMINAL_TABS],

  setActiveTab: (tab) => set({ activeTab: tab }),
  setIsTerminalOpen: (isTerminalOpen) => {
    const { terminalRef } = get();
    if (isTerminalOpen) {
      terminalRef.current?.expand();
    } else {
      terminalRef.current?.collapse();
    }
    set({ isTerminalOpen });
  },
  toggleTerminal: () => {
    const { isTerminalOpen, setIsTerminalOpen } = get();
    setIsTerminalOpen(!isTerminalOpen);
  },
}));
