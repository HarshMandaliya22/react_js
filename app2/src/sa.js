import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
//class component method
class EmiCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: 0,
            rate: 0,
            year: 0,
            EMI: 0
        }
    }

    addAmount = (event) => {
        console.log('amount ')
        this.setState({
            amount: parseFloat(event.target.value)
        }, () => {
            this.calculateEmi()
        });
    }

    addRate = (event) => {
        console.log('rate ')
        this.setState({
            rate: parseFloat(event.target.value)
        }, () => {
            this.calculateEmi()
        });
    }

    addTerm = (event) => {
        console.log('term ')
        this.setState({
            year: parseFloat(event.target.value)
        }, () => {
            this.calculateEmi()
        });
    }
    //E = P x R x (1+r)^n/((1+r)^N – 1
    calculateEmi = () => {

        if (this.state.amount != 0 && this.state.rate != 0 && this.state.year != 0) {
            this.setState({
                EMI: ((this.state.amount * this.state.rate) * Math.pow(1 + this.state.rate, this.state.year)) / (Math.pow(1 + this.state.rate, this.state.year) - 1)
            });
        }
    }


    render() {
        console.log("render method is called")
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className='card-header text-bg-primary'>
                                <h5 className="card-title">Loan Calculator</h5>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="amount" className="form-label">
                                            Principle Amount:
                                        </label>
                                        <input type="text" className="form-control" id="amount" required
                                            onBlur={this.addAmount} placeholder="Enter principle amount"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="rate" className="form-label">
                                            Rate of Interest:
                                        </label>
                                        <input type="text" className="form-control" id="rate" required
                                            onBlur={this.addRate} placeholder="Enter rate of interest"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="term" className="form-label">
                                            Loan Term (in years):
                                        </label>
                                        <input type="text" className="form-control" id="term" required
                                            onBlur={this.addTerm} placeholder="Enter loan term in years"
                                        />
                                    </div>
                                    <button type="button" onClick={this.calculateEmi} className="btn btn-primary">
                                        Calculate
                                    </button>
                                    <div className='p-2 mt-2 text-bg-success'> {this.state.EMI.toFixed()}</div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
root.render(<EmiCalculator />)