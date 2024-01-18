import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

class EMI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            interest_rate: 0,
            loan_tenure: 0,
            emi:0
        }
    }
    updateAmount = (event) => {
        this.setState = ({
            amount: event.target.value
        },()=>this.calculateEMI())
    }
    updateInterestRate = (event) => {
        this.setState = ({
            interest_rate: event.target.value
        },()=>this.calculateEMI())
    }
    updateLoanTenure = (event) => {
        this.setState = ({
            loan_tenure: event.target.value
        },()=>this.calculateEMI())
    }
    calculateEMI = (event) => {
        alert("hi");
        event.preventDefault(); // required
        if (this.amount != "" && this.interest_rate != "" && this.loan_tenure != "") {
            this.setState = ({
                emi: (this.state.amount * this.state.interest_rate) * Math.pow(1 + this.state.interest_rate, this.state.loan_tenure) / (Math.pow(1 + this.state.interest_rate, this.state.loan_tenure) - 1)
            })
        }
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header text-bg-primary">
                                <h2 className="card-title ">EMI Calculator</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.calculateEMI}>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <input onBlur={this.updateAmount} type="number" className="form-control" id="loanAmount" placeholder="Enter Loan Amount" 
                                            required/>
                                        </div>
                                        <div className="col">
                                            <input onBlur={this.updateInterestRate} type="number" className="form-control" id="interestRate" placeholder="Enter Interest Rate"
                                            required />
                                        </div>
                                        <div className="col">
                                            <input onBlur={this.updateLoanTenure} type="number" className="form-control" id="loanTenure" placeholder="Enter Loan Tenure"
                                            required />
                                        </div>
                                        <div className='col'><button type="submit" className="btn btn-primary" >Calculate EMI</button>
                                        </div>
                                        <div className="col">
                                            <h3>EMI: <span id="emiResult">{this.state.emi}</span> INR</h3>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
root.render(<EMI />)

