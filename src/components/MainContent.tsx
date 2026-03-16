import NoOpenTab from "./tabs/NoOpenTab";
import OpenedTabs from "./OpenedTabs";
import ActiveFileSourcePath from "./ActiveFileSourcePath";
import { useEditorStore } from "../store/useEditorStore";

const MainContent = () => {
  const { activeFile, topRef } = useEditorStore();

  return (
    <div className="flex flex-col flex-1 h-full bg-surface/60 font-vscode-editor">
      <div ref={topRef} className="h-0 w-full" />
      <OpenedTabs />
      <div className="flex-1 min-h-0 flex flex-col ">
        <ActiveFileSourcePath />
        <div className="flex-1 overflow-y-auto p-4">
          {activeFile?.content ? activeFile.content() : <NoOpenTab />}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
