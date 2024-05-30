import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Fieldset } from 'primereact/fieldset';
import { InputText } from 'primereact/inputtext';
import { Mention } from 'primereact/mention';

interface TenantData {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    notes: string;
    workEmail: string;
    workPhone: string;
    workLocation: string;
    workNotes: string;
    ssnnumber: string;
    documentsNotes: string;
}

const TenantRegistration: React.FC = () => {
    const location = useLocation();
    const [selectedDocumentType, setSelectedDocumentType] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);

    const selectedDoc = [
        { documentType: 'Passport', code: 'PP' },
        { documentType: 'ID Card', code: 'ID' },
        { documentType: 'Driver License', code: 'DL' },
        { documentType: 'Birth Certificate', code: 'BC' },
        { documentType: 'Social Security Card', code: 'SS' },
        { documentType: 'Visa', code: 'VISA' },
        { documentType: 'Resident Permit', code: 'RP' },
        { documentType: 'Work Permit', code: 'WP' }
    ];

    const handleChangeDocumentType = (e: { value: string }) => {
        setSelectedDocumentType(e.value);
    };

    const [formData, setFormData] = useState<TenantData>({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        notes: '',
        workEmail: '',
        workPhone: '',
        workLocation: '',
        workNotes: '',
        ssnnumber: '',
        documentsNotes: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleMentionChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setFile(file);
    };

    const handleSubmit = async () => {
        debugger
        const data = new FormData();
        for (let key in formData) {
            data.append(key, formData[key as keyof TenantData]);
        }
        if (file) {
            data.append('documentFile', file);
        }

        try {
            debugger
            const response = await fetch('http://localhost:8081/Post/TenantRegApi', {
                method: 'POST',
                body: data
            });

            const result = await response.json();
            if (response.ok) {
                alert('Registration successful');
                // Optionally, redirect to another page
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error('Error registering tenant:', error);
            alert('Error registering tenant. Please try again.');
        }
    };

    return (
        <div className="layout-dashboard">
            <header className="card surface-100">
                <h6 className="m-0">Tenant Registration Form</h6>
            </header>
            <main>
                <section className="card">
                    <Fieldset legend="Personal Details">
                        <div className="grid">
                            <div className="md:col-3">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="firstName">First Name:</label>
                                    <InputText id="firstName" className="p-inputtext-lg" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="md:col-3">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="lastName">Last Name:</label>
                                    <InputText id="lastName" className="p-inputtext-lg" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="md:col-3">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="phone">Phone Number:</label>
                                    <InputText id="phone" className="p-inputtext-lg" name="phone" value={formData.phone} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="md:col-3">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="email">Email:</label>
                                    <InputText id="email" className="p-inputtext-lg" name="email" value={formData.email} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="notes">Notes (Personal):</label>
                                    <Mention id="notes" name="notes" field="notes" placeholder="Notes" rows={5} cols={100} inputClassName="w-full" autoResize value={formData.notes} onChange={handleMentionChange} />
                                </div>
                            </div>
                        </div>
                    </Fieldset>
                </section>
                <section className="card">
                    <Fieldset legend="Work Details">
                        <div className="grid">
                            <div className="md:col-3">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="workEmail">Work Email:</label>
                                    <InputText id="workEmail" className="p-inputtext-lg" name="workEmail" value={formData.workEmail} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="md:col-3">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="workPhone">Work Phone Number:</label>
                                    <InputText id="workPhone" className="p-inputtext-lg" name="workPhone" value={formData.workPhone} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="md:col-6">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="workLocation">Work Location (Address):</label>
                                    <InputText id="workLocation" className="p-inputtext-lg" name="workLocation" value={formData.workLocation} onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="workNotes">Notes (Work):</label>
                                    <Mention id="workNotes" name="workNotes" field="workNotes" placeholder="Work Notes" rows={5} cols={100} inputClassName="w-full" autoResize value={formData.workNotes} onChange={handleMentionChange} />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="ssnnumber">SSN:</label>
                                    <InputText id="ssnnumber" className="p-inputtext-lg" name="ssnnumber" value={formData.ssnnumber} onChange={handleInputChange} />
                                </div>
                            </div>
                        </div>
                    </Fieldset>
                </section>
                <section className="card">
                    <Fieldset legend="Documents">
                        <div className="grid">
                            <div className="col-12 md:col-6">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="documentType">Document Type:</label>
                                    <Dropdown id="documentType" tooltip="Document Type" tooltipOptions={{ position: 'top' }} value={selectedDocumentType} onChange={handleChangeDocumentType} options={selectedDoc} optionLabel="documentType" optionValue="documentType" placeholder="Select Document Type" className="w-full md:w-14rem text-left" filter />
                                    <label htmlFor="documentFile">Document (upload):</label>
                                    <div className="card">
                                        <input type="file" id="documentFile" name="documentFile" onChange={handleFileUpload} accept="image/*" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="documentsNotes">Notes (Documents):</label>
                                    <Mention id="documentsNotes" name="documentsNotes" field="documentsNotes" placeholder="Documents Notes" rows={5} cols={100} inputClassName="w-full" autoResize value={formData.documentsNotes} onChange={handleMentionChange} />
                                </div>
                            </div>
                        </div>
                    </Fieldset>
                </section>
                <section>
                    <div className="mt-3 text-center">
                        <Button label="Submit" className="md:px-5" onClick={handleSubmit} />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default TenantRegistration;
