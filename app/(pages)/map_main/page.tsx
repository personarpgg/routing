import Image from "next/image";

// 간단한 채팅 메시지 컴포넌트
const ChatMessage = ({ text, isMyMessage }: { text: string; isMyMessage: boolean }) => {
  return (
    <div className={`chat-message ${isMyMessage ? 'my-message' : 'other-message'}`}>
      {text}
    </div>
  );
};

export default function MapMain() {
  return (
    <div className="absolute w-full h-full flex items-center justify-center">
      <div style={{ overflowY: "auto", maxHeight: "80vh" }}>

        <p>대전에 관한 정보</p>

        {/* 스크롤 가능한 내용 끝 */}

        {/* 이미지 */}
        <img
          src="/1.png"
          alt="지도 이미지 표시"
          style={{ width: "550px", height: "520px" }}
        />

        {/* 채팅 메시지 영역 */}
        <div className="chat-container">
          <ChatMessage text="안녕하세요!" isMyMessage={true} />
          <ChatMessage text="안녕하세요! 대전에 대한 정보를 알려주세요." isMyMessage={false} />
          {/* 추가적인 메시지들을 필요에 따라 추가 */}
        </div>

      </div>
    </div>
  );
}
