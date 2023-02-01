"use client";

import { ChangeEventHandler, useState } from "react";
import ArticleWriteForm from "@/app/components/ArticleForm";
import ArticleViewer from "@/app/components/ArticleViewer";
import "@/app/article/write/page.scss";
import { createArticle } from "../api";
import { useRouter } from "next/navigation";

export default function ArticleWritePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onReset = () => {
    setTitle("");
    setContent("");
  };

  const onDone = async () => {
    try {
      await createArticle({ title, content });
      router.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  const handleChangeTitle: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeContent: ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setContent(event.target.value);
  };

  return (
    <article className="article-write-page">
      <div className="form-and-view-row">
        <div className="form-side">
          <ArticleWriteForm
            title={title}
            content={content}
            onChangeTitle={handleChangeTitle}
            onChangeContent={handleChangeContent}
          />
        </div>
        <div className="view-side">
          <ArticleViewer content={content} />
        </div>
      </div>
      <div className="action-row">
        <button className="action-button button-reset" onClick={onReset}>
          Reset
        </button>
        <button className="action-button button-done" onClick={onDone}>
          Done
        </button>
      </div>
    </article>
  );
}
