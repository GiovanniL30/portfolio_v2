import { type ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils/cn.utils";

type InputProps = ComponentPropsWithoutRef<"input"> &
  ComponentPropsWithoutRef<"textarea"> & {
    className?: string;
    as?: "input" | "textarea";
  };

const baseStyles = `
  w-full
  bg-surface
  border border-text-muted/20
  text-text-main 
  placeholder:text-text-muted/40!
  px-3 py-2
  font-mono
  rounded-sm
  outline-none
  transition-colors duration-150
  focus:border-primary
  disabled:opacity-40 disabled:cursor-not-allowed
`;

const Input = ({ className, as = "input", ...props }: InputProps) => {
  if (as === "textarea") {
    return (
      <textarea
        className={cn(
          baseStyles,
          "resize-none min-h-25 small-scroll",
          className,
        )}
        {...(props as ComponentPropsWithoutRef<"textarea">)}
      />
    );
  }

  return (
    <input
      className={cn(baseStyles, className)}
      {...(props as ComponentPropsWithoutRef<"input">)}
    />
  );
};

export default Input;
