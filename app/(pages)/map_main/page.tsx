"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

// 채팅 메시지 컴포넌트
const ChatMessage = ({ text, isMyMessage, timestamp }: { text: string; isMyMessage: boolean; timestamp: string }) => {
  return (
    <div className={`flex ${isMyMessage ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-xs px-4 py-2 rounded-lg ${isMyMessage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
        {text}
        <div className="text-xs text-gray-500">{timestamp}</div>
      </div>
    </div>
  );
};

const MapMain = () => {
  const [chatMessages, setChatMessages] = useState<{ text: string; isMyMessage: boolean; timestamp: string }[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');

  useEffect(() => {
    // 페이지 로딩 시 서버에서 기존 메시지 로드
    fetch('/api/getChatMessages')
      .then((response) => response.json())
      .then((data) => setChatMessages(data.messages))
      .catch((error) => console.error('Error fetching chat messages:', error));
  }, []);

  // 메시지를 전송하고 서버에서 처리하는 함수
  const handleSendMessage = () => {
    const updatedMessages = [
      ...chatMessages,
      { text: newMessage, isMyMessage: true, timestamp: new Date().toLocaleTimeString().split(':').slice(0, 2).join(':') },
    ];
    setChatMessages(updatedMessages);

    // 서버에 메시지 전송
    fetch('/api/saveChatMessages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages: updatedMessages }),
    });

    setNewMessage('');
  };

  return (
    <div className="absolute w-full h-full flex items-center justify-center">
      <div className="w-full max-w-screen-md p-4 bg-white shadow-md rounded-lg overflow-hidden">

        <p className="text-xl font-semibold mb-4">대전에 관한 정보</p>

        {/* 스크롤 가능한 내용 끝 */}

        {/* 지도 이미지 */}
        <Image
          src="/1.png"
          alt="지도 이미지 표시"
          width={550}
          height={520}
          className="mb-4"
        />

        {/* 채팅 메시지 영역 */}
        <div className="chat-container">
          {chatMessages.map((message, index) => (
            <ChatMessage
              key={index}
              text={message.text}
              isMyMessage={message.isMyMessage}
              timestamp={message.timestamp}
            />
          ))}
        </div>

        {/* 메시지 입력 및 전송 영역 */}
        <div className="flex mt-4">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="메시지를 입력하세요"
            className="flex-grow px-2 py-1 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-1 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
          >
            전송
          </button>
        </div>

      </div>
    </div>
  );
};

export default MapMain;
