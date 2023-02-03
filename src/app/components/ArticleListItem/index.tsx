/**
 * "use client";
 * 이 컴포넌트는 상태를 가지지 않고 인터렉션이 없는 컴포넌트 입니다.
 * 이 컴포넌트를 server component로 이전하면 dayjs 의존 리소스를 클라이언트로 전송할 필요가 없습니다.
 * SSR을 실행하는 서버측에서만 실행하여 HTML을 구성한 후 내려보내주기만 합니다.
 */

import Link from "next/link";
import type { Article } from "@/app";
import "@/app/components/ArticleListItem/index.scss";
import dayjs from "dayjs";
import relateveTimePlugin from "dayjs/plugin/relativeTime";
import utcPlugin from "dayjs/plugin/utc";

dayjs.extend(utcPlugin);
dayjs.extend(relateveTimePlugin);

interface Props extends Omit<Article, "content"> {}

export default function ArticleListItem({ id, title, createdAt }: Props) {
  return (
    <div className="article-list-item">
      <h2 className="article-title">
        <Link className="article-title-link" href={`/article/read/${id}`}>
          {title}
        </Link>
      </h2>
      <div>
        <span>{dayjs(createdAt).utc().fromNow()}</span>
      </div>
    </div>
  );
}
