import ActionsBar from "./ActionsBar";
import VsControl from "./VsControl";
import WebControl from "./WebControl";

const Header = () => {
  return (
    <header className="border-b border-b-text-muted/50 p-3 py-1.5 flex justify-between items-center">
      <VsControl />
      <ActionsBar />
      <WebControl />
    </header>
  );
};

export default Header;
