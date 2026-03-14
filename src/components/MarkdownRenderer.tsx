import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

type Props = {
  source?: string | null;
};

const MarkdownRenderer = ({ source }: Props) => {
  if (!source) return null;

  return (
    <div className="markdown prose prose-invert max-w-none  wrap-break-word text-sm leading-relaxed p-3">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>
        {source}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
