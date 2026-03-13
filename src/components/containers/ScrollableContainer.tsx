import { type ComponentPropsWithoutRef } from "react";

interface ScrollableContainerProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  scrollable?: boolean;
  scrollLeft?: boolean;
}

const ScrollableContainer = ({
  children,
  className,
  scrollable = true,
  scrollLeft = false,
  ...props
}: ScrollableContainerProps) => {
  const containerDirection = scrollLeft && scrollable ? "rtl" : undefined;
  return (
    <div
      className={`p-2 bg-surface hover:bg-surface-hover/50 rounded-md overflow-x-auto ${className} ${scrollable ? "overflow-y-auto max-h-100" : "h-fit"}`}
      style={
        containerDirection
          ? { direction: containerDirection, ...props.style }
          : props.style
      }
      {...props}
    >
      {scrollLeft && scrollable ? (
        <div style={{ direction: "ltr" }}>{children}</div>
      ) : (
        children
      )}
    </div>
  );
};

export default ScrollableContainer;
