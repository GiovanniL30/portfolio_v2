import { contactTab } from "../../data/fileSystem";
import { useEditorStore } from "../../store/useEditorStore";
import { useTerminalStore } from "../../store/useTerminalStore";

import Button from "../ui/Button";

const VsControl = () => {
  const { setIsTerminalOpen, isTerminalOpen } = useTerminalStore();
  const { setOpenTab } = useEditorStore();

  const controls = [
    {
      label: "Terminal",
      onClick: () => setIsTerminalOpen(!isTerminalOpen),
    },
    {
      label: "Contact",
      onClick: () => setOpenTab(contactTab),
    },
  ];

  return (
    <div className="md:w-full flex justify-start w-fit">
      <div className="flex items-center gap-2.5">
        <img className="w-4 h-4" src={"/favicon.ico"} alt="" />
        {controls.map(({ label, onClick }) => (
          <Button
            onClick={onClick}
            variant="icon"
            className="p-1! text-text-muted hidden md:flex"
            key={label}
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default VsControl;
