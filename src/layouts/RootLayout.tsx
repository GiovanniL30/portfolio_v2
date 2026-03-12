import { useEffect, useState } from "react";
import ActivityBar from "../components/ActivityBar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import { Group, Panel, Separator } from "react-resizable-panels";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const [theme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="h-screen bg-base overflow-hidden ">
      <Header />
      <div className="flex h-full w-full">
        <ActivityBar />
        <Group orientation="horizontal">
          <Panel collapsible collapsedSize={0} minSize={150} defaultSize={250}>
            <Outlet />
          </Panel>
          <Separator className="w-.5 border-l border-text-muted/50 hover:border-primary transition-colors cursor-col-resize" />
          <Panel minSize={200}>
            <Group orientation="vertical">
              <Panel minSize={200}>
                <MainContent />
              </Panel>
              <Separator className="h-0.5 border-t border-text-muted/50 hover:border-primary transition-colors cursor-col-resize" />
              <Panel
                defaultSize={0}
                collapsible
                collapsedSize={50}
                minSize={150}
              >
                bottom
              </Panel>
            </Group>
          </Panel>
          <Separator className="w-.5 border-l border-text-muted/50 hover:border-primary transition-colors cursor-col-resize" />
          <Panel defaultSize={2} collapsible collapsedSize={2}>
            right
          </Panel>
        </Group>
      </div>
    </div>
  );
};

export default RootLayout;
