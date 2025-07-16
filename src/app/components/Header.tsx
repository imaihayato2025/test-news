import Link from "next/link";

export default function Header() {
  return (
    <header className="site-title mb-2 flex h-[75px] flex-col items-center justify-center border-b border-[#e4e3e3] bg-white">
      <Link href="/">
        <h1 className="text-[clamp(1.5rem,1rem+2.5vw,3rem)]">NEWS NOW</h1>
      </Link>
    </header>
  );
}
