import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function DisplayCurrentDateTime(today) {
  let ampm = "";
  if (today.hour <= 12)
    ampm = "AM";
  else
    ampm = "PM";
  let day = "";
  switch (today.day) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
      day = "Sunday";
      break;
  }
  var page = (
    <div className='container'>
      <div className='row mt-3'>
        <div className='col-12'>
          <table className='table w-50 table-bordered text-center'>
            <tbody>
              <tr>
                <th>Week Day</th>
                <th>Day</th>
                <th>Month</th>
                <th>Year</th>
              </tr>
              <tr>
                <td>{day}</td>
                <td>{today.day}</td>
                <td>{today.month}</td>
                <td>{today.year}</td>
              </tr>
              <tr>
                <th>Hour</th>
                <th>Minute</th>
                <th>Second</th>
                <th></th>
              </tr>
              <tr>
                <td>{today.hour}</td>
                <td>{today.minute}</td>
                <td>{today.second}</td>
                <td>{ampm}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  return page;
}
function updateDateTime(){
  // create date class object
var now = new Date()
var today = {
  hour: now.getHours(),
  minute: now.getMinutes(),
  second: now.getSeconds(),
  day: now.getDay(),
  month: now.getMonth() + 1,
  year: now.getFullYear()
}
root.render(DisplayCurrentDateTime(today));
}
setInterval(updateDateTime,1000)