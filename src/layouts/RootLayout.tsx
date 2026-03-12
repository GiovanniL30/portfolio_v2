import { useEffect, useState } from "react";
import ActivityBar from "../components/ActivityBar";
import Header from "../components/Header";
import { Group, Panel, Separator } from "react-resizable-panels";
import SideBar from "../components/SideBar";

const RootLayout = () => {
  const [theme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="h-screen bg-base overflow-y-hidden">
      <Header />
      <div className="flex h-full w-full">
        <ActivityBar />
        <Group orientation="horizontal">
          <Panel collapsible collapsedSize={0} minSize={150} defaultSize={250}>
            <SideBar />
          </Panel>
          <Separator className="w-.5 border-l border-text-muted/50 hover:border-primary transition-colors cursor-col-resize" />
          <Panel minSize={200}>
            <Group orientation="vertical">
              <Panel minSize={200}>top</Panel>
              {/* <Separator className="h-[6px] border-t border-text-muted/50 hover:bg-primary transition-colors cursor-row-resize" />
              <Panel defaultSize={1} collapsible collapsedSize={0} minSize={10}>
                bottom
              </Panel> */}
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
