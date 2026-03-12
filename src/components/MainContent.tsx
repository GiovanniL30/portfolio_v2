import { XIcon, ChevronRightIcon } from "lucide-react";
import { useEditor } from "../context/useEditor";
import { getFileIcon } from "../utils/ui.utils";

const MainContent = () => {
  const { openTabs, activeFile, setActiveFile, closeTab } = useEditor();

  return (
    <div className="flex flex-col h-full bg-surface/60 font-vscode-editor">
      {openTabs.length > 0 && (
        <div className="flex border-b border-text-muted/20 bg-surface/30 overflow-x-auto">
          {openTabs.map((tab) => (
            <div
              key={tab.name}
              className={`flex items-center gap-1 px-3 py-1.5 text-sm cursor-pointer border-r border-text-muted/20 ${
                activeFile?.name === tab.name
                  ? "bg-base text-text-main border-t border-t-primary"
                  : "text-text-muted hover:bg-text-muted/10"
              }`}
              onClick={() => setActiveFile(tab)}
            >
              <img src={getFileIcon(tab.name)} alt="icon" className="w-4 h-4" />

              <span className="text-nowrap">{tab.name}</span>
              <button
                className="ml-1 hover:bg-text-muted/20 rounded p-0.5 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  closeTab(tab);
                }}
              >
                <XIcon size={12} />
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="flex-1 overflow-y-auto p-4">
        {activeFile?.path && (
          <div className="sticky top-0 flex items-center gap-1 text-xs text-text-muted mb-3 z-10">
            {activeFile.path.split("/").map((segment, i, arr) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <ChevronRightIcon size={12} />}
                <span className={i === arr.length - 1 ? "text-text-main" : ""}>
                  {segment}
                </span>
              </span>
            ))}
          </div>
        )}
        {activeFile?.content ? (
          <div className="overflow-y-auto h-full 0">{activeFile.content()}</div>
        ) : (
          <div className="flex items-center justify-center h-full text-text-muted text-sm">
            Open a file from the explorer
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
