export default function Footer() {
  return (
    <footer className=" w-[100%] fixed bottom-0  flex flex-col justify-center  h-[100px] bg-amber-100s border-[#e4e3e3] border-t">
      <ul className="flex justify-between ">
        <li className="categoty">ビジネス</li>
        <li className="categoty">エンタメ</li>
        <li className="categoty">一般</li>
        <li className="categoty">健康</li>
        <li className="categoty">科学</li>
        <li className="categoty">スポーツ</li>
      </ul>
    </footer>
  );
}