import { type ReactNode } from "react";

type TokenVariant = "keyword" | "string" | "comment" | "function" | "variable" | "number" | "type" | "operator";

interface TextTokenProps {
  variant: TokenVariant;
  children: ReactNode;
  className?: string;
}

const variantClassMap: Record<TokenVariant, string> = {
  keyword: "text-token-keyword",
  string: "text-token-string",
  comment: "text-token-comment",
  function: "text-token-function",
  variable: "text-token-variable",
  number: "text-token-number",
  type: "text-token-type",
  operator: "text-token-operator",
};

export const TextToken = ({ variant, children, className = "" }: TextTokenProps) => (
  <span className={`${variantClassMap[variant]} ${className}`.trim()}>{children}</span>
);
