import Image from "next/image";
import styles from "./Image.module.css";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export default function ThumbnailImage({ src, alt, className = "" }: Props) {
  // classNameを結合
  const combinedClassName = `${styles.img} ${className}`;

  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      className={combinedClassName}
    />
  );
}