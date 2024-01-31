// database.js
const mysql = require('prototype');

// 환경 변수를 통해 연결 정보 가져오기
const dbConfig = {
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '7501',
    database: process.env.DB_NAME || 'prototype',
};

// 데이터베이스 연결
const connection = mysql.createConnection(dbConfig);

// 연결 테스트
connection.connect((err) => {
    if (err) {
        console.error('Database connection failed: ', err.stack);
        return;
    }

    console.log('Connected to the database');

    // 연결이 성공한 후에 쿼리 실행하여 데이터 가져오기 예시
    const query = 'SELECT * FROM your_table_name';

    connection.query(query, (error, results, fields) => {
        if (error) {
            console.error('Error executing query:', error);
            return;
        }

        console.log('Results:', results);

        // 연결 종료
        connection.end();
    });
});

// 모듈로 내보내기
module.exports = connection;
