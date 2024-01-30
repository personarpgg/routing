import Link from "next/link";
import { useState } from "react";

export default function Home() {
  // 클릭 횟수 이벤트



  return (
    <div className="flex flex-col items-center justify-center h-screen relative">

      <div className="absolute">
        <img
          src="/map.png"
          alt="지도 이미지 표시"
          style={{ width: "550px", height: "520px" }}
        />
        {/* 서울 */}
        <div className="absolute top-20 left-52">
          <Link href="/map_main" className="block mx-auto mt-3">
            <div className="bg-red-500 border shadow-lg p-1 text-white cursor-pointer">
              서울
            </div>
          </Link>
        </div>
        
        {/* 대전 */}
        <div className="absolute top-52 left-64 transform -translate-x-1/2 -translate-y-1/2">
          <Link href="/map_main" className="block mx-auto mt-3">
            <div className="bg-yellow-500 border shadow-lg p-1 text-white cursor-pointer">
              대전
            </div>
          </Link>
        </div>

        {/* 울산 광역시 */}


        {/* 대구 광역시 */}
        <div className="absolute top-72 left-52">
          <Link href="/map_main" className="block mx-auto mt-3">
            <div className="bg-green-500 border shadow-lg p-1 text-white cursor-pointer">
              대구
            </div>
          </Link>
        </div>

        {/* 광주 */}
        <div className="absolute top-72 left-52">
          <Link href="/map_main" className="block mx-auto mt-3">
            <div className="bg-green-500 border shadow-lg p-1 text-white cursor-pointer">
              광주
            </div>
          </Link>
        </div>

        {/* 부산 */}
        <div className="absolute top-80 left-80">
          <Link href="/map_main" className="block mx-auto mt-3">
            <div className="bg-blue-500 border shadow-lg p-1 text-white cursor-pointer">
              부산
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
