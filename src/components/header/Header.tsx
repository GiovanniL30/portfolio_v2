import ActionsBar from "./components/ActionsBar";
import VsControl from "./components/VsControl";
import WebControl from "./components/WebControl";

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
