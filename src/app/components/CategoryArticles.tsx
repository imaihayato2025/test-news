"use client";

import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { Article } from "../types/news";

type Props = {
  category: string;
};

const CACHE_EXPIRATION_MS = 1000 * 60 * 60; // 1時間

export default function CategoryArticles({ category }: Props) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAndCache() {
      setLoading(true);

      const cacheKey = `news_${category}`;
      const cachedData = localStorage.getItem(cacheKey);

      if (cachedData) {
        const parsed = JSON.parse(cachedData);
        const now = Date.now();

        if (now - parsed.timestamp < CACHE_EXPIRATION_MS) {
          console.log("[Cache] Using cached articles for category:", category);
          console.log(parsed.articles);

          setArticles(parsed.articles);
          setLoading(false);
          return;
        }
      }

      try {
        const res = await fetch(`/api/news?category=${category}`);
        const data: Article[] = await res.json();

        console.log("[Fetch] Fetched articles for category:", category);
        console.log(data);

        setArticles(data);

        localStorage.setItem(
          cacheKey,
          JSON.stringify({ articles: data, timestamp: Date.now() })
        );
      } catch (e) {
        console.error("記事取得失敗", e);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    }

    fetchAndCache();
  }, [category]);

  if (loading) return <p>読み込み中...</p>;
  if (articles.length === 0) return <p>記事が見つかりませんでした。</p>;

  return (
    <>
      {articles.map((article, i) => (
        <NewsCard key={i} article={article} />
      ))}
    </>
  );
}
