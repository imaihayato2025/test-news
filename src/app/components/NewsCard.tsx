"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Box, Typography, useTheme } from "@mui/material";
import { Article } from "../types/news";

type Props = {
  article: Article;
};

export default function NewsCard({ article }: Props) {
  const theme = useTheme();
  const router = useRouter();

  const handleClick = () => {
    localStorage.setItem("selectedArticle", JSON.stringify(article));
    router.push("/news"); // 詳細ページへ遷移
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        display: "flex",
        height: { xs: 100, sm: 130, md: 160, lg: 180 },
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
        bgcolor: theme.palette.mode === "light" ? "#fafafa" : "#121212",
        p: 2,
        textDecoration: "none",
        "&:hover": {
          bgcolor: theme.palette.mode === "light" ? "#f0f0f0" : "#1e1e1e",
          cursor: "pointer",
        },
        transition: "background-color 0.3s ease",
        borderRadius: 1,
        mb: 0,
        color: "inherit",
      }}
    >
      <Box
        sx={{
          width: "30%",
          borderRadius: 1,
          overflow: "hidden",
          bgcolor: "#ccc",
        }}
      >
        {article.urlToImage && (
          <img
            src={article.urlToImage}
            alt={article.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
      </Box>

      <Box sx={{ width: "70%", pl: 2, display: "flex", alignItems: "center" }}>
        <Typography
          component="h2"
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: theme.palette.text.primary,
            fontSize: {
              xs: "clamp(1rem, 0.667rem + 1.67vw, 2rem)",
            },
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {article.title}
        </Typography>
      </Box>
    </Box>
  );
}
