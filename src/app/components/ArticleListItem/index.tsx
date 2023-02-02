"use client";

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
