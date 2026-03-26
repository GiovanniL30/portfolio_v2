import { useEffect, useState } from "react";
import ActivityBar from "../components/ActivityBar";
import Header from "../components/header/Header";
import MainContent from "../components/MainContent";
import { Group, Panel, Separator } from "react-resizable-panels";
import { Outlet } from "react-router-dom";
import MainTerminal from "../components/terminal/MainTerminal";
import { useTerminalStore } from "../store/useTerminalStore";
import { useIsMobile } from "../hooks/useIsMobile";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";
import { MessageCircle, X } from "lucide-react";
import Bot from "../components/bot/Bot";

const RootLayout = () => {
  const { terminalRef } = useTerminalStore();
  const isMobile = useIsMobile("md");
  const [botOpen, setBotOpen] = useState(false);
  const [nudgeVisible, setNudgeVisible] = useState(false);
  const [nudgeDismissed, setNudgeDismissed] = useState(false);

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

  useEffect(() => {
    if (nudgeDismissed || botOpen) return;

    const timer = setTimeout(() => {
      setNudgeVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [nudgeDismissed, botOpen]);

  useEffect(() => {
    if (!botOpen) return;

    const rafId = requestAnimationFrame(() => {
      setNudgeVisible(false);
    });

    return () => cancelAnimationFrame(rafId);
  }, [botOpen]);

  const handleDismissNudge = (e: React.MouseEvent) => {
    e.stopPropagation();
    setNudgeVisible(false);
    setNudgeDismissed(true);
  };

  const handleOpenBot = () => {
    setBotOpen((prev) => !prev);
    setNudgeVisible(false);
    setNudgeDismissed(true);
  };

  return (
    <div className="flex flex-col h-screen bg-base font-vscode-editor">
      <Header />
      <div className="flex flex-1 min-h-0 w-full">
        {!isMobile && <ActivityBar />}

        {isMobile ? (
          <Group orientation="vertical">
            <Panel minSize={200} className="flex-1 min-h-0 overflow-hidden!">
              <MainContent />
            </Panel>
            <Separator className="h-0.5 border-t border-text-muted/50 hover:border-primary transition-colors cursor-col-resize" />
            <Panel panelRef={terminalRef} className="flex-1 min-h-0 overflow-hidden!" defaultSize={0} collapsible collapsedSize={5} minSize={150}>
              <MainTerminal />
            </Panel>
          </Group>
        ) : (
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
                <Panel panelRef={terminalRef} className="flex-1 min-h-0 overflow-hidden!" defaultSize={0} collapsible collapsedSize={5} minSize={150}>
                  <MainTerminal />
                </Panel>
              </Group>
            </Panel>
          </Group>
        )}
      </div>
      <Footer />

      {/* Bot panel */}
      <div
        className={`fixed bottom-24 right-5 z-9999 transition-all duration-300 ease-out origin-bottom-right ${
          botOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <Bot />
      </div>

      {/* Nudge bubble */}
      <div
        className={`fixed bottom-25 right-5 z-50 transition-all duration-300 ease-out ${
          nudgeVisible && !botOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <div
          onClick={handleOpenBot}
          className="relative bg-surface border border-text-muted/30 text-text-primary text-sm rounded-2xl rounded-br-sm px-4 py-3 shadow-lg cursor-pointer hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-3"
        >
          <span>Do you have any questions?</span>
          <button
            onClick={handleDismissNudge}
            className="text-text-muted hover:text-text-primary transition-colors shrink-0 p-1 -m-1 rounded-full"
            aria-label="Dismiss"
          >
            <X size={14} />
          </button>

          {/* Little tail pointing to the button */}
          <span className="absolute -bottom-1.75 right-3 w-3.5 h-3.5 bg-surface border-r border-b border-text-muted/30 rotate-45 z-10" />
        </div>
      </div>

      {/* Chat toggle button */}
      <Button className="fixed bottom-12 right-5 rounded-full! p-2! bg-primary z-50" onClick={handleOpenBot}>
        {botOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </Button>
    </div>
  );
};

export default RootLayout;
