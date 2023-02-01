import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css";

interface Props {
  content: string;
}

export default function ArticleViewer({ content }: Props) {
  return (
    <ReactMarkdown
      className="markdown-body"
      children={content}
      remarkPlugins={[remarkGfm]}
    />
  );
}
