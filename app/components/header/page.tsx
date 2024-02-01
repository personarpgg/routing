"use client"

// header/page.tsx
import Link from "next/link";
import { useState, useEffect } from "react";
import Home from "@/app/(pages)/page";

interface HeaderProps {
  selectedRegion: string;
}

export default function Header({ selectedRegion }: HeaderProps) {
  const [region, setRegion] = useState<string>("");
  
  useEffect(() => {
    if (selectedRegion) {
      setRegion(selectedRegion);
    }
  }, [selectedRegion]);
  
  console.log(region);

  return (
    <div className="bg-gray-500 p-4 flex justify-between">
      <div className="text-left">로고 </div>
      <div className="text-center">지역 정보: {region}</div>
      <Link href="LoginPage">
        <div className="text-right">로그인 </div>
      </Link>
    </div>
  );
}
