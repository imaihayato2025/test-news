import Header from "../components/Header";
import NewsContent from "../components/NewsContent";
import ThemeBtn from "../components/ThemeBtn";
import SnsBtn from "../components/SnsBtn";
import BackButton from "../components/BackButton";

export default function NewsPage() {
  return (
    <div className="theme-change h-screen">
      <BackButton />
      <Header />
      <NewsContent />
      <ThemeBtn className="absolute top-3.5 right-1" />
      <SnsBtn url="https://example.com/article1" text="この記事すごい！" />
    </div>
  );
}
