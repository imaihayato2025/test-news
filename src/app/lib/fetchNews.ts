// lib/fetchNews.ts

export type Article = {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

export async function fetchNews(category: string): Promise<Article[]> {
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    throw new Error("NEWS_API_KEY is not set in environment variables");
  }

  // NewsAPIのエンドポイント例
  const url = new URL("https://newsapi.org/v2/top-headlines");
  url.searchParams.append("country", "us"); // 日本の記事（usに変えたい場合はここを書き換え）
  url.searchParams.append("category", category);
  url.searchParams.append("pageSize", "20"); // 最大20件取得
  url.searchParams.append("apiKey", apiKey);

  // ここでURLをログ出力
  console.log("fetchNews URL:", url.toString());

  const res = await fetch(url.toString());

  if (!res.ok) {
    // エラー時にレスポンスのテキストもログ出力
    const errorText = await res.text();
    console.error("NewsAPI error response:", errorText);
    throw new Error(`NewsAPI request failed: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  // レスポンスの中身もログに出す（開発中のみ推奨）
  console.log("NewsAPI response data:", data);

  if (!data.articles) {
    return [];
  }

  return data.articles as Article[];
}
