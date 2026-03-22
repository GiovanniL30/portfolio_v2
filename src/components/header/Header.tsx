import { useIsMobile } from "../../hooks/useIsMobile";
import HamburgerMenu from "../HamburgerMenu";
import ActionsBar from "./ActionsBar";
import VsControl from "./VsControl";
import WebControl from "./WebControl";

const Header = () => {
  const isMobile = useIsMobile("md");

  return (
    <header className="border-b border-b-text-muted/50 p-3 py-1.5 flex justify-between items-center gap-3">
      <VsControl />
      <ActionsBar />
      {isMobile ? <HamburgerMenu /> : <WebControl />}
    </header>
  );
};

export default Header;
