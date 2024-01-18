import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function Car(props){
    return( <div className='col-lg-3 col-md-4 col-sm-6 col-12 my-3'>
    <div className='card'>
        <div className='card-header text-bg-success h3'>Car Details</div>
        <div class="card-body">
            <h5 class="card-title">{props.car_model}</h5>
            <p class="card-text">Price: ${props.price}</p>
            <p class="card-text">Seats: {props.seats}</p>
            <p class="card-text">Engine Type: {props.engine}</p>
            <p class="card-text">Color: {props.color}</p>
        </div>
    </div>
</div>)
}
function Page() {
    return (
        <div className='container-fluid'>
            <div className='row'>
               <Car car_model="Car Model 1" price="35,000" seats="5" engine="Inline-4" color="Silver" />
               <Car car_model="Car Model 2" price="45,000" seats="4" engine="V6" color="Black" />
               <Car car_model="Car Model 3" price="30,000" seats="7" engine="Hybrid" color="White" />
               <Car car_model="Car Model 4" price="55,000" seats="5" engine="V8" color="Red" />
               <Car car_model="Car Model 5" price="46,000" seats="4" engine="Inline-6" color="Yellow" />
               <Car car_model="Car Model 6" price="28,000" seats="7" engine="Electric" color="Blue" />
               <Car car_model="Car Model 7" price="33,000" seats="5" engine="Turbocharged" color="Gray" />
               <Car car_model="Car Model 8" price="36,000" seats="4" engine="V8" color="Burgundy" />
            </div>
        </div>
    )
}
root.render(<Page />);
