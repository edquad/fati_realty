import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Fieldset } from 'primereact/fieldset';
import { FileUpload } from 'primereact/fileupload';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Mention } from 'primereact/mention';
import { Nullable } from 'primereact/ts-helpers';
import React, { useState } from 'react';

function PropertyDetails() {
    const [date, setDate] = useState<Nullable<string | Date | Date[]>>(null);
    const [selectExpenseCategory, setSelectedExpenseCategory] = useState(null);
    const expenseCategory = [
        { name: 'Home Insurance', code: 'Home Insurance' },
        { name: 'Water/Sewer', code: 'Water/Sewer' },
        { name: 'Garbage', code: 'Garbage' },
        { name: 'Electric', code: 'Electric' },
        { name: 'Gas', code: 'Gas' },
        { name: 'HOA Fees', code: 'HOA Fees' },
        { name: 'Lawn/Snow', code: 'Lawn/Snow' },
        { name: 'Vacancy', code: 'Vacancy' },
        { name: 'Repairs', code: 'Repairs' },
        { name: 'CapEx', code: 'CapEx' },
        { name: 'Prop. Management', code: 'Prop. Management' },
        { name: 'Mortgage', code: 'Mortgage' }
    ];
    return (
        <section className="layout-dashboard">
            <header className="card surface-100">
                <h6 className="m-0">Add Property</h6>
            </header>
            <main>
                <section className="card">
                    <Fieldset legend="Property Details">
                        <div className="grid">
                            <div className="col-12">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="propertyAddress">Property Address:</label>
                                    <InputText id="propertyAddress" placeholder="Property Address" keyfilter="alpha" />
                                    {/* <small id="username-help">Enter your username to reset your password.</small> */}
                                </div>
                            </div>
                            <div className="md:col-3">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="propertyValue">Property Value:</label>
                                    <InputNumber id="propertyValue" minFractionDigits={2} maxFractionDigits={5} placeholder="0,000.00" />
                                    {/* <small id="username-help">Enter your username to reset your password.</small> */}
                                </div>
                            </div>
                            <div className="md:col-3">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="propertyRent">Property Rent:</label>
                                    <InputNumber id="propertyRent" minFractionDigits={2} maxFractionDigits={5} placeholder="0,000.00" />
                                    {/* <small id="username-help">Enter your username to reset your password.</small> */}
                                </div>
                            </div>
                            <div className="md:col-3">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="propertyMortgage">Property Mortgage:</label>
                                    <InputNumber id="propertyMortgage" minFractionDigits={2} maxFractionDigits={5} placeholder="0,000.00" />
                                    {/* <small id="username-help">Enter your username to reset your password.</small> */}
                                </div>
                            </div>
                            <div className="md:col-3">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="propertyTax">Property Tax:</label>
                                    <InputNumber id="propertyTax" minFractionDigits={2} maxFractionDigits={5} placeholder="0,000.00" />
                                    {/* <small id="username-help">Enter your username to reset your password.</small> */}
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="notes">Notes:</label>
                                    <Mention
                                        id="notes"
                                        // value={value}
                                        // onChange={(e) => setValue(e.target.value)}
                                        // suggestions={suggestions}
                                        // onSearch={onSearch}
                                        field="nickname"
                                        placeholder="Notes"
                                        rows={5}
                                        cols={100}
                                        inputClassName="w-full"
                                        autoResize
                                        //itemTemplate={itemTemplate}
                                    />
                                    {/* <small id="username-help">Enter your username to reset your password.</small> */}
                                </div>
                            </div>
                        </div>
                    </Fieldset>
                </section>
                <section className="card">
                    <Fieldset legend="Expenses">
                        <div className="grid">
                            <div className="col-12 md:col-4">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="expenseCategory">Select Expense Category:</label>
                                    <Dropdown id="expenseCategory" value={selectExpenseCategory} onChange={(e) => setSelectedExpenseCategory(e.value)} options={expenseCategory} optionLabel="name" placeholder="Select a City" className="w-full" />
                                </div>
                            </div>
                            <div className="col-12 md:col-4">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="date">Date:</label>
                                    <Calendar id="date" value={date} onChange={(e) => setDate(e.value)} showIcon placeholder="dd/mm/yyyy" />
                                </div>
                            </div>
                            <div className="col-12 md:col-4">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="amount">Amount:</label>
                                    <InputNumber id="amount" minFractionDigits={2} maxFractionDigits={5} placeholder="0,000.00" />
                                    {/* <small id="username-help">Enter your username to reset your password.</small> */}
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="flex flex-column gap-2">
                                    <label htmlFor="creditReport">Credit Report (upload):</label>
                                    <div className="card">
                                        <FileUpload id="creditReport" name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fieldset>
                </section>
                <section>
                    <div className="mt-3 text-center">
                        <Button label="Submit" className="md:px-5" />
                    </div>
                </section>
            </main>
        </section>
    );
}

export default PropertyDetails;
