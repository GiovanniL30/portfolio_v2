import type { ReactNode } from "react";

type CardContainerProps = {
  className?: string;
  children: ReactNode;
};

const CardContainer = ({ className, children }: CardContainerProps) => {
  return (
    <div
      className={`w-full border border-text-muted/50 rounded-md p-3 lg:px-5 lg:py-8 bg-surface hover:shadow-[0_0_5px_var(--brand-primary)] duration-100 ease-linear transition-all hover:bg-surface-hover/50  ${className}`}
    >
      {children}
    </div>
  );
};

export default CardContainer;
