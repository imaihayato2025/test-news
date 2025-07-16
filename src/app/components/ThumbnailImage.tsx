import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string; // 追加スタイルを渡せるように
};

export default function ThumbnailImage({ src, alt, className = "" }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      className={`thumbnail-img ${className}`} // グローバルCSSクラスを使用
    />
  );
}
