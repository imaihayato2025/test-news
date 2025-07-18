import SnsIcon from "./SnsIcon";

export default function SnsBtn() {
  return (
    <footer className="theme-change fixed bottom-0 flex h-[100px] w-full items-center justify-center border-t border-[#e4e3e3]">
      <div className="flex gap-6">
        <SnsIcon href="https://x.com" src="/01.png" alt="X" />
        <SnsIcon href="https://instagram.com" src="/02.png" alt="Instagram" />
        <SnsIcon href="https://facebook.com" src="/03.png" alt="Facebook" />
      </div>
    </footer>
  );
}
