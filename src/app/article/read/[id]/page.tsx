"use client";

import { Article } from "@/app";
import { fetchArticle } from "@/app/api";
import ArticleViewer from "@/app/components/ArticleViewer";
import { useEffect, useState } from "react";

export default function ArticleReadPage({
  params,
}: {
  params: { id: string };
}) {
  const [article, setArticle] = useState<Article | undefined>(undefined);
  useEffect(() => {
    fetchArticle(params.id).then((article) => {
      setArticle(article);
    });
  }, [params.id]);
  return <div>{article && <ArticleViewer content={article.content} />}</div>;
}
