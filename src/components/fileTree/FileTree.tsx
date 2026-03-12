import { fileSystem } from "../../data/fileSystem";
import FileTreeItem from "./FileTreeItem";

const FileTree = () => {
  return (
    <div className="py-1 ">
      {fileSystem.map((node) => (
        <FileTreeItem key={node.name} node={node} depth={1} />
      ))}
    </div>
  );
};

export default FileTree;
