import React from 'react';

const AppFooter = (props: any) => {
    return (
        <div className="layout-footer">
            <div className="footer-logo-container">
                <img id="footer-logo" src={`assets/layout/images/logo.png`} alt="atlantis-layout" />
                {/* <i className="pi pi-apple text-2xl text-white"></i> */}
                <span className="app-name">FATI Realty</span>
            </div>
            <span className="copyright">&#169; FATI Realty - 2024</span>
        </div>
    );
};

export default AppFooter;
