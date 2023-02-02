"use client";

import { useState, useEffect } from "react";
import { fetchArticles } from "@/app/api";
import ArticleListItem from "@/app/components/ArticleListItem";
import type { Article } from "@/app";

export default function ArticleList() {
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    fetchArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);
  return articles.length > 0 ? (
    <div>
      {articles.map((article) => (
        <ArticleListItem key={article.id} {...article} />
      ))}
    </div>
  ) : null;
}
