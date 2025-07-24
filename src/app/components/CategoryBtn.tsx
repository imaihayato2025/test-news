"use client";

import React, { useEffect, useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  useTheme,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import MovieIcon from "@mui/icons-material/Movie";
import PublicIcon from "@mui/icons-material/Public";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ScienceIcon from "@mui/icons-material/Science";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { useRouter, usePathname } from "next/navigation";

const categories = [
  { label: "ビジネス", icon: <BusinessIcon />, slug: "business" },
  { label: "エンタメ", icon: <MovieIcon />, slug: "entertainment" },
  { label: "一般", icon: <PublicIcon />, slug: "general" },
  { label: "健康", icon: <FavoriteIcon />, slug: "health" },
  { label: "科学", icon: <ScienceIcon />, slug: "science" },
  { label: "スポーツ", icon: <SportsSoccerIcon />, slug: "sports" },
  // { label: "テクノロ", icon: <MemoryIcon />, slug: "technology" },
];

export default function CategoryBtn() {
  const theme = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState<number | null>(null);

  useEffect(() => {
    const index = categories.findIndex((cat) =>
      pathname.includes(`/category/${cat.slug}`)
    );
    setValue(index === -1 ? 0 : index);
  }, [pathname]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    if (newValue === value) return;
    setValue(newValue);
    router.push(`/category/${categories[newValue].slug}`);
  };

  if (value === null) return null;

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={handleChange}
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: 100,
        bgcolor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
        zIndex: 10,
      }}
    >
      {categories.map(({ label, icon }) => (
        <BottomNavigationAction
          key={label}
          label={label}
          icon={icon}
          sx={{
            minWidth: 0,
            "& .MuiSvgIcon-root": {
              fontSize: "20px",
              transition: "font-size 0.2s ease",
            },
            "&.Mui-selected .MuiSvgIcon-root": {
              fontSize: "28px",
            },
            "& .MuiBottomNavigationAction-label": {
              marginTop: "10px",
              fontWeight: "bold",
              fontSize: "1rem",
              transition: "font-size 0.2s ease",
              [theme.breakpoints.down("sm")]: {
                fontSize: "0.6rem",
              },
              "@media (max-width: 375px)": {
                fontSize: "0.45rem",
              },
            },
            "&.Mui-selected .MuiBottomNavigationAction-label": {
              fontSize: "1rem", // ← ここを1.2remから1remに小さく変更
              [theme.breakpoints.down("sm")]: {
                fontSize: "0.6rem", // ← 0.7remから0.6remに
              },
              "@media (max-width: 375px)": {
                fontSize: "0.5rem", // ← 0.55remから0.5remに
              },
            },
          }}
        />
      ))}
    </BottomNavigation>
  );
}
