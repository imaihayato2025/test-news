"use client";

import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";

export default function BackButton() {
  const router = useRouter();

  return (
    <IconButton
      onClick={() => router.push("/")}
      sx={{
        position: "absolute",
        top: 18,
        left: 5,
        zIndex: 20,
        bgcolor: "transparent", // 背景なし
        border: "none", // 枠なし
        boxShadow: "none", // 影なし
        color: "text.primary", // 現在のテーマに合わせた色（任意）
        "&:hover": {
          bgcolor: "transparent", // ホバーしても背景つかない
        },
      }}
    >
      <ArrowBackIcon />
    </IconButton>
  );
}
