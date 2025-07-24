// src/app/category/[category]/page.tsx

import NewsList from "../../components/NewsList";
import { fetchNews } from "../../lib/fetchNews";
import { Article } from "../../types/news";

interface Props {
  params: Promise<{ category: string }>;
}

export const dynamic = "force-dynamic";

export default async function CategoryPage({ params }: Props) {
  // paramsはPromiseなのでawaitする
  const { category } = await params;

  const articles: Article[] = await fetchNews(category);

  return (
    <main>
      <h1>{category} ニュース</h1>
      {articles.length === 0 ? (
        <p>記事が見つかりませんでした。</p>
      ) : (
        <NewsList articles={articles} />
      )}
    </main>
  );
}
