import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">

      <div className="relative">
        <img
          src="/map.png"
          alt="지도 이미지 표시"
          className="w-220 h-250 md:w-full md:h-auto"
        />
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link href="/map_main" className="block mx-auto mt-3">
            <div className="bg-red-500 border shadow-lg p-1 text-white cursor-pointer">
              대전
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
