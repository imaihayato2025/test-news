import Header from "../components/Header";
import NewsContent from "../components/NewsContent";
import ThemaBtn from "../components/ThemaBtn";
import SnsBtn from "../components/SnsBtn";

export default function NewsPage() {
  return (
    <div>
      <Header />
      <NewsContent />
      <ThemaBtn
        label1="一覧へ"
        label2="戻る"
        className="absolute right-[10px] bottom-[110px]"
      />
      <SnsBtn />
    </div>
  );
}
