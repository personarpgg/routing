// // components/LoginForm.tsx

// import { useState } from 'react';
// import { useRouter } from 'next/router';

// const LoginForm: React.FC = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleLogin = () => {
//     // 이 부분에서 mariadb를 사용하여 로그인 처리를 수행
//     // ...

//     // 로그인 성공 시 다음 페이지로 이동
//     router.push('/');
//   };

//   return (
//     <form>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <button type="button" onClick={handleLogin}>
//         Login
//       </button>
//     </form>
//   );
// };

// export default LoginForm;
