// MobileView.tsx
import React from "react";

interface MobileViewProps {
    selectedRegion: string;
    handleRegionClick: (region: string) => void;
}

const MobileView: React.FC<MobileViewProps> = ({ selectedRegion, handleRegionClick }) => (
    <div>
        {/* 모바일 버전에서의 뷰 구성 */}
        <div className="absolute top-20 left-36"> {/* 수정된 부분 */}
            <div
                className="bg-red-500 border shadow-lg p-1 text-white cursor-pointer"
                onClick={() => handleRegionClick("서울")}
            >
                서울
            </div>
        </div>
        <div className="absolute top-52 left-48 transform"> {/* 수정된 부분 */}
            <div
                className="bg-yellow-500 border shadow-lg p-1 text-white cursor-pointer"
                onClick={() => handleRegionClick("대전")}
            >
                대전
            </div>
        </div>
        <div className="absolute top-72 left-36"> {/* 수정된 부분 */}
            <div
                className="bg-green-500 border shadow-lg p-1 text-white cursor-pointer"
                onClick={() => handleRegionClick("대구")}
            >
                대구
            </div>
        </div>
        <div className="absolute top-72 left-36"> {/* 수정된 부분 */}
            <div
                className="bg-green-500 border shadow-lg p-1 text-white cursor-pointer"
                onClick={() => handleRegionClick("광주")}
            >
                광주
            </div>
        </div>
        <div className="absolute top-80 left-64"> {/* 수정된 부분 */}
            <div
                className="bg-blue-500 border shadow-lg p-1 text-white cursor-pointer"
                onClick={() => handleRegionClick("부산")}
            >
                부산
            </div>
        </div>
    </div>
);

export default MobileView;
