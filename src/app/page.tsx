import ArticleList from "@/app/components/ArticleList";
import "@/app/index.scss";

/**
 * 홈 페이지 컴포넌트 입장에서 ArticleList 컴포넌트는 더이상 일반 JSX 타입이 아니어서 타입 에러가 발생합니다.
 * Next.js 공식 문서를 보면 임시로 @ts-expect-error Server Component 지시문으로 처리하는 것을 권유하고 있습니다.
 * https://beta.nextjs.org/docs/data-fetching/fetching#asyncawait-in-server-components
 */

export default function Home() {
  return (
    <article className="home-page">
      <h1 className="title">Articles</h1>
      {/* @ts-expect-error Server Component */}
      <ArticleList />
    </article>
  );
}
