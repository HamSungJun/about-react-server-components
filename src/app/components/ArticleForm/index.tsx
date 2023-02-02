"use client";

import { ChangeEventHandler } from "react";
import "@/app/components/ArticleForm/index.scss";
import type { Article } from "@/app";

interface Props extends Partial<Pick<Article, "title" | "content">> {
  onChangeTitle?: ChangeEventHandler<HTMLInputElement>;
  onChangeContent?: ChangeEventHandler<HTMLTextAreaElement>;
}

export default function ArticleForm({
  title = "",
  content = "",
  onChangeTitle,
  onChangeContent,
}: Props) {
  return (
    <form className="article-form">
      <div className="form-row title-row">
        <label htmlFor="title">
          <input
            id="title"
            placeholder="title here..."
            type="text"
            value={title}
            onChange={onChangeTitle}
          />
        </label>
      </div>
      <div className="form-row content-row">
        <label htmlFor="content">
          <textarea
            id="content"
            placeholder="content here..."
            value={content}
            onChange={onChangeContent}
          />
        </label>
      </div>
    </form>
  );
}
