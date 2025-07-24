// src/components/CategoryNewsClient.tsx
import React from "react";
import NewsList from "../../components/NewsList";
import { Article } from "../../types/news";

type Props = {
  articles: Article[];
};

export default function CategoryNewsClient({ articles }: Props) {
  if (articles.length === 0) return <p>記事が見つかりませんでした。</p>;
  return <NewsList articles={articles} />;
}
