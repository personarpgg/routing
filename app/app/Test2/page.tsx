// ./app/Test2/page.tsx
import dynamic from 'next/dynamic';

// 클라이언트 컴포넌트로 지정
const Button = dynamic(() => import('./button'), { ssr: false });

export default function Test2Page() {
  return (
    <div>
      <h1>Test2 Page</h1>
      {/* Button 컴포넌트 사용 */}
      <Button url="your-url" title="Click me" />
    </div>
  );
}
