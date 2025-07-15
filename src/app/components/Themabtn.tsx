import React from "react";

type ThemabtnProps = {
  label1: string;
  label2: string;
  className?: string; // ← 追加済み
};

export default function Themabtn({ label1, label2, className = "" }: ThemabtnProps) {
  return (
    <button
      className={`w-[75px] h-[75px] rounded-full bg-[#d9d9d9] text-white font-bold leading-[1.2] hover:scale-110 transition-transform duration-500 cursor-pointer ${className}`}
    >
      {label1}
      <br />
      {label2}
    </button>
  );
}