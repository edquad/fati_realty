import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import React from 'react';
import PieChartMortgageCalcComponent from '../components/Charts/MortgageCalc/PieChartMortgageCalcComponent';

function MortgageCalc() {
    return (
        <div className="layout-dashboard">
            <header className="card surface-100">
                <h6 className="m-0">Mortgage Calculator</h6>
            </header>
            <main className="">
                <h1 className="text-color-secondary">How a mortgage calculator can help ?</h1>
                <p className="md:w-7rem lg:w-8 text-2xl font-light text-gray-100">
                    Buying a <strong>Real-Estate-Property</strong> is one of the largest purchase most people will make, so you should think carefully about how you’re going to finance it. You can adjust the property price, down payment and mortgage
                    terms to see how your monthly payment will change.
                </p>
                <section className="grid">
                    <div className="md:col-6">
                        <div className="card  h-full">
                            <div className="p-3 bg-blue-600 border-round mb-3">
                                <h6 className="m-0">Monthly & Lifetime payments</h6>
                            </div>
                            <div className="grid">
                                <div className="col-12 mb-2">
                                    <label htmlFor="price">Price</label>
                                    <div className="p-inputgroup flex-1 my-1">
                                        <span className="p-inputgroup-addon">$</span>
                                        <InputNumber id="price" placeholder="Price" />
                                        <span className="p-inputgroup-addon">.00</span>
                                    </div>
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="dounPayment">Doun Payment</label>
                                    <div className="p-inputgroup flex-1 my-1">
                                        <span className="p-inputgroup-addon">$</span>
                                        <InputNumber id="dounPayment" placeholder="Doun Payment" />
                                        <span className="p-inputgroup-addon">.00</span>
                                    </div>
                                </div>
                                <div className="col-12 md:col-6 mb-2">
                                    <label htmlFor="interestRate">Interest Rate</label>
                                    <div className="p-inputgroup flex-1 my-1">
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-chart-line"></i>
                                        </span>
                                        <InputNumber id="interestRate" placeholder="Interest Rate" />
                                        <span className="p-inputgroup-addon">.00</span>
                                    </div>
                                </div>
                                <div className="col-12 md:col-6 mb-2">
                                    <label htmlFor="loanTerm">Loan Term</label>
                                    <div className="p-inputgroup flex-1 my-1">
                                        <span className="p-inputgroup-addon">
                                            <i className="pi pi-calendar"></i>
                                        </span>
                                        <InputNumber id="loanTerm" placeholder="Loan Term" />
                                        <span className="p-inputgroup-addon">.00</span>
                                    </div>
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="propertyTax">Property Tax</label>
                                    <div className="p-inputgroup flex-1 my-1">
                                        <span className="p-inputgroup-addon">$</span>
                                        <InputNumber id="propertyTax" placeholder="Property Tax" />
                                        <span className="p-inputgroup-addon">.00</span>
                                    </div>
                                </div>
                                <div className="col-12 mb-2">
                                    <label htmlFor="propertyInsurance">Property Insurance</label>
                                    <div className="p-inputgroup flex-1 my-1">
                                        <span className="p-inputgroup-addon">$</span>
                                        <InputNumber id="propertyInsurance" placeholder="Property Insurance" />
                                        <span className="p-inputgroup-addon">.00</span>
                                    </div>
                                </div>
                                <div className="col-12 md:col-6 mb-2">
                                    <label htmlFor="monthly">Monthly</label>
                                    <div className="p-inputgroup flex-1 my-1">
                                        <span className="p-inputgroup-addon">$</span>
                                        <InputNumber id="monthly" placeholder="Monthly" />
                                        <span className="p-inputgroup-addon">.00</span>
                                    </div>
                                </div>
                                <div className="col-12 md:col-6 mb-2">
                                    <label htmlFor="loanTerm">Totale Lifetime</label>
                                    <div className="p-inputgroup flex-1 my-1">
                                        <span className="p-inputgroup-addon">$</span>
                                        <InputNumber id="loanTerm" placeholder="Loan Term" />
                                        <span className="p-inputgroup-addon">.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-6">
                        <div className="card h-full">
                            <PieChartMortgageCalcComponent />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default MortgageCalc;
