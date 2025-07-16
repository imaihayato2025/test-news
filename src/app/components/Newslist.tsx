export default function NewsList() {
  return (
    <div className="flex h-[100px] border-t border-b border-[#e4e3e3] bg-white p-2 md:h-[150px]">
      <div className="list-image w-[30%] bg-[#d9d9d9]"></div>
      <div className="list-text w-[70%] pl-2">
        <h2 className="text-[clamp(1rem,_0.667rem+1.67vw,_2rem)] text-[#23282f]">
          記事のタイトルが入ります。
        </h2>
      </div>
    </div>
  );
}
