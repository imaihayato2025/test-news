"use client";

import { useEffect, useState } from "react";
import { Article } from "../types/news";
import ThumbnailImage from "./ThumbnailImage";

export default function NewsContent() {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("selectedArticle");
    if (stored) {
      setArticle(JSON.parse(stored));
    }
  }, []);

  if (!article) return <div>記事を読み込んでいます...</div>;

  return (
    <div className="theme-change flex w-full flex-col items-center pb-[110px]">
      <div className="flex w-[90%] flex-col items-center pt-[50px] pb-[25px] text-center md:w-[50%]">
        <ThumbnailImage
          src={article.urlToImage || "/thumbnail.png"}
          alt={article.title}
        />
      </div>

      <h2 className="theme-change mt-[30px] mb-[30px] w-[90%] text-[clamp(1rem,_0.667rem+1.67vw,_2rem)] font-bold text-[#23282f] md:w-[50%]">
        {article.title}
      </h2>

      <div className="w-[90%] md:w-[50%]">
        <p className="mb-4">{article.description || "本文がありません。"}</p>
        <p className="whitespace-pre-wrap">
          {article.content || "全文は提供されていません。"}
        </p>

        {article.url && (
          <p className="mt-6 text-center text-blue-600 underline">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              記事の全文を読む（外部サイト）
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
