import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
class Table extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<div className='col-lg-3'>
        <div className='card mb-3'>
            <div className='card-header d-flex justify-content-between'>
                <span>
                    <span className='badge text-bg-danger'>1</span>&nbsp;
                    <span className='h5'>Ramjibhai</span>
                </span>
                <span className='h5'>Total : 500</span>
            </div>
            <div className='card-body'>
                <button onClick={this.updatePunjabi} className='btn btn-danger w-100 mb-1'>Punjabi Thali &nbsp; <span className='badge text-bg-success'>2</span> </button>
                <button onClick={this.updateGujarati} className='btn btn-warning w-100 mb-1'>Gujarati Thali &nbsp; <span className='badge text-bg-success'>2</span> </button>
                <table width="100%">
                    <tr>
                        <td>
                            <button className='btn btn-success w-100 btn-sm mb-1'>Roti  &nbsp;<span className='badge text-bg-dark'>1</span></button>
                        </td>
                        <td>
                            <button className='btn btn-primary w-100 btn-sm mb-1'>Papad &nbsp;<span className='badge text-bg-dark'>1</span></button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className='btn btn-info w-100 btn-sm mb-1'>Sweets &nbsp;<span className='badge text-bg-dark'>1</span></button>
                        </td>
                        <td>
                            <button className='btn btn-secondary w-100 btn-sm mb-1'>Butter Milk &nbsp;<span className='badge text-bg-light'>1</span></button>
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
    render() {
        return (<>
            <div className='container-fluid bg-light p-3'>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-between'>
                        <h1>Shree Hari Restaurant</h1>
                        <h4>Gujarati Thali:- {this.state.gujarati_total}</h4>
                        <h4>Puinjabi Thali:- {this.state.punjabi_total}</h4>
                        </div>
                </div>
            </div>
            <div className='container mt-4'>
                <div className='row'>
                    <Table />
                    <Table />
                    <Table name="Kiranbhai"/>
                    <Table name="Ramjibhai" />
                </div>
            </div>
        </>)
    }
}
root.render(<Restaurant />);
