import Link from "next/link";

export default function Header() {
  return (
    <header className="site-title flex flex-col items-center justify-center  text-center h-[75px] border-[#e4e3e3] border-b mb-2">
      <Link href="/">
        <h1 className="text-[clamp(1.5rem,1rem+2.5vw,3rem)]">NEWS NOW</h1>
      </Link>
    </header>
  );
};
