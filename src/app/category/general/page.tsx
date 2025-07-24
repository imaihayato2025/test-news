import { fetchNews } from "../../lib/fetchNews";
import NewsCard from "../../components/NewsCard";
import { Article } from "../../types/news";
import Header from "../../components/Header";
import CategoryBtn from "../../components/CategoryBtn";
import ThemeBtn from "../../components/ThemeBtn";
import TopButton from "../../components/TopButton";

export default async function BusinessPage() {
  const articles: Article[] = await fetchNews("business");

  return (
    <div style={{ paddingBottom: 100 }}>
      <TopButton />
      <Header />

      {articles.length === 0 ? (
        <p>記事が見つかりませんでした。</p>
      ) : (
        articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))
      )}
      <ThemeBtn className="absolute top-3.5 right-1" />

      <CategoryBtn />
    </div>
  );
}
