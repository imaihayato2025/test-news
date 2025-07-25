"use client";

import React, { useEffect } from "react";
import { Article } from "../types/news";
import NewsCard from "./NewsCard";

type Props = {
  articles: Article[];
};

export default function NewsList({ articles }: Props) {
  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(articles));
  }, [articles]);

  if (articles.length === 0) {
    return <p>記事が見つかりませんでした。</p>;
  }

  return (
    <>
      {articles.map((article, i) => (
        <NewsCard key={i} article={article} />
      ))}
    </>
  );
}
