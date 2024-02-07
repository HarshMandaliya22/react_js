import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
class Table extends React.Component {
    constructor(props) {
        super(props)
        this.name = props.name;
        this.state = {
            gujarati: 0,
            punjabi: 0,
            roti: 0,
            papad: 0,
            sweets: 0,
            butter_milk: 0,
            total: 0
        }
    }
    updateGujarati = () => {
        let temp = this.state.gujarati
        this.setState({
            gujarati: this.state.gujarati + 1
        }, () => {
            this.updateTotal();
            this.props.updateGujaratiTotal(this.state.gujarati - temp);
        })
    }
    updatePunjabi = () => {
        let temp = this.state.punjabi
        this.setState({
            punjabi: this.state.punjabi + 1
        }, () => {
            this.updateTotal();
            this.props.updatePunjabiTotal(this.state.punjabi - temp);
        })
    }
    updateOthers = (itemname) => {
        // alert(itemname);
        if (itemname === "roti") {
            this.setState({
                roti: this.state.roti + 1
            }, () => { this.updateTotal() })
        }
        else if (itemname === "papad") {
            this.setState({
                papad: this.state.papad + 1
            }, () => { this.updateTotal() })
        }
        else if (itemname === "sweets") {
            this.setState({
                sweets: this.state.sweets + 1
            }, () => { this.updateTotal() })
        }
        else if (itemname === "butter milk") {
            this.setState({
                butter_milk: this.state.butter_milk + 1
            }, () => { this.updateTotal() })
        }

    }
    updateTotal = () => {
        // punjabi = 200, gujarati = 100, sweets = 30, butter milk = 15, papad = 10, roti = 5
        this.setState({
            total: (this.state.punjabi * 200) + (this.state.gujarati * 100) + (this.state.sweets * 30) + (this.state.butter_milk * 15) + (this.state.papad * 10) + (this.state.roti * 5)
        });
    }
    render() {
        return (<div className='col-lg-3'>
            <div className='card mb-3'>
                <div className='card-header d-flex justify-content-between'>
                    <span>
                        <span className='badge text-bg-danger'>1</span>&nbsp;
                        <span className='h5'>{this.props.name}</span>
                    </span>|
                    <span className='h5'><b>Total : {this.state.total}</b></span>
                </div>
                <div className='card-body'>
                    <button onClick={this.updatePunjabi} className='btn btn-danger w-100 mb-1'>Punjabi Thali &nbsp; <span className='badge text-bg-success'>{this.state.punjabi}</span> </button>
                    <button onClick={this.updateGujarati} className='btn btn-warning w-100 mb-1'>Gujarati Thali &nbsp; <span className='badge text-bg-success'>{this.state.gujarati}</span> </button>
                    <table width="100%">
                        <tr>
                            <td>
                                <button onClick={() => this.updateOthers("roti")} className='btn btn-success w-100 btn-sm mb-1'>Roti  &nbsp;<span className='badge text-bg-dark'>{this.state.roti}</span></button>
                            </td>
                            <td>
                                <button onClick={() => this.updateOthers("papad")} className='btn btn-primary w-100 btn-sm mb-1'>Papad &nbsp;<span className='badge text-bg-dark'>{this.state.papad}</span></button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={() => this.updateOthers("sweets")} className='btn btn-info w-100 btn-sm mb-1'>Sweets &nbsp;<span className='badge text-bg-dark'>{this.state.sweets}</span></button>
                            </td>
                            <td>
                                <button onClick={() => this.updateOthers("butter milk")} className='btn btn-secondary w-100 btn-sm mb-1'>Butter Milk &nbsp;<span className='badge text-bg-light'>{this.state.butter_milk}</span></button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>)
    }
}
class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gujarati_total: 0,
            punjabi_total: 0
        }
    }
    updateGujaratiTotal = (total) => {
        this.setState({
            gujarati_total: this.state.gujarati_total + total
        });
    }
    updatePunjabiTotal = (total) => {
        this.setState({
            punjabi_total: this.state.punjabi_total + total
        });
    }
    render() {
        return (<>
            <div className='container-fluid bg-light p-3'>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-between'>
                        <h1>Shree Hari Restaurant</h1>
                        <h4>Gujarati Thali:- {this.state.gujarati_total}</h4>
                        <h4>Punjabi Thali:- {this.state.punjabi_total}</h4>
                    </div>
                </div>
            </div>
            <div className='container mt-4'>
                <div className='row'>
                    <Table updateGujaratiTotal={this.updateGujaratiTotal}
                        updatePunjabiTotal={this.updatePunjabiTotal}
                        name="Kanjibhai" />
                    <Table updateGujaratiTotal={this.updateGujaratiTotal}
                        updatePunjabiTotal={this.updatePunjabiTotal}
                        name="Premjibhai" />
                    <Table updateGujaratiTotal={this.updateGujaratiTotal}
                        updatePunjabiTotal={this.updatePunjabiTotal}
                        name="Kiranbhai" />
                    <Table updateGujaratiTotal={this.updateGujaratiTotal}
                        updatePunjabiTotal={this.updatePunjabiTotal}
                        name="Ramjibhai" />
                </div>
            </div>
        </>)
    }
}
root.render(<Restaurant />);

