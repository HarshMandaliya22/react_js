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
            emi: 0
        }
    }
    updateAmount = (event) => {
        this.setState({
            amount: parseFloat(event.target.value)
        }, () => {
            this.calculateEMI();
        });
    }
    updateInterestRate = (event) => {
        this.setState({
            interest_rate: parseFloat(event.target.value)
        }, () =>{
            this.calculateEMI();
        });
    }
    updateLoanTenure = (event) => {
        this.setState({
            loan_tenure: parseFloat(event.target.value)
        }, () => {
            this.calculateEMI();
        });
    }
    calculateEMI = (event) => {
        event.preventDefault();
        let { amount, interest_rate, loan_tenure } = this.state;
        if (amount !== 0 && interest_rate !== 0 && loan_tenure !== 0) {
            this.setState({
                emi: (((amount * interest_rate) * Math.pow(1 + interest_rate, loan_tenure)) / (Math.pow(1 + interest_rate, loan_tenure) - 1)).toFixed(2)
            });
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
                                <form >
                                    <div className="row mb-3">
                                        <div className="col">
                                            <input onBlur={this.updateAmount} type="number" className="form-control" id="loanAmount" placeholder="Enter Loan Amount"
                                                required />
                                        </div>
                                        <div className="col">
                                            <input onBlur={this.updateInterestRate} type="number" className="form-control" id="interestRate" placeholder="Enter Interest Rate"
                                                required />
                                        </div>
                                        <div className="col">
                                            <input onBlur={this.updateLoanTenure} type="number" className="form-control" id="loanTenure" placeholder="Enter Loan Tenure"
                                                required />
                                        </div>
                                        <div className='col'><button type="submit" onClick={this.calculateEMI} className="btn btn-primary" >Calculate EMI</button>
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
