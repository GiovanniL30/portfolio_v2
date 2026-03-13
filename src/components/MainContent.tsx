import { useEditor } from "../context/useEditor";
import NoOpenTab from "./tabs/NoOpenTab";
import OpenedTabs from "./tabs/components/OpenedTabs";
import ActiveFileSourcePath from "./tabs/components/ActiveFileSourcePath";

const MainContent = () => {
  const { activeFile, topRef } = useEditor();

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-surface/60 font-vscode-editor">
      <div ref={topRef} className="h-0 w-full" />
      <OpenedTabs />
      <div className="flex-1 min-h-0 flex flex-col">
        <div className="p-4 h-full">
          <ActiveFileSourcePath />
          <div>{activeFile?.content ? activeFile.content() : <NoOpenTab />}</div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
