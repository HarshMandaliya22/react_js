import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var output = (
  <div className='container'>
    <div className='row'>
      <div className='col-6 offset-3'>
        <form>
          <h2 class="text-center my-4">Change Password</h2>
          <div class="mb-3">
            <label for="currentPassword" class="form-label">Current Password:</label>
            <input type="password" class="form-control" id="currentPassword" name="currentPassword" required />
          </div>
          <div class="mb-3">
            <label for="newPassword" class="form-label">New Password:</label>
            <input type="password" class="form-control" id="newPassword" name="newPassword" required />
          </div>
          <div class="mb-3">
            <label for="confirmNewPassword" class="form-label">Confirm New Password:</label>
            <input type="password" class="form-control" id="confirmNewPassword" name="confirmNewPassword" required />
          </div>
          <button type="submit" class="btn btn-primary">Change Password</button>
        </form>
      </div>
    </div>
  </div>)
root.render(output);