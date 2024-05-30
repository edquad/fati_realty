import { Button } from 'primereact/button';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { Tag } from 'primereact/tag';
import React, { useState } from 'react';
interface Type {
    name: string;
    code: string;
}
function Properties() {
    const [selectedProperty, setSelectedProperty] = useState<Type | null>(null);
    const [selectedFilter, setSelectedFilter] = useState<Type | null>(null);
    const properties: Type[] = [
        { name: 'Residential', code: 'Residential' },
        { name: 'Commercial', code: 'Commercial' },
        { name: 'Industrial', code: 'Industrial' },
        { name: 'Land', code: 'Land' }
    ];
    const filters: Type[] = [
        { name: 'Latest', code: 'Latest' },
        { name: 'Name', code: 'Name' },
        { name: 'Price', code: 'Price' }
    ];

    return (
        <div className="layout-dashboard pr-0" style={{ height: 'calc(100% - 75%)' }}>
            <header className=" sticky top-0 left-0 w-full z-5" style={{ background: '#292c3a' }}>
                <div className="card surface-100">
                    <h6 className="m-0">Properties</h6>
                </div>
                <div className="card surface-100">
                    <div className="grid">
                        <div className="md:col-4">
                            <label htmlFor="filterBy">Filter By</label>
                            <MultiSelect
                                id="filterBy"
                                className="w-full mt-2"
                                value={selectedProperty}
                                onChange={(e: MultiSelectChangeEvent) => setSelectedProperty(e.value)}
                                maxSelectedLabels={3}
                                options={properties}
                                optionLabel="name"
                                placeholder="filter Properties"
                            />
                        </div>
                        <div className="md:col-4">
                            <label htmlFor="filterBy">Sort By</label>
                            <Dropdown id="filterBy" className="w-full mt-2" value={selectedFilter} onChange={(e: DropdownChangeEvent) => setSelectedFilter(e.value)} options={filters} optionLabel="name" placeholder="filter Properties" />
                        </div>
                        <div className="md:col-4">
                            <label htmlFor="filterBy">Search Property</label>
                            <div className="p-inputgroup flex-1 mt-2">
                                <InputText placeholder="Search Property" />
                                <Button icon="pi pi-search" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main className="grid overflow-auto h-full">
                <div className="md:col-3">
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
                </div>
                <div className="md:col-3">
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
                </div>
                <div className="md:col-3">
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
                </div>
                <div className="md:col-3">
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
                </div>
                <div className="md:col-3">
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
                </div>
                <div className="md:col-3">
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
                </div>
                <div className="md:col-3">
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
                </div>
                <div className="md:col-3">
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
                </div>
                <div className="md:col-3">
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
                </div>
                <div className="md:col-3">
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
                </div>
                <div className="md:col-3">
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
                </div>
                <div className="md:col-3">
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
                </div>
                <div className="md:col-3">
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
                </div>
                <div className="md:col-3">
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
                </div>
                <div className="md:col-3">
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
                </div>
                <div className="md:col-3">
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
                </div>
                <div className="md:col-3">
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
                </div>
            </main>
        </div>
    );
}

export default Properties;
