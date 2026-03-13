import { TextToken } from "../text/TextTokens";

type JSONContentProps = {
  value: unknown;
  className?: string;
};

const INDENT = 2;

const renderJSON = (value: unknown, depth = 0) => {
  const pad = (n: number) => Array(n * INDENT + 1).join(" ");
  if (value === null) {
    return <TextToken variant="keyword">null</TextToken>;
  }
  if (typeof value === "string") {
    return <TextToken variant="string">"{value}"</TextToken>;
  }
  if (typeof value === "number") {
    return <TextToken variant="number">{value}</TextToken>;
  }
  if (typeof value === "boolean") {
    return <TextToken variant="keyword">{String(value)}</TextToken>;
  }
  if (Array.isArray(value)) {
    if (value.length === 0) return <span>[]</span>;
    return (
      <>
        [
        <br />
        {value.map((item, i) => (
          <span key={i}>
            {pad(depth + 1)}
            {renderJSON(item, depth + 1)}
            {i < value.length - 1 ? "," : ""}
            <br />
          </span>
        ))}
        {pad(depth)}]
      </>
    );
  }
  if (typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>);
    if (entries.length === 0) return <span>&#123;&#125;</span>;
    return (
      <>
        {"{"}
        <br />
        {entries.map(([k, v], i) => (
          <span key={k}>
            {pad(depth + 1)}
            <TextToken variant="variable">"{k}"</TextToken>
            <TextToken variant="operator">: </TextToken>
            {renderJSON(v, depth + 1)}
            {i < entries.length - 1 ? (
              <TextToken variant="operator">,</TextToken>
            ) : null}
            <br />
          </span>
        ))}
        {pad(depth)}&#125;
      </>
    );
  }
  return null;
};

const JSONContent = ({ value, className }: JSONContentProps) => {
  return <pre className={`${className}`}>{renderJSON(value)}</pre>;
};

export default JSONContent;
