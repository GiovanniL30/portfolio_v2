import { CodeIcon } from "lucide-react";
import Button from "../ui/Button";
import { aboutTab, projectsTab, readMeTab } from "../../data/fileSystem";
import { useEditorStore } from "../../store/useEditorStore";

const NoOpenTab = () => {
  const { setOpenTab } = useEditorStore();
  return (
    <div className="flex items-center h-screen justify-center flex-1 text-text-muted text-sm flex-col">
      <div className="flex flex-col items-center gap-2">
        <CodeIcon size={100} />
        <p className="text-center">Open a file from the explorer</p>
      </div>
      <div className="flex items-start gap-5 mt-10">
        <p className="text-xs">Quick Actions:</p>
        <div className="text-xs flex flex-col gap-5">
          <Button
            onClick={() => setOpenTab(readMeTab)}
            className="p-2!"
            variant="outline"
          >
            ReadMe
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
  );
};

export default NoOpenTab;
