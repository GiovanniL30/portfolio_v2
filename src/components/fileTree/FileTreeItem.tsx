import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import type { FileNode } from "../../@types/fileSystem";

import { getFileIcon } from "../../utils/ui.utils";
import { useEditorStore } from "../../store/useEditorStore";

type FileTreeItemProps = {
  node: FileNode;
  depth: number;
};

const FileTreeItem = ({ node, depth }: FileTreeItemProps) => {
  const [isOpen, setIsOpen] = useState(node.name === "src" || node.name === "about" ? true : false);
  const { activeFile, openFile } = useEditorStore();

  if (node.type === "folder") {
    return (
      <div className="mt-.5">
        <button
          className="flex items-center w-full gap-1 py-0.5 text-sm text-text-muted hover:bg-text-muted/10 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          style={{ paddingLeft: depth * 12 }}
        >
          {isOpen ? <ChevronDownIcon size={16} /> : <ChevronRightIcon size={16} />}
          <img src={isOpen ? getFileIcon("openFolder") : getFileIcon("folder")} alt="folder" className="w-4 h-4" />
          <span className="text-nowrap">{node.name}</span>
        </button>
        {isOpen && node.children?.map((child) => <FileTreeItem key={child.name} node={child} depth={depth + 1} />)}
      </div>
    );
  }

  const isActive = activeFile?.name === node.name;

  return (
    <button
      className={`flex items-center w-full gap-1 py-0.5 text-sm cursor-pointer mt-0.5 ${
        isActive ? "bg-text-muted/20 text-text-main" : "text-text-muted hover:bg-text-muted/10"
      }`}
      style={{ paddingLeft: depth * 12 }}
      onClick={() => openFile(node)}
    >
      <img src={getFileIcon(node.name)} alt="icon" className="w-4 h-4" />

      <span className="text-nowrap">{node.name}</span>
    </button>
  );
};

export default FileTreeItem;
