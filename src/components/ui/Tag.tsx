import { type ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  className?: string;
};

const Tag = ({ children, className }: TagProps) => {
  return (
    <div
      className={`text-xs bg-primary/20 text-primary  w-fit px-2 py-0.5  rounded-md border border-primary shadow-[0_0_2px_var(--brand-primary)] ${className}`}
    >
      {children}
    </div>
  );
};

export default Tag;
