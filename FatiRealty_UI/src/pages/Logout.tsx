import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Implement any logout logic here
        // For example, clearing local storage, session, or JWT tokens
        
        // After logout, navigate to the login page
        navigate('/Login');
    };

    return (
        <div className="container">
            <h2>Logout</h2>
            <p>Are you sure you want to logout?</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Logout;
