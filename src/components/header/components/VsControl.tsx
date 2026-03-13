import logo from "../../../assets/icons/vscode.png";
import Button from "../../ui/Button";

const controls = ["Terminal", "Help"];

const VsControl = () => {
  return (
    <div className="md:w-full flex justify-start w-fit">
      <div className="flex items-center gap-2.5">
        <img className="w-4 h-4 " src={logo} alt="" />
        {controls.map((control) => (
          <Button variant="icon" className="p-1! text-text-muted hidden md:flex" key={control}>
            {control}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default VsControl;
