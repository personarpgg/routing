// login/page.tsx
import React, { useEffect } from 'react';
import database from '@/database';  // 



export default function LoginPage() {
  useEffect(() => {
    // 예시: 사용자 테이블에서 데이터 가져오기
    const query = 'SELECT * FROM users';
    
    database.query(query, (error, results, fields) => {
      if (error) {
        console.error('Error executing query:', error);
        return;
      }

      console.log('Results:', results);
    });
  }, []);

  return (
    <div>
      {/* 로그인 페이지 내용 */}
    </div>
  );
}
