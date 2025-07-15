// ✅ 修正後
import Header from "../components/Header"; 
import Footer from "../components/Footer"; 
import Newslist from "../components/Newslist"; 
import Themabtn from "../components/Themabtn";
import Link from "next/link";

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Link href="/news"> <Newslist /></Link>
      <Themabtn label1="TOPへ" label2="戻る" className="absolute bottom-[110px] right-[10px]" />
      <Footer />
    </div>
  );
}