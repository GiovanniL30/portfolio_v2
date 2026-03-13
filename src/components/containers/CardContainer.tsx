import type { ReactNode } from "react";

type CardContainerProps = {
  className?: string;
  children: ReactNode;
};

const CardContainer = ({ className, children }: CardContainerProps) => {
  return (
    <div
      className={`w-full flex flex-col  p-4 bg-background shadow rounded-lg transition-all duration-200 hover:bg-surface-hover/50 hover:shadow-xl hover:scale-[1.04] hover:border-primary border border-text-muted ${className}`}
    >
      {children}
    </div>
  );
};

export default CardContainer;
