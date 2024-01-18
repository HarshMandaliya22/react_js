import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var output = (
  <div className='container'>
    <div className='row'>
      <div className='col-6 offset-3'>
        <form>
          <h2 class="text-center mb-4">Bus Route Search</h2>
          <div class="mb-3">
            <label for="source" class="form-label">Source:</label>
            <input type="text" class="form-control" id="source" name="source" required />
          </div>
          <div class="mb-3">
            <label for="destination" class="form-label">Destination:</label>
            <input type="text" class="form-control" id="destination" name="destination" required />
          </div>
          <div class="mb-3">
            <label class="form-label">Bus Type:</label>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="busType" id="express" value="Express" checked />
              <label class="form-check-label" for="express">
                Express
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="busType" id="sleeper" value="Sleeper" />
              <label class="form-check-label" for="sleeper">
                Sleeper
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="busType" id="ac" value="AC" />
              <label class="form-check-label" for="ac">
                AC
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="busType" id="acSleeper" value="AC Sleeper" />
              <label class="form-check-label" for="acSleeper">
                AC Sleeper
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Search</button>
        </form>
      </div>
    </div>
  </div>)
root.render(output);