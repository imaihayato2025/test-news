// src/app/components/Themabtn.tsx
"use client"; // App Routerなら必要！

import React from "react";
import { useTheme } from "../hooks/useTheme"; // パスは調整してね

type ThemaBtnProps = {
  label1: string;
  label2: string;
  className?: string;
};

export default function ThemaBtn({
  label1,
  label2,
  className = "",
}: ThemaBtnProps) {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`theme-button h-[75px] w-[75px] cursor-pointer rounded-full bg-[#d9d9d9] leading-[1.2] font-bold transition-transform duration-500 hover:scale-110 ${className}`}
    >
      {label1}
      <br />
      {label2}
    </button>
  );
}
