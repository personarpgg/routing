// PCView.tsx
import React from "react";

interface PCViewProps {
    selectedRegion: string;
    handleRegionClick: (region: string) => void;
}

const PCView: React.FC<PCViewProps> = ({ selectedRegion, handleRegionClick }) => (
    <div>
        {/* PC 버전에서의 뷰 구성 */}
        <div className="absolute top-0 left-0">
            <div
                className="bg-red-500 border shadow-lg p-1 text-white cursor-pointer"
                onClick={() => handleRegionClick("서울")}
            >
                서울
            </div>
        </div>
        <div className="absolute top-20 left-10%">
            <div
                className="bg-yellow-500 border shadow-lg p-1 text-white cursor-pointer"
                onClick={() => handleRegionClick("대전")}
            >
                대전
            </div>
        </div>
        <div className="absolute top-40 left-20%">
            <div
                className="bg-green-500 border shadow-lg p-1 text-white cursor-pointer"
                onClick={() => handleRegionClick("대구")}
            >
                대구
            </div>
        </div>
        <div className="absolute top-60 left-30%">
            <div
                className="bg-green-500 border shadow-lg p-1 text-white cursor-pointer"
                onClick={() => handleRegionClick("광주")}
            >
                광주
            </div>
        </div>
        <div className="absolute top-80 left-40%">
            <div
                className="bg-blue-500 border shadow-lg p-1 text-white cursor-pointer"
                onClick={() => handleRegionClick("부산")}
            >
                부산
            </div>
        </div>
        {/* 다른 도시들도 동일하게 추가 */}
    </div>
);

export default PCView;
