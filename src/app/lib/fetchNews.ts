import { Article } from "../types/news";

export async function fetchNews(category: string): Promise<Article[]> {
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    console.error("APIキーが設定されていません");
    throw new Error("APIキーが設定されていません");
  }

  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`,
    {
      next: { revalidate: 43200 }, // 12時間、ISR。サーバー側のみで有効
    }
  );

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Fetch error:", res.status, errorText);
    throw new Error("ニュース取得に失敗しました");
  }

  const data = await res.json();

  // data.articlesが配列かどうかをチェックし、なければ空配列返す
  if (!data.articles || !Array.isArray(data.articles)) {
    console.error("APIレスポンスにarticlesがありません。", data);
    return [];
  }

  // Article[]として返す（型安全のため型アサーションを明示的に）
  return data.articles as Article[];
}
