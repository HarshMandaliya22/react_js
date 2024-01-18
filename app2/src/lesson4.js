import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var output = (
  <div className='container'>
    <div className='row'>
      <div className='col-6 offset-3'>
        <form>
          <h2 class="text-center my-4">Forgot Password</h2>
          <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input type="email" class="form-control" id="email" name="email" required/>
          </div>
          <button type="submit" class="btn btn-primary">Reset Password</button>
        </form>
      </div>
    </div>
  </div>)
root.render(output);