import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        fetch('http://localhost:8081/Post/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userName, password })
        })
            .then((response) => {
                debugger;
                if (!response.ok) {
                    throw new Error('Invalid username or password');
                }
                return response.json();
            })
            .then((data) => {
                debugger
                console.log(data.UserName)
                setUserName(data.UserName);
                navigate('/TenantRegistration' , { state: { userName: data.UserName } });
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <div className="grid">
            <div className="md:col-4 md:col-offset-4 md:p-5">
                {/* <div className="flex justify-content-center align-items-center border-circle w-7rem h-7rem m-2 mx-auto surface-100 shadow-5">
                    <img src={`assets/layout/images/logo.png`} alt="logo" className="translate-x-0 h-5rem w-5rem" />
                </div> */}
                <div className="card shadow-8 mt-4 md:p-6">
                    <h3 className="text-center">Login</h3>
                    <div className="flex flex-column gap-2 mt-3">
                        <label htmlFor="username">Username</label>
                        <InputText id="username" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="p-inputtext-lg" />
                    </div>
                    <div className="flex flex-column gap-2 mt-3">
                        <label htmlFor="password">Password</label>
                        <InputText id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-inputtext-lg" />
                    </div>
                    {error && <div className="error">{error}</div>}
                    <div className="flex gap-2 mt-3">
                        <Button label="Login" size="large" severity="success" onClick={handleLogin} />
                        <Button label="Register" size="large" severity="secondary" onClick={() => navigate('/register')} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
