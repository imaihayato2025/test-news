export default function Footer() {
  return (
    <footer className=" w-[100%] fixed bottom-0  flex flex-col justify-center  h-[100px] bg-amber-100s border-[#e4e3e3] border-t">
      <ul className="flex justify-between ">
        <li className="w-[16.66666%] flex flex-col justify-center items-center">ビジネス</li>
        <li className="w-[16.66666%] flex flex-col justify-center items-center">エンタメ</li>
        <li className="w-[16.66666%] flex flex-col justify-center items-center">一般</li>
        <li className="w-[16.66666%] flex flex-col justify-center items-center">健康</li>
        <li className="w-[16.66666%] flex flex-col justify-center items-center">科学</li>
        <li className="w-[16.66666%] flex flex-col justify-center items-center">スポーツ</li>
      </ul>
    </footer>
  );
}