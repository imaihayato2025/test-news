import Image from "next/image";

type SnsIconProps = {
  href: string;
  src: string; // ← 明示的に string 型を指定
  alt: string;
};

export default function SnsIcon({ href, src, alt }: SnsIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition hover:opacity-70"
    >
      <Image src={src} alt={alt} width={50} height={50} />
    </a>
  );
}
