import type { Article } from "@/app";

const SERVER_HOST = "http://localhost:8888";

export const fetchArticles = async () => {
  const response = await fetch(`${SERVER_HOST}/api/articles`);
  return ((await response.json()) as { articles: Article[] }).articles;
};

export const fetchArticle = async (id: string) => {
  const response = await fetch(`${SERVER_HOST}/api/article?id=${id}`);
  return (await response.json()) as Article;
};

export const createArticle = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return fetch(`${SERVER_HOST}/api/article`, {
    method: "POST",
    body: JSON.stringify({ title, content }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
