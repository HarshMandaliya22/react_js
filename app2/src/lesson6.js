import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var output = (
  <div className='container'>
    <div className='row'>
      <div className='col-6 offset-3'>
        <h2>Shipping Information</h2>
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Full Name:</label>
            <input type="text" class="form-control" id="name" name="name" required/>
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">Address:</label>
            <textarea class="form-control" id="address" name="address" rows="3" required></textarea>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input type="email" class="form-control" id="email" name="email" required/>
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Phone Number:</label>
            <input type="tel" class="form-control" id="phone" name="phone" required />
          </div>
          <button type="submit" class="btn btn-primary">Continue to Payment</button>
        </form>
      </div>
      <div class="col-6 offset-3 my-5">
        <h2>Order Summary</h2>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Product Name
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Total
          </li>
        </ul>
      </div>
    </div>
  </div>)
root.render(output);