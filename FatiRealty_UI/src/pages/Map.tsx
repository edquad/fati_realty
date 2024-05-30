import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import React from 'react';
import MapComponent from '../components/Charts/Map/MapComponent';
import { Tag } from 'primereact/tag';

function Map() {
    const userName = localStorage.getItem('userName');
    const header = <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />;
    const footer = (
        <>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
        </>
    );
    return (
        <div className="layout-dashboard" style={{ height: 'calc(100% - 75%)' }}>
            <header className="card surface-100">
                <h6 className="m-0">Properties</h6>
                <h6>Welcome, {userName}!</h6>
            </header>
            <section className="grid h-full">
                <main className="md:col-8 lg:col-9 h-full">
                    <div className="card h-full">
                        <MapComponent />
                    </div>
                </main>
                <aside className="md:col-4 lg:col-3 h-full overflow-auto">
                    <div className="card shadow-4 ">
                        <div>
                            <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" className="w-full" />
                        </div>
                        <div>
                            <Tag className="my-3" value="Commercial Real Estate" severity="info"></Tag>
                            <h4 className="m-0">Manila Shock </h4>
                            <small className="text-400"> Jun 17, 2024 </small>
                            <p className="my-5 text-color-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta omnis modi aperiam aut incidunt repellat cum soluta eos maxime enim.</p>
                            <h4 className="my-3"> PHP6,400,000.00 </h4>
                            <Button label="View property" className="w-full" size="large" severity="success" />
                        </div>
                    </div>
                    <div className="card shadow-4 ">
                        <div>
                            <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" className="w-full" />
                        </div>
                        <div>
                            <Tag className="my-3" value="Commercial Real Estate" severity="info"></Tag>
                            <h4 className="m-0">Manila Shock </h4>
                            <small className="text-400"> Jun 17, 2024 </small>
                            <p className="my-5 text-color-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta omnis modi aperiam aut incidunt repellat cum soluta eos maxime enim.</p>
                            <h4 className="my-3"> PHP6,400,000.00 </h4>
                            <Button label="View property" className="w-full" size="large" severity="success" />
                        </div>
                    </div>
                    <div className="card shadow-4 ">
                        <div>
                            <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" className="w-full" />
                        </div>
                        <div>
                            <Tag className="my-3" value="Commercial Real Estate" severity="info"></Tag>
                            <h4 className="m-0">Manila Shock </h4>
                            <small className="text-400"> Jun 17, 2024 </small>
                            <p className="my-5 text-color-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta omnis modi aperiam aut incidunt repellat cum soluta eos maxime enim.</p>
                            <h4 className="my-3"> PHP6,400,000.00 </h4>
                            <Button label="View property" className="w-full" size="large" severity="success" />
                        </div>
                    </div>
                    <div className="card shadow-4 ">
                        <div>
                            <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" className="w-full" />
                        </div>
                        <div>
                            <Tag className="my-3" value="Commercial Real Estate" severity="info"></Tag>
                            <h4 className="m-0">Manila Shock </h4>
                            <small className="text-400"> Jun 17, 2024 </small>
                            <p className="my-5 text-color-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta omnis modi aperiam aut incidunt repellat cum soluta eos maxime enim.</p>
                            <h4 className="my-3"> PHP6,400,000.00 </h4>
                            <Button label="View property" className="w-full" size="large" severity="success" />
                        </div>
                    </div>
                    <div className="card shadow-4 ">
                        <div>
                            <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" className="w-full" />
                        </div>
                        <div>
                            <Tag className="my-3" value="Commercial Real Estate" severity="info"></Tag>
                            <h4 className="m-0">Manila Shock </h4>
                            <small className="text-400"> Jun 17, 2024 </small>
                            <p className="my-5 text-color-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta omnis modi aperiam aut incidunt repellat cum soluta eos maxime enim.</p>
                            <h4 className="my-3"> PHP6,400,000.00 </h4>
                            <Button label="View property" className="w-full" size="large" severity="success" />
                        </div>
                    </div>
                    <div className="card shadow-4 ">
                        <div>
                            <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" className="w-full" />
                        </div>
                        <div>
                            <Tag className="my-3" value="Commercial Real Estate" severity="info"></Tag>
                            <h4 className="m-0">Manila Shock </h4>
                            <small className="text-400"> Jun 17, 2024 </small>
                            <p className="my-5 text-color-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta omnis modi aperiam aut incidunt repellat cum soluta eos maxime enim.</p>
                            <h4 className="my-3"> PHP6,400,000.00 </h4>
                            <Button label="View property" className="w-full" size="large" severity="success" />
                        </div>
                    </div>
                </aside>
            </section>
        </div>
    );
}

export default Map;
