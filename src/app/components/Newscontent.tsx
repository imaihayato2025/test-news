import ThumbnailImage from "./ThumbnailImage";


export default function Newscontent() {
  return (
  <div className="w-full flex flex-col  items-center">
    <div className="w-[90%] md:w-[50%] flex flex-col  items-center text-center pt-[50px] pb-[25px]"> 
      <ThumbnailImage src="/thumbnail.png" alt="記事の画像" />
    </div>
     <h2 className="text-[#23282f] text-[clamp(1rem,_0.667rem+1.67vw,_2rem)] mt-[30px] mb-[30px]">記事のタイトルが入ります。</h2>
     <p className="content-text">記事の内容が入ります。</p>
  </div>
  );
}
