import { Menu, Terminal, X, Settings2, FolderOpen } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import FileTree from "./fileTree/FileTree";
import { useTerminalStore } from "../store/useTerminalStore";
import { useActionBarStore } from "../store/useActionBarStore";

const HamburgerMenu = () => {
  const { open } = useActionBarStore();
  const { setIsTerminalOpen } = useTerminalStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const actionBtn =
    "flex items-center gap-2 w-full px-2 py-1.5 rounded text-sm text-text-muted hover:bg-text-muted/10 hover:text-text transition-colors";

  return (
    <div className="relative" ref={menuRef}>
      <button className="flex items-center" onClick={() => setIsMenuOpen((prev) => !prev)}>
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isMenuOpen && (
        <div className="absolute top-full right-0 mt-2 w-64 z-9999 rounded-md border border-text-muted/20 bg-base shadow-xl overflow-hidden">
          {/* File Tree Section */}
          <div className="px-3 pt-3 pb-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
              <FolderOpen size={12} />
              Explorer
            </div>
            <div className="rounded-md border border-text-muted/15 bg-text-muted/5 overflow-auto max-h-56">
              <FileTree />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-text-muted/15 mx-3" />

          {/* Actions Section */}
          <div className="px-2 py-2 flex flex-col gap-0.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-text-muted px-2 mb-1">Actions</div>
            <button
              className={actionBtn}
              onClick={() => {
                setIsTerminalOpen(true);
                setIsMenuOpen(false);
              }}
            >
              <Terminal size={14} />
              Open Terminal
            </button>
            <button
              className={actionBtn}
              onClick={() => {
                open();
                setIsMenuOpen(false);
              }}
            >
              <Settings2 size={14} />
              Settings
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
