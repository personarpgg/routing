"use client"

// header.tsx
import Link from "next/link";
import { useState, useEffect } from "react";

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

  // console.log("setRegion 데이터:", setRegion); // 이 부분 수정
  console.log("region 데이터:", region);
  console.log("selectedRegion의 데이터:", selectedRegion);

  return (
    <div className="bg-gray-500 p-4 flex justify-between">
      <div className="text-left"> 지역 로고 </div>
      <div className="text-center">{region} </div>
      <Link href="LoginPage">
        <div className="text-right"> 로그인 </div>
      </Link>
    </div>
  );
}
