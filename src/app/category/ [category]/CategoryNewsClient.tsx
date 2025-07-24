import React, { useEffect, useState } from "react";
import { fetchNews } from "../../lib/fetchNews";
import NewsList from "../../components/NewsList";
import { Article } from "../../types/news";

type Props = {
  category: string;
};

export default function CategoryNewsClient({ category }: Props) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchNews(category);
        setArticles(data);
      } catch (e) {
        console.error("ニュース取得エラー", e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [category]);

  if (loading) return <p>読み込み中...</p>;
  if (articles.length === 0) return <p>記事が見つかりませんでした。</p>;

  return <NewsList articles={articles} />;
}
