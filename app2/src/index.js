import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
class Post extends React.Component {
    constructor(props) {
        console.log("constructor method is called......");
        super(props)
        //property variable
        this.detail = props.detail;
        this.photo = props.photo;
        //state variable
        this.state = {
            count: 0
        }
    }
    updateCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("should component method is called......");
        if (nextState.count > 10 && nextState.count < 20)
            return false;
        else
            return true;
    }
    componentWillUpdate(nextProps, nextState)
    {
        console.log('componentWillUpdate method is called...');
    }
    render() {
        console.log('render method is called...');
        return (<div className='col-lg-3 col-md-4 col-sm-6 col-12'>
            <div className='card'>
                <img className='card-img-top' src={this.photo} />
                <div className='card-body'>
                    <p>{this.detail}</p>
                </div>
                <div className='card-footer d-flex justify-content-between'>
                    <h4>{this.state.count}</h4>
                    <img onClick={this.updateCount} src='like.png' className='img-fluid' />
                </div>
            </div>
        </div>);
    }
    componentDidUpdate(previousProps,previousState)
    {
        console.log('componentDidUpdate method is called...');
    }
}
function Page() {
    return (
        <>
            <div className='container-fluid bg-light p-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>App life cycle</h1>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row mt-2'>
                    <Post detail='first post detail' photo='https://picsum.photos/300?random=1' />
                    <Post detail='second post detail' photo='https://picsum.photos/300?random=2' />
                    <Post detail='third post detail' photo='https://picsum.photos/300?random=3' />
                </div>
            </div>
        </>

    );
}
root.render(<Page />)
