export default function Newsitem() {
  return (
   <div className="news-list h-[100px] flex p-2 border-[#e4e3e3] border-t border-b md:h-[150px]">
      <div className="list-image w-[30%] bg-[#d9d9d9] "><img src="https://placehold.jp/d9d9d9/ffffff/300x200.png?text=No%20Image"></img></div>
      <div className="list-text w-[70%] pl-2"><h2 className="text-[#23282f] text-[clamp(1rem,_0.667rem+1.67vw,_2rem)]">記事のタイトルが入ります。</h2></div>
   </div>
  );
}