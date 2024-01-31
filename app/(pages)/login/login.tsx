// pages/login.tsx

import dynamic from 'next/dynamic';

const DynamicLoginForm = dynamic(() => import('./page'), { ssr: false });

const LoginPage: React.FC = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <DynamicLoginForm />
        </div>
    );
};

export default LoginPage;
