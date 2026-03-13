import { useEditor } from "../../../context/useEditor";
import { getFileIcon } from "../../../utils/ui.utils";
import { XIcon } from "lucide-react";

const OpenedTabs = () => {
  const { openTabs, activeFile, setActiveFile, closeTab } = useEditor();
  return (
    <>
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
    </>
  );
};

export default OpenedTabs;
