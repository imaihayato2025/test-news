"use client";

import { useEffect, useState } from "react";
import { Article } from "../types/news";
import { Box, Typography, Link } from "@mui/material";

export default function NewsContent() {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("selectedArticle");
    if (stored) {
      setArticle(JSON.parse(stored));
    } else {
      const articlesStr = localStorage.getItem("articles");
      if (articlesStr) {
        const articles: Article[] = JSON.parse(articlesStr);
        setArticle(articles[0] || null);
      }
    }
  }, []);

  if (!article) {
    return <Typography>記事データがありません。</Typography>;
  }

  return (
    <Box sx={{ p: 2 }}>
      {/* 画像 */}
      {article.urlToImage && (
        <Box
          component="img"
          src={article.urlToImage}
          alt={article.title}
          sx={{
            width: "100%",
            height: {
              xs: 200, // スマホでは高さ200px
              sm: "auto", // タブレット以上では自動
            },
            objectFit: "cover",
            borderRadius: 2,
            mb: 2,
          }}
        />
      )}

      {/* タイトル */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        {article.title}
      </Typography>

      {/* 本文 */}
      <Typography variant="body1" sx={{ mb: 2 }}>
        {article.description}
      </Typography>
      {article.content && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {article.content}
        </Typography>
      )}

      {/* 記事リンク */}
      <Link
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        underline="hover"
      >
        記事元リンクはこちら
      </Link>
    </Box>
  );
}
