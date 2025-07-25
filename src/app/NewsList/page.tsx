"use client";

import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import NewsCard from "../components/NewsCard"; // このパスは合うように修正
import { Article } from "../types/news";

export default function HomePage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("/api/news?category=general");
        const data = await res.json();
        setArticles(data.articles);
      } catch (err) {
        console.error("記事の取得に失敗しました", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </Box>
  );
}
