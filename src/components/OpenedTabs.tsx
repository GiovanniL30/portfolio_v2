import { useEditor } from "../context/useEditor";
import { getFileIcon } from "../utils/ui.utils";
import { XIcon } from "lucide-react";
import { useRef, useState } from "react";

const OpenedTabs = () => {
  const { openTabs, activeFile, setActiveFile, closeTab, setOpenTabs } = useEditor();
  const dragIndex = useRef<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragStart = (e: React.DragEvent, index: number) => {
    dragIndex.current = index;
    try {
      e.dataTransfer?.setData("text/plain", String(index));
    } catch {
      console.error("Failed to drag");
    }
    e.dataTransfer!.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
    e.dataTransfer!.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    const from = dragIndex.current;
    const to = index;
    if (from === null || from === undefined) return;
    if (from === to) {
      dragIndex.current = null;
      setDragOverIndex(null);
      return;
    }
    setOpenTabs((prev) => {
      const next = prev.slice();
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
    dragIndex.current = null;
    setDragOverIndex(null);
  };

  return (
    <>
      {openTabs.length > 0 && (
        <div className="flex border-b border-text-muted/20 bg-surface/30 overflow-x-auto">
          {openTabs.map((tab, idx) => (
            <div
              key={tab.name}
              draggable
              onDragStart={(e) => handleDragStart(e, idx)}
              onDragOver={(e) => handleDragOver(e, idx)}
              onDrop={(e) => handleDrop(e, idx)}
              className={`flex items-center gap-1 px-3 py-1.5 text-sm cursor-pointer border-r border-text-muted/20 select-none ${
                activeFile?.name === tab.name ? "bg-base text-text-main border-t border-t-primary" : "text-text-muted hover:bg-text-muted/10"
              } ${dragOverIndex === idx ? "ring-2 ring-offset-1 ring-primary/30" : ""}`}
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
