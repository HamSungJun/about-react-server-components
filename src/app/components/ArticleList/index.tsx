/**
 * "use client";
 * 서버 컴포넌트에서는 컴포넌트 함수를 async로 선언이 가능해집니다.
 */

import { fetchArticles } from "@/app/api";
import ArticleListItem from "@/app/components/ArticleListItem";

export default async function ArticleList() {
  const articles = await fetchArticles();
  return articles.length > 0 ? (
    <div>
      {articles.map((article) => (
        <ArticleListItem key={article.id} {...article} />
      ))}
    </div>
  ) : null;
}
