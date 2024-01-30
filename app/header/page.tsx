"useClient"

// header.tsx
import Link from "next/link";
import Home from "../(pages)/page";
import { headers } from "next/headers";
import { useEffect } from "react";

interface HeaderProps {
  selectedRegion: string;
}


export default function Header({ selectedRegion }: HeaderProps) {
  console.log(selectedRegion); //지역 정보가 잘 전달 되는지 확인

  return (
    <div className="bg-gray-500 p-4 flex justify-between">
      <div className="text-left"> 지역 로고 </div>
      <div className="text-center">{selectedRegion || "지역 이름"}</div>
      <Link href="LoginPage">
        <div className="text-right"> 로그인 </div>
      </Link>
    
    </div>
  );
}
