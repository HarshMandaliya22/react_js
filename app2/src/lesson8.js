import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function DisplayCurrentDateTime(today) {
  var page = (
    <div className='container'>
      <div className='row mt-3'>
        <div className='col-12'>
           <table className='table table-bordered'>
           <tbody>
           <tr>
                <td>Day</td>
                <td>Month</td>
                <td>Year</td>
              </tr>
              <tr>
                <td>{today.day}</td>
                <td>{today.month}</td>
                <td>{today.year}</td>
              </tr>
              <tr>
                <td>Hour</td>
                <td>Minute</td>
                <td>Second</td>
              </tr>
              <tr>
                <td>{today.hour}</td>
                <td>{today.minute}</td>
                <td>{today.second}</td>
              </tr>
           </tbody>
           </table>
        </div>
      </div>
    </div>
  );
  return page;
}
// create date class object
var now = new Date()
var today = {
  hour : now.getHours(),
  minute : now.getMinutes(),
  second : now.getSeconds(),
  day : now.getDay(),
  month : now.getMonth()+1,
  year : now.getFullYear()
}
root.render(DisplayCurrentDateTime(today));