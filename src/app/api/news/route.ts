// src/app/api/news/route.ts
import { NextResponse } from "next/server";
import type { Article } from "../../types/news";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || "general";

  const apiKey = process.env.NEWS_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "API key not set" }, { status: 500 });
  }

  const url = new URL("https://newsapi.org/v2/top-headlines");
  url.searchParams.append("country", "us");
  url.searchParams.append("category", category);
  url.searchParams.append("pageSize", "20");
  url.searchParams.append("apiKey", apiKey);

  try {
    const res = await fetch(url.toString());
    if (!res.ok) {
      const errorText = await res.text();
      console.error("NewsAPI error:", errorText);
      return NextResponse.json(
        { error: "NewsAPI request failed" },
        { status: res.status }
      );
    }

    const data = await res.json();
    const articles: Article[] = data.articles ?? [];
    return NextResponse.json(articles);
  } catch (error) {
    console.error("Fetch failed:", error);
    return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
  }
}
