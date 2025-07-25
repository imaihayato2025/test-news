"use client";

import React from "react";
import { Box, IconButton, Tooltip, useTheme } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

type Props = {
  url: string;
  text: string;
  className?: string;
};

export default function SnsBtn({ url, text, className = "" }: Props) {
  const theme = useTheme();

  const encodedURL = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedURL}&text=${encodedText}`;
    window.open(twitterUrl, "_blank");
  };

  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`;
    window.open(facebookUrl, "_blank");
  };

  const handleInstagramRedirect = () => {
    const instaUrl = `https://www.instagram.com/`;
    window.open(instaUrl, "_blank");
  };

  return (
    <Box
      className={className}
      position="fixed"
      bottom={1} // 画面下から16px上げて表示
      left="50%"
      sx={{
        transform: "translateX(-50%)", // 横中央に配置
      }}
      width="100%"
      height="100px"
      bgcolor={
        theme.palette.mode === "dark" ? "#000" : theme.palette.background.paper
      }
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={3}
      boxShadow="0 0 6px rgba(0, 0, 0, 0.15)"
      zIndex={9999}
      border={`1px solid ${theme.palette.divider}`}
      px={2}
    >
      <Tooltip title="Twitterでシェア">
        <IconButton onClick={handleTwitterShare} color="primary">
          <TwitterIcon sx={{ fontSize: 45 }} />
        </IconButton>
      </Tooltip>

      <Tooltip title="Facebookでシェア">
        <IconButton onClick={handleFacebookShare} color="primary">
          <FacebookIcon sx={{ fontSize: 45 }} />
        </IconButton>
      </Tooltip>

      <Tooltip title="Instagramを開く">
        <IconButton onClick={handleInstagramRedirect} color="secondary">
          <InstagramIcon sx={{ fontSize: 45 }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
