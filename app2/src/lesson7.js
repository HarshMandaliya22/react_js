import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function InterestCalculator() {
  var page = (
    <div className='container'>
      <div className='row mt-3'>
        <div className='col-6 offset-3'>
            <div className='card'>
              <div className='card-header text-bg-success'>
                <h2>Interest Calculator</h2>
              </div>
              <div className='card-body'>
              <form>
                            <div className='mb-1'>
                                <label className='form-label' htmlFor='amount'>Amount</label>
                                <input type='number' id='amount' className='form-control' />
                            </div>
                            <div className='mb-1'>
                                <label className='form-label' htmlFor='rate'>Rate</label>
                                <input type='number' id='rate' className='form-control' />
                            </div>
                            <div className='mb-1'>
                                <label className='form-label' htmlFor='year'>Year</label>
                                <input type='number' id='year' className='form-control' />
                            </div>
                            <input type='button' className='btn btn-success w-100 mt-3' value='Calculate' />
                        </form>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
  return page;
}
root.render(InterestCalculator());