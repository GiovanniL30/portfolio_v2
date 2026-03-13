import type { ReactNode } from "react";

const Badge = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-xs border p-1 rounded-sm bg-secondary/5 text-secondary text-nowrap">
      {children}
    </div>
  );
};

export default Badge;
