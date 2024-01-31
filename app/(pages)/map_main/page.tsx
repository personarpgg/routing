import Image from "next/image";

export default function MapMain() {
  return (
    <div className="absolute w-full h-full flex items-center justify-center">
      <div style={{ overflowY: "auto", maxHeight: "80vh" }}>
        {/* 스크롤 가능한 내용 */}
        <h1>맵 메인 페이지</h1>
        {/* 다양한 정보 추가 */}
        {/* 예시: */}
        <p>서울에 관한 정보</p>
        <p>대전에 관한 정보</p>
        <p>광주에 관한 정보</p>
        <p>부산에 관한 정보</p>
        {/* 스크롤 가능한 내용 끝 */}

        {/* 이미지 */}
        <img
          src="/1.png"
          alt="지도 이미지 표시"
          style={{ width: "550px", height: "520px" }}
        />


        <img
          src="/1.png"
          alt="지도 이미지 표시"
          style={{ width: "550px", height: "520px" }}
        />


        <img
          src="/1.png"
          alt="지도 이미지 표시"
          style={{ width: "550px", height: "520px" }}
        />


        <img
          src="/1.png"
          alt="지도 이미지 표시"
          style={{ width: "550px", height: "520px" }}
        />
      </div>
    </div>
  );
}
