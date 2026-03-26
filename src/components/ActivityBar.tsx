import { cloneElement } from "react";
import { FileIcon, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useActionBarStore } from "../store/useActionBarStore";

const items = [
  {
    icon: <FileIcon />,
    path: "/",
    onHoverText: "Explorer",
  },
];

const ActivityBar = () => {
  const toggle = useActionBarStore((s) => s.toggle);

  return (
    <div className="flex flex-col justify-between border-r-[0.5px] border-text-muted/50 w-fit h-full bg-surface">
      <div className="flex flex-col gap-5">
        {items.map((item, index) => (
          <NavLink
            className={({ isActive }) => `relative border-l-2 ${isActive ? "border-l-primary" : "border-l-transparent"}`}
            to={item.path}
            key={index}
            end={true}
          >
            {({ isActive }) => (
              <div className="group flex items-center">
                {cloneElement(item.icon, {
                  size: 23,
                  className: `m-3 ${isActive ? "text-text-main" : "text-text-muted/90"}`,
                })}
                <span className="absolute left-full top-1/2 -translate-y-1/2 -ml-2 px-2 py-1 rounded bg-surface shadow text-xs text-text-main opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity duration-150">
                  {item.onHoverText}
                </span>
              </div>
            )}
          </NavLink>
        ))}
        <div>
          <button className="cursor-pointer" onClick={toggle}>
            <Settings size={23} className="m-3 text-text-muted/90 hover:text-text-main ease-linear transition-all" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityBar;
