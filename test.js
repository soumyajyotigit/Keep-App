// Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from React Router

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory(); // Initialize useHistory

    const handleLogin = () => {
        // Your login logic here
        // Example: validate credentials, authenticate user
        // For simplicity, assume login is successful
        // Redirect to the dashboard page after successful login
        history.push('/dashboard');
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
