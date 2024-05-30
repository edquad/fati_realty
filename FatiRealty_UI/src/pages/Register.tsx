import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigateReport = useNavigate();

    const gologin = () => {
        navigateReport('/');
    };

    // State to manage form data
    const [formData, setFormData] = useState({
        userName: '',
        password: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        email: '',
        phone: ''
    });

    // Function to handle form input change
    const handleInputChange = (e) => {
        debugger;
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to handle form submission
    const handleSubmit = () => {
        debugger;
        // Send form data to the backend for registration
        fetch('http://localhost:8081/Post/SignUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((data) => {
                // If registration is successful, show a success message and redirect to login page
                alert('User registered successfully');
                navigateReport('/');
            })
            .catch((error) => {
                // If there's an error, display it to the user
                console.error('Error registering user:', error);
                alert('Error registering user. Please try again.');
            });
    };

    return (
        <>
            <section className="grid">
                <div className="md:col-4 md:col-offset-4 md:p-5">
                    {/* <div className="flex justify-content-center align-items-center border-circle w-7rem h-7rem m-2 mx-auto surface-100 shadow-5">
                        <img src={`assets/layout/images/logo.png`} alt="logo" className="translate-x-0 h-5rem w-5rem" />
                    </div> */}
                    <div className="card shadow-8 mt-4 md:p-6">
                        <h3 className="text-center">Register</h3>
                        <div className="flex flex-column gap-2">
                            <label htmlFor="userName">Username</label>
                            <InputText id="userName" name="userName" type="text" className="p-inputtext-lg" value={formData.userName} onChange={handleInputChange} />
                        </div>
                        <div className="flex flex-column gap-2 mt-3">
                            <label htmlFor="password">Password</label>
                            <InputText id="password" name="password" type="password" className="p-inputtext-lg" value={formData.password} onChange={handleInputChange} />
                        </div>
                        <div className="flex flex-column gap-2 mt-3">
                            <label htmlFor="firstname">Firstname</label>
                            <InputText id="firstname" name="firstName" type="text" className="p-inputtext-lg" value={formData.firstName} onChange={handleInputChange} />
                        </div>
                        <div className="flex flex-column gap-2 mt-3">
                            <label htmlFor="lastname">Lastname</label>
                            <InputText id="lastname" name="lastName" type="text" className="p-inputtext-lg" value={formData.lastName} onChange={handleInputChange} />
                        </div>
                        <div className="flex flex-column gap-2 mt-3">
                            <label htmlFor="dateOfBirth">Date of Birth</label>
                            <InputText id="dateOfBirth" name="dateOfBirth" type="date" className="p-inputtext-lg" value={formData.dateOfBirth} onChange={handleInputChange} />
                        </div>
                        <div className="flex flex-column gap-2 mt-3">
                            <label htmlFor="email">Email</label>
                            <InputText id="email" name="email" type="email" className="p-inputtext-lg" value={formData.email} onChange={handleInputChange} />
                        </div>
                        <div className="flex flex-column gap-2 mt-3">
                            <label htmlFor="phone">Phone</label>
                            <InputText id="phone" name="phone" type="tel" className="p-inputtext-lg" value={formData.phone} onChange={handleInputChange} />
                        </div>
                        <div className="flex gap-2 mt-3">
                            <Button label="Submit" size="large" severity="success" onClick={handleSubmit} />
                            <Button label="Login" size="large" severity="secondary" onClick={gologin} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Register;
