import { ChevronRightIcon } from "lucide-react";
import { useEditor } from "../context/useEditor";

const ActiveFileSourcePath = () => {
  const { activeFile } = useEditor();
  return (
    <>
      {activeFile?.path && (
        <div className="flex items-center gap-1 text-xs text-text-muted z-10 p-2">
          {activeFile.path.split("/").map((segment, i, arr) => (
            <span key={i} className="flex items-center gap-1">
              {i > 0 && <ChevronRightIcon size={12} />}
              <span className={i === arr.length - 1 ? "text-text-main" : ""}>{segment}</span>
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default ActiveFileSourcePath;
