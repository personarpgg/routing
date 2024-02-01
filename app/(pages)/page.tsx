// page.tsx
"use client";

import { useState, useEffect } from "react";
import Header from "../components/header/page";
import MobileView from "../components/MobileView/MobileView";
import PCView from "../components/PCView/PCView";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const searchParams = useSearchParams();

  const handleRegionClick = async (region: string) => {
    setSelectedRegion(region);
    try {
      window.location.href = `/map_main?region=${region}`;
    } catch (error) {
      console.error("Error pushing to /map_main:", error);
    }
  };

  useEffect(() => {
    // 클라이언트 사이드에서 실행되는 로직 추가
  }, []);

  return (
    <div className="relative">
      {/* 이미지를 가져와서 정 가운데에 고정 */}
      <img
        src="/map.png"  // public 폴더 내의 이미지 경로
        alt="지도 이미지 표시"
        style={{ 
          width: "550px", 
          height: "520px", 
          margin: "auto",
          display: "block",
        }}
        className="block"
      />

      {/* 요소들을 동일한 부모 요소에 넣고 위치 조절 */}
      <div className="absolute top-0 left-0">
        {/* 모바일 버전과 PC 버전을 미디어 쿼리로 분기하여 렌더링 */}
        <div className="sm:hidden">
          <MobileView selectedRegion={selectedRegion} handleRegionClick={handleRegionClick} />
        </div>
        <div className="hidden sm:block">
          <PCView selectedRegion={selectedRegion} handleRegionClick={handleRegionClick} />
        </div>
      </div>

      <Header selectedRegion={selectedRegion} /> {/* header로 넘기는 부분 */}
    </div>
  );
}
