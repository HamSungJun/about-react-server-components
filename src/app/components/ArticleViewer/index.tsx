"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css";
import type { Article } from "@/app";

interface Props extends Pick<Article, "content"> {}

export default function ArticleViewer({ content }: Props) {
  return (
    <ReactMarkdown className="markdown-body" remarkPlugins={[remarkGfm]}>
      {content}
    </ReactMarkdown>
  );
}
