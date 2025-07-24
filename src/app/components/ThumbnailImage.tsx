type Props = {
  src: string;
  alt: string;
  className?: string; // 任意のスタイルを受け取れるように
};

export default function ThumbnailImage({ src, alt, className = "" }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      className={`thumbnail-img ${className}`} // グローバルCSSクラスに対応
      loading="lazy"
    />
  );
}
