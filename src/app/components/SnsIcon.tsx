type SnsIconProps = {
  href: string;
  src: string;
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
      <img src={src} alt={alt} width={50} height={50} />
    </a>
  );
}
