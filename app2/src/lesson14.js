import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
class Frame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSize: 100,
        };
    }

    ZoomIn = () => {
        this.setState(() => ({
            imageSize: this.state.imageSize * 1.1
        }));
    };

    ZoomOut = () => {
        this.setState(() => ({
            imageSize: this.state.imageSize * 0.9
        }));
    };

    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 mt-5'>
                        <div className='text-center'>
                            <img
                                src="https://picsum.photos/100?random=1"
                                width={this.state.imageSize} height={this.state.imageSize}
                            />
                            <div className='mt-3'>
                                <button className='btn btn-success' onClick={this.ZoomIn}>Zoom In</button> &emsp;
                                <button className='btn btn-success' onClick={this.ZoomOut}>Zoom Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
root.render(<Frame />);

