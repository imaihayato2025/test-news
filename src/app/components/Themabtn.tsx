"use client";

import React from "react";
import { useThemeContext } from "../components/ThemeContext"; // パスは調整してください
import { useTheme } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode"; // 月アイコン（ライトモード用）
import LightModeIcon from "@mui/icons-material/LightMode"; // 太陽アイコン（ダークモード用）

type ThemaBtnProps = {
  className?: string;
};

export default function ThemaBtn({ className = "" }: ThemaBtnProps) {
  const { toggleTheme } = useThemeContext();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box className={className}>
      <IconButton
        onClick={toggleTheme}
        color="inherit"
        aria-label="Toggle theme"
        size="large"
      >
        {!isDark ? (
          <DarkModeIcon sx={{ color: "#555" }} />
        ) : (
          <LightModeIcon sx={{ color: "#fbc02d" }} />
        )}
      </IconButton>
    </Box>
  );
}
