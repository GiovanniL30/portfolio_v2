import FileTree from "../../components/fileTree/FileTree";

const Explorer = () => {
  return (
    <div className="h-full overflow-y-auto bg-surface/80">
      <div className="p-2">
        <p className="text-xs text-text-muted uppercase tracking-wide">Explorer</p>
      </div>
      <FileTree />
    </div>
  );
};

export default Explorer;
