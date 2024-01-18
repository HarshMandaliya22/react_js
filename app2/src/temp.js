import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
class Image extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <table className='table text-center table-bordered'>
                        <tbody>
                            <tr>
                                <td>
                                    <img classname="img-fluid" src="https://picsum.photos/200?random=1" />
                                    <div className='d-flex mt-2 justify-content-center'>
                                        <span><button className='btn btn-warning'>Zoom Out</button></span> &emsp;
                                        &emsp;<span><button className='btn btn-warning'>Zoom In</button></span>
                                    </div>
                                </td>
                                <td>
                                    <img classname="img-fluid" src="https://picsum.photos/200?random=2" />
                                    <div className='d-flex mt-2 justify-content-center'>
                                        <span><button className='btn btn-warning'>Zoom Out</button></span> &emsp;
                                        &emsp;<span><button className='btn btn-warning'>Zoom In</button></span>
                                    </div>
                                </td>
                                <td>
                                    <img classname="img-fluid" src="https://picsum.photos/200?random=3" />
                                    <div className='d-flex mt-2 justify-content-center'>
                                        <span><button className='btn btn-warning'>Zoom Out</button></span> &emsp;
                                        &emsp;<span><button className='btn btn-warning'>Zoom In</button></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img classname="img-fluid" src="https://picsum.photos/200?random=4" /><div className='d-flex mt-2 justify-content-center'>
                                        <span><button className='btn btn-warning'>Zoom Out</button></span> &emsp;
                                        &emsp;<span><button className='btn btn-warning'>Zoom In</button></span>
                                    </div>
                                </td>
                                <td>
                                    <img classname="img-fluid" src="https://picsum.photos/200?random=5" /><div className='d-flex mt-2 justify-content-center'>
                                        <span><button className='btn btn-warning'>Zoom Out</button></span> &emsp;
                                        &emsp;<span><button className='btn btn-warning'>Zoom In</button></span>
                                    </div>
                                </td>
                                <td>
                                    <img classname="img-fluid" src="https://picsum.photos/200?random=6" /><div className='d-flex mt-2 justify-content-center'>
                                        <span><button className='btn btn-warning'>Zoom Out</button></span> &emsp;
                                        &emsp;<span><button className='btn btn-warning'>Zoom In</button></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img classname="img-fluid" src="https://picsum.photos/200?random=7" /><div className='d-flex mt-2 justify-content-center'>
                                        <span><button className='btn btn-warning'>Zoom Out</button></span> &emsp;
                                        &emsp;<span><button className='btn btn-warning'>Zoom In</button></span>
                                    </div>
                                </td>
                                <td>
                                    <img classname="img-fluid" src="https://picsum.photos/200?random=8" /><div className='d-flex mt-2 justify-content-center'>
                                        <span><button className='btn btn-warning'>Zoom Out</button></span> &emsp;
                                        &emsp;<span><button className='btn btn-warning'>Zoom In</button></span>
                                    </div>
                                </td>
                                <td>
                                    <img classname="img-fluid" src="https://picsum.photos/200?random=9" /><div className='d-flex mt-2 justify-content-center'>
                                        <span><button className='btn btn-warning'>Zoom Out</button></span> &emsp;
                                        &emsp;<span><button className='btn btn-warning'>Zoom In</button></span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>)
    }
}
root.render(<Image />);
