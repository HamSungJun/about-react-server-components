import ArticleList from "@/app/components/ArticleList";
import "@/app/index.scss";

export default function Home() {
  return (
    <article className="home-page">
      <h1 className="title">Articles</h1>
      <ArticleList />
    </article>
  );
}
