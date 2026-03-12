import { cloneElement } from "react";
import { FileIcon, GitBranchIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

const items = [
  {
    icon: <FileIcon />,
    path: "/",
    onHoverText: "Explorer",
  },
  {
    icon: <GitBranchIcon />,
    path: "/git",
    onHoverText: "Source Control",
  },
];

const ActivityBar = () => {
  return (
    <div className="flex flex-col gap-5  border-r-[0.5px] border-text-muted/50 w-fit h-full bg-surface/30">
      {items.map((item, index) => (
        <NavLink
          className={({ isActive }) =>
            `border-l-2 ${isActive ? "border-l-primary " : "border-l-transparent"}`
          }
          to={item.path}
          key={index}
          end={true}
        >
          {({ isActive }) =>
            cloneElement(item.icon, {
              size: 23,
              className: `m-3 ${isActive ? " text-text-main" : "text-text-muted/90"}`,
            })
          }
        </NavLink>
      ))}
    </div>
  );
};

export default ActivityBar;
