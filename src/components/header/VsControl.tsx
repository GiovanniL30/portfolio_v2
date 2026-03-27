import { useTerminalStore } from "../../store/useTerminalStore";
import Button from "../ui/Button";

const controls = ["Terminal", "Help"];

const VsControl = () => {
  const { setIsTerminalOpen, isTerminalOpen } = useTerminalStore();
  return (
    <div className="md:w-full flex justify-start w-fit">
      <div className="flex items-center gap-2.5">
        <img className="w-4 h-4 " src={"/favicon.ico"} alt="" />
        {controls.map((control) => (
          <Button
            onClick={() => {
              if (control === "Terminal") setIsTerminalOpen(!isTerminalOpen);
            }}
            variant="icon"
            className="p-1! text-text-muted hidden md:flex"
            key={control}
          >
            {control}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default VsControl;
