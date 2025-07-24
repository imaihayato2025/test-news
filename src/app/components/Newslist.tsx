import React from "react";
import { Article } from "../types/news";

type Props = {
  articles: Article[];
};

export default function NewsList({ articles }: Props) {
  return (
    <>
      {articles.map((article, i) => (
        <div key={i}>{article.title}</div>
      ))}
    </>
  );
}
