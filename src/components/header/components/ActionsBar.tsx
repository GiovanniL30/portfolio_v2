import { useState, useRef, useEffect, type ReactNode } from "react";
import Themes from "./Themes";

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
    name: "Download Resume",
    handler: () => {
      window.open("/resume.pdf", "_blank");
    },
  },
];

const ActionsBar = () => {
  const [inputMode, setInputMode] = useState(false);
  const [openTabs, setOpenTabs] = useState(false);
  const [search, setSearch] = useState("");
  const [openAction, setOpenAction] = useState<ActionItem | null>(null);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const closeAll = () => {
    setOpenTabs(false);
    setInputMode(false);
    setOpenAction(null);
    setSearch("");
  };

  useEffect(() => {
    if (!(openTabs || openAction)) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        closeAll();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openTabs, openAction]);

  const filteredActions = actionsList.filter((action) => action.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="relative w-full max-w-100 flex justify-center mx-auto" ref={wrapperRef}>
      {!inputMode || openAction ? (
        <button
          className="bg-surface py-1.5 w-full  flex justify-center border border-text-muted/70 rounded-lg text-xs font-light cursor-pointer hover:bg-surface-hover"
          onClick={() => {
            setInputMode(true);
            setOpenTabs(true);
            setOpenAction(null);
          }}
        >
          Giovanni M. Leo
        </button>
      ) : (
        <input
          type="text"
          value={search}
          autoFocus
          onFocus={() => setOpenTabs(true)}
          onChange={(e) => {
            setSearch(e.target.value);
            if (!openTabs) setOpenTabs(true);
          }}
          placeholder="Search actions..."
          className="bg-surface py-1.5 px-2 w-full border border-text-muted/70 rounded-lg text-xs outline-none"
        />
      )}

      {openTabs && !openAction && (
        <div className="absolute left-0 right-0 top-full mt-1 z-9999 bg-surface border border-text-muted/70 rounded-lg shadow-lg p-2 flex flex-col gap-2 text-xs">
          <ul className="max-h-48 overflow-y-auto">
            {filteredActions.length > 0 ? (
              filteredActions.map((action, index) => (
                <li
                  key={index}
                  className="px-3 py-2 cursor-pointer hover:bg-accent/10 rounded text-text-main "
                  onClick={() => {
                    setOpenAction(action);
                    setOpenTabs(false);
                  }}
                >
                  {action.name}
                </li>
              ))
            ) : (
              <li className="px-3 py-2 text-text-muted ">No actions found.</li>
            )}
          </ul>
        </div>
      )}

      {openAction && openAction.content && (
        <div className="absolute left-0 right-0 top-full mt-1 z-9999999 bg-surface border border-text-muted/70 rounded-lg shadow-lg p-4 flex flex-col gap-2 text-xs">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-text-main ">{openAction.name}</span>
          </div>
          <div className="text-text-main ">{openAction.content}</div>
        </div>
      )}
    </div>
  );
};

export default ActionsBar;
