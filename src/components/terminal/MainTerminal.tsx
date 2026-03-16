import type { TerminalTab } from "../../@types/terminal";
import { useTerminalStore } from "../../store/useTerminalStore";
import OutputTerminal from "./OutputTerminal";
import Terminal from "./Terminal";

const renderContent = (tab: TerminalTab) => {
  switch (tab) {
    case "OUTPUT":
      return <OutputTerminal />;
    case "TERMINAL":
      return <Terminal />;
  }
};

const MainTerminal = () => {
  const { tabs, activeTab, setActiveTab } = useTerminalStore();

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex items-center gap-5 px-5 pt-3 pb-0 shrink-0 border-b border-text-muted/20">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-xs tracking-wide text-nowrap pb-2 border-b-2 cursor-pointer transition-all ease-linear ${
              tab === activeTab
                ? "border-primary text-text-main!"
                : "border-transparent text-text-muted"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex-1 min-h-0 overflow-hidden">
        {renderContent(activeTab)}
      </div>
    </div>
  );
};

export default MainTerminal;
