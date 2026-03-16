import { useEffect } from "react";
import ActivityBar from "../components/ActivityBar";
import Header from "../components/header/Header";
import MainContent from "../components/MainContent";
import { Group, Panel, Separator } from "react-resizable-panels";
import { Outlet } from "react-router-dom";
import MainTerminal from "../components/terminal/MainTerminal";
import { useTerminalStore } from "../store/useTerminalStore";

const RootLayout = () => {
  const { terminalRef } = useTerminalStore();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    let themeToApply = "dark";
    if (savedTheme) {
      try {
        themeToApply = JSON.parse(savedTheme);
      } catch {
        themeToApply = savedTheme;
      }
    }

    document.documentElement.setAttribute("data-theme", themeToApply);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-base font-vscode-editor">
      <Header />
      <div className="flex flex-1 min-h-0 w-full ">
        <ActivityBar />
        <Group orientation="horizontal">
          <Panel collapsible collapsedSize={5} minSize={150} defaultSize={250}>
            <Outlet />
          </Panel>
          <Separator className="w-.5 border-l border-text-muted/50 hover:border-primary transition-colors cursor-col-resize" />
          <Panel minSize={200} className="flex-1 min-h-0">
            <Group orientation="vertical">
              <Panel minSize={200} className="flex-1 min-h-0 overflow-hidden!">
                <MainContent />
              </Panel>
              <Separator className="h-0.5 border-t border-text-muted/50 hover:border-primary transition-colors cursor-col-resize" />
              <Panel
                panelRef={terminalRef}
                className="flex-1 min-h-0 overflow-hidden!"
                defaultSize={0}
                collapsible
                collapsedSize={5}
                minSize={150}
              >
                <MainTerminal />
              </Panel>
            </Group>
          </Panel>
        </Group>
      </div>
    </div>
  );
};

export default RootLayout;
