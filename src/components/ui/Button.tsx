import { type ComponentPropsWithoutRef } from "react";

type Variants = "primary" | "outline" | "icon";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: Variants;
}

const Button = ({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseStyle =
    "px-7 py-2.5 rounded-md cursor-pointer transition-all duration-300 ease-linear font-medium tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const buttonStyle = (variant: Variants) => {
    switch (variant) {
      case "primary":
        return "bg-primary";
      case "outline":
        return "bg-text-muted/10 border border-text-muted/40";
      case "icon":
        return "text-xs hover:bg-text-muted/10";
    }
  };

  return (
    <button
      className={`${baseStyle} ${buttonStyle(variant)} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
