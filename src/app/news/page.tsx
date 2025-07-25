"use client";

import React from "react";
import Header from "../components/Header";
import NewsContent from "../components/NewsContent";
import ThemeBtn from "../components/ThemeBtn";
import SnsBtn from "../components/SnsBtn";
import BackButton from "../components/BackButton";

export default function NewsPage() {
  const url = "https://example.com/article1";
  const shareText = "この記事すごい！";

  return (
    <div className="theme-change relative flex h-screen flex-col">
      <BackButton />
      <Header />
      <main className="flex-grow">
        <NewsContent />
      </main>
      <ThemeBtn className="absolute top-3.5 right-1" />
      <SnsBtn url={url} text={shareText} />
    </div>
  );
}
