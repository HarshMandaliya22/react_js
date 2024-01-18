import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var output = (
  <div className='container'>
    <div className='row'>
      <div className='col-12'>
        <h1 className='text-center mt-2'>Harsh Mandaliya</h1>
        <p className='text-center'><b>Mechanical Enginner</b></p>
        <hr />
        <table className='table text-center table-bordered'>
          <tr>
            <td className='w-50'>
              <div className='h4'>Work Experience</div>
              Sr. Quality Control Enginner <br />
              Accurance Data Services LLP<br />
              01/2022 to Present
            </td>
            <td className='w-50'>
              <div className='h4'>Technical Skills</div>
              (1)VIRTUAL INSPECTION (2)HTML <br /> (3)C Language (4)CSS (5)Java Script <br /> (6)BASICS OF THERMODYNAMICS
            </td>
          </tr>
          <tr>
            <td className='w-50'>
              <div className='h4'>Education</div>
              Bachelor of Engineering-Mechanical | 2017-2021 <br />
              Faculty of Technology & Engineering, MSU Baroda <br />
              69.47% Equivalent to 8.72 CGPA (First Class with Distinction)
            </td>
            <td className='w-50'>
              <div className='h4'>Project</div>
              Numerical & Experimental Investigation of
              Diesel Fuel Injector Nozzle
              (04/2021 - 05/2021)
            </td>
          </tr>
          <tr>
            <td className='w-50'>
              <div className='h4'>Certificate</div>
              Essential For NX 9.0 (01/2019 - 02/2019) <br />
              Synchronous Modelling Fundamentals (07/2019 - 08/2019) <br />
              C Language
            </td>
            <td className='w-50'>
              <div className='h4'>Langues</div>
              Gujarati <br/> English <br/> Hindi
            </td>
          </tr>
        </table>
      </div>
    </div>

  </div>)
root.render(output);