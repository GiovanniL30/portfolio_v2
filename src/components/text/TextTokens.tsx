import { type ReactNode } from "react";

type TokenVariant =
  | "keyword"
  | "string"
  | "comment"
  | "function"
  | "variable"
  | "number"
  | "type"
  | "operator";

interface TextTokenProps {
  variant: TokenVariant;
  children: ReactNode;
  className?: string;
}

export const TextToken = ({
  variant,
  children,
  className = "",
}: TextTokenProps) => (
  <span className={`text-token-${variant} ${className}`.trim()}>
    {children}
  </span>
);
