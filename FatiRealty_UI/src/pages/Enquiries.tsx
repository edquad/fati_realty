import { Button } from 'primereact/button';
import React from 'react';

function Enquiries() {
    return (
        <div className="layout-dashboard">
            <header className="card surface-100">
                <h6 className="m-0">Enquiries</h6>
            </header>
            <main className="text-center md:mt-3 lg:mt-5">
                <div>
                    <div className="border-circle w-12rem h-12rem bg-white mx-auto flex justify-content-center align-items-center">
                        <i className="pi pi-user" style={{ fontSize: '7rem', color: '#3f3f3f' }}></i>
                    </div>
                    <h1 className="uppercase lg:text-8xl">Hold UP !!!</h1>
                    <h1 className="uppercase lg:text-5xl">you need to sign in to continue</h1>
                    <Button label="Sign In" className="md:w-25rem py-3 sm:mt-3 md:mt-5 lg:mt-8" size="large" severity="success" />
                </div>
            </main>
        </div>
    );
}

export default Enquiries;
