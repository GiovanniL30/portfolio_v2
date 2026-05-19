import { useState, useRef, useEffect, useCallback, type ReactNode } from "react";
import Themes from "./Themes";
import { useActionBarStore } from "../../store/useActionBarStore";

type ActionItem = {
  name: string;
  content?: ReactNode;
  handler?: () => void;
};

const actionsList: ActionItem[] = [
  {
    name: "Themes",
    content: <Themes />,
  },
  {
    name: "View Resume",
    handler: () => window.open("/Leo - Resume.pdf", "_blank"),
  },
];

const ActionsBar = () => {
  const { isOpen, open, close } = useActionBarStore();

  const [search, setSearch] = useState("");
  const [openAction, setOpenAction] = useState<ActionItem | null>(null);

  const wrapperRef = useRef<HTMLDivElement>(null);

  // All resets happen in handlers — no effect needed
  const closeAll = useCallback(() => {
    setOpenAction(null);
    setSearch("");
    close();
  }, [close]);

  const openBar = useCallback(() => {
    setOpenAction(null);
    setSearch("");
    open();
  }, [open]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        closeAll();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, closeAll]);

  const filteredActions = actionsList.filter((a) => a.name.toLowerCase().includes(search.toLowerCase()));

  const showTabs = isOpen && !openAction;

  return (
    <div className="relative w-full max-w-100 flex justify-center mx-auto" ref={wrapperRef}>
      {!isOpen || openAction ? (
        <button
          className="bg-surface py-1.5 w-full flex justify-center border border-text-muted/70 rounded-lg text-xs font-light cursor-pointer hover:bg-surface-hover"
          onClick={openBar}
        >
          Giovanni M. Leo
        </button>
      ) : (
        <input
          type="text"
          value={search}
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search actions..."
          className="bg-surface py-1.5 px-2 w-full border border-text-muted/70 rounded-lg text-xs outline-none"
        />
      )}

      {showTabs && (
        <div className="absolute left-0 right-0 top-full mt-1 z-9999 bg-surface border border-text-muted/70 rounded-lg shadow-lg p-2 text-xs">
          <ul className="max-h-48 overflow-y-auto">
            {filteredActions.length > 0 ? (
              filteredActions.map((action, index) => (
                <li
                  key={index}
                  className="px-3 py-2 cursor-pointer hover:bg-accent/10 rounded text-text-main"
                  onClick={() => {
                    if (action.handler) {
                      action.handler();
                      closeAll();
                      return;
                    }
                    setOpenAction(action);
                  }}
                >
                  {action.name}
                </li>
              ))
            ) : (
              <li className="px-3 py-2 text-text-muted">No actions found.</li>
            )}
          </ul>
        </div>
      )}

      {openAction?.content && (
        <div className="absolute left-0 right-0 top-full mt-1 z-[9999999] bg-surface border border-text-muted/70 rounded-lg shadow-lg p-4 text-xs">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-text-main">{openAction.name}</span>
            <button className="text-text-muted hover:text-text-main transition-colors text-xs cursor-pointer" onClick={closeAll}>
              ✕
            </button>
          </div>
          <div className="text-text-main">{openAction.content}</div>
        </div>
      )}
    </div>
  );
};

export default ActionsBar;
