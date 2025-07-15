// ✅ 修正後
import Header from "../components/Header"; 
import Footer from "../components/Footer"; 
import Newsitem from "../components/Newsitem"; 
import Themabtn from "../components/Themabtn";

export default function NewsPage() {
  return (
    <main>
      <Header />
      <Newsitem />
      <Themabtn label1="TOPへ" label2="戻る" className="absolute bottom-[110px] right-[10px]" />
      <Footer />
    </main>
  );
}