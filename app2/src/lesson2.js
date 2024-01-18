import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var output = (
  <div className='container'>
    <div className='row'>
      <div className='col-6 offset-3'>
        <form>
          <h2 class="text-center my-4">Register</h2>
          <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input type="email" class="form-control" id="email" name="email" required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password:</label>
            <input type="password" class="form-control" id="password" name="password" required />
          </div>
          <div class="mb-3">
            <label for="confirmPassword" class="form-label">Confirm Password:</label>
            <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" required />
          </div>
          <div class="mb-3">
            <label for="mobile" class="form-label">Mobile Number:</label>
            <input type="tel" class="form-control" id="mobile" name="mobile" required />
          </div>
          <button type="submit" class="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
  </div>)
root.render(output);