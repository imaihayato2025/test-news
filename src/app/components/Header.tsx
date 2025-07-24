"use client";

import Link from "next/link";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        height: 75,
        backgroundColor: "#1976d2", // MUIデフォルト青を直接指定
        borderBottom: "1px solid #1565c0",
      }}
      elevation={1}
    >
      <Toolbar
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          p: 0,
        }}
      >
        <Link href="/" passHref>
          <Typography
            component="span"
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", sm: "clamp(1.5rem,1rem+2.5vw,3rem)" },
              color: "#fff", // 文字を白に固定
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            NEWS NOW
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
