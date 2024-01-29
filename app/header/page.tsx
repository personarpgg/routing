import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-gray-500 p-4 flex justify-between">
      <div className="text-left"> 지역 로고 </div>
      <div className="text-center"> 지역 이름 </div>
      <div className="text-right"> 로그인 </div>
    </div>
  );
}
