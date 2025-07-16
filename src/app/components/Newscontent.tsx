import ThumbnailImage from "./ThumbnailImage";

export default function NewsContent() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-[90%] flex-col items-center pt-[50px] pb-[25px] text-center md:w-[50%]">
        <ThumbnailImage src="/thumbnail.png" alt="記事の画像" />
      </div>
      <h2 className="mt-[30px] mb-[30px] text-[clamp(1rem,_0.667rem+1.67vw,_2rem)] text-[#23282f]">
        記事のタイトルが入ります。
      </h2>
      <p className="content-text">記事の内容が入ります。</p>
    </div>
  );
}
