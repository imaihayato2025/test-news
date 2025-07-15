import './globals.css';
import Link from "next/link";
import Themabtn from "./components/Themabtn";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
<div className="h-screen flex flex-col justify-center items-center">
     <h1 className="site-title">NEWS NOW</h1>
     <Link href="/newslist">
      <button className="btn w-[200px] h-[50px] rounded-full bg-[#23282f] text-white font-bold mt-[50px] hover:scale-110 transition-transform duration-500 cursor-pointer">記事一覧へ</button>
     </Link>
   <Themabtn label1="テーマ" label2="変更" className="absolute bottom-[10px] right-[10px]" />
</div>
</div>
  );
}
