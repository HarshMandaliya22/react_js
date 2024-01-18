import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
// example of functional class component
function Aboutus() {
  return (
    <div className='row mt-3'>
      <div className='col-12'>
        <h3>About us</h3>
        <p>Welcome to our IT training company in Bhavnagar, where innovation meets education to empower individuals with the skills needed for success in the dynamic world of information technology. At our state-of-the-art facility, we offer a comprehensive range of IT training programs, designed to cater to beginners as well as experienced professionals seeking to enhance their knowledge and stay ahead in the rapidly evolving tech landscape. Our expert instructors bring industry experience and cutting-edge insights to the classroom, ensuring a hands-on and immersive learning experience. Whether you're looking to master programming languages, delve into cybersecurity, or explore the latest in cloud computing, our courses are crafted to equip you with the expertise required in today's competitive IT environment. Join us on a transformative journey towards unlocking your full potential in the world of technology.</p>
      </div>
    </div>
  )
}
function Course(props) {
  return (
    <div className='col-lg-3 col-md-4 col-sm-6 col-12 mb-2'>
      <div className='card shadow'>
        <img src={props.photo} className='card-img-top' />
        <div className='card-body'>
          <h5>{props.name}</h5>
          <p>{props.detail}</p>
          <a className='btn btn-primary w-100'>Read more....</a>
        </div>
      </div>
    </div>
  )
}
function Page() {
  return (
    <div className='container'>
      <div className='row mt-3'>
        <div className='col-12'>
          <h3>THE EASYLEARN ACADEMY</h3>
        </div>
      </div>
      {/* End of 1st Row */}
      <Aboutus />
      <div className='row'>
        <Course name='Node JS' photo='https://picsum.photos/300?random=1'
          detail='Node JS course detail will be displayed here.' />

        <Course name='React JS' photo='https://picsum.photos/300?random=2'
          detail='React JS course detail will be displayed here.' />

        <Course name='Data Science' photo='https://picsum.photos/300?random=3'
          detail='Data Science course detail will be displayed here.' />

        <Course name='Machine Learning' photo='https://picsum.photos/300?random=4'
          detail='Data Science course detail will be displayed here.' />
      </div>
    </div>
  )
}
root.render(<Page />);
