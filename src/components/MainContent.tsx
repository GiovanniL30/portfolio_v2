import { XIcon, ChevronRightIcon, CodeIcon } from "lucide-react";
import { useEditor } from "../context/useEditor";
import { getFileIcon } from "../utils/ui.utils";
import Button from "./ui/Button";
import { aboutTab, homeTab, projectsTab } from "../data/fileSystem";

const MainContent = () => {
  const { openTabs, activeFile, setActiveFile, closeTab, setOpenTab } =
    useEditor();

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-surface/60 font-vscode-editor">
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

      <div className="flex-1 min-h-0 flex flex-col">
        <div className="p-4 h-full">
          {activeFile?.path && (
            <div className="flex items-center gap-1 text-xs text-text-muted mb-3 z-10">
              {activeFile.path.split("/").map((segment, i, arr) => (
                <span key={i} className="flex items-center gap-1">
                  {i > 0 && <ChevronRightIcon size={12} />}
                  <span
                    className={i === arr.length - 1 ? "text-text-main" : ""}
                  >
                    {segment}
                  </span>
                </span>
              ))}
            </div>
          )}
          <div className="flex-1 h-full overflow-y-auto">
            {activeFile?.content ? (
              activeFile.content()
            ) : (
              <div className="flex items-center h-screen justify-center flex-1 text-text-muted text-sm flex-col">
                <div className="flex flex-col items-center gap-2">
                  <CodeIcon size={100} />
                  <p className="text-center">Open a file from the explorer</p>
                </div>
                <div className="flex items-start gap-5 mt-10">
                  <p className="text-xs">Quick Actions:</p>
                  <div className="text-xs flex flex-col gap-5">
                    <Button
                      onClick={() => setOpenTab(homeTab)}
                      className="p-2!"
                      variant="outline"
                    >
                      Home
                    </Button>
                    <Button
                      onClick={() => setOpenTab(aboutTab)}
                      className="p-2!"
                      variant="outline"
                    >
                      About Me
                    </Button>
                    <Button
                      onClick={() => setOpenTab(projectsTab)}
                      className="p-2!"
                      variant="outline"
                    >
                      Projects
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
