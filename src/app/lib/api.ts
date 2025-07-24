// lib/api.ts などに作成
export async function fetchNews(category?: string) {
  const url = new URL("https://newsapi.org/v2/top-headlines");
  url.searchParams.set("country", "jp");
  url.searchParams.set("apiKey", process.env.NEXT_PUBLIC_NEWS_API_KEY!);
  if (category) url.searchParams.set("category", category);

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("Failed to fetch news");

  const data = await res.json();
  return data.articles as Array<{
    title: string;
    urlToImage?: string;
    description?: string;
    url: string;
  }>;
}
