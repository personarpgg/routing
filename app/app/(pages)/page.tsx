import header from "../header/page";
import Link from "next/link";
import Test from "../Test/page";


// import Test from "../Test/page";


export default function Home() {



  return (
    <>
      {/* <Link href={Test}>테스트 페이지로 이동</Link> */}
      <Link href="Test" className="block mx-auto mt-4">
        <div className="bg-red, border shadow-orange-900">
        대전
        </div>
      </Link>

      <img src="11.png/" alt="지도 이미지 표시" />

    </>

  );
}
