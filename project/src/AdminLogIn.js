import { Link } from "react-router-dom";
import getBase from "./api";
import axios from "axios";
import showError, { NetworkError, showMessage } from "./toast-message";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {useCookies} from 'react-cookie';
import { COOKIENAME } from "./api";
export default function AdminLogIn() {
  let navigate = useNavigate();
   //create cookie object and its methods 
   let [cookies,setCookie,removeCookie] = useCookies(COOKIENAME);
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let LogIn = function (e) {
    e.preventDefault();
    console.log(email, password)
    let apiAddress = getBase() + 'login.php';
    let form = new FormData();

    form.append("email", email);
    form.append("password", password);

    axios({
      method: 'post',
      responseType: 'json',
      url: apiAddress,
      data: form
    }).then((response) => {
      console.log(response.data);
      let error = response.data[0]['error'];
      if (error !== 'no')
        showError(error)
      else {
        let success = response.data[1]['success'];
        let message = response.data[2]['message'];
        if (success === 'no')
          showError(message);
        else {
          showMessage(message);
          setTimeout(() => {
            //create cookies variable
            setCookie('id',response.data[3]['id'],{path:'/'});
            console.log(cookies['name']);
            navigate("/home");
          }, 2000);
        }
      }
    }).catch((error) => {
      if (error.code === 'ERR_NETWORK')
        NetworkError();
    });
  }

  return (<div className="container bg-gradient-primary mt-5">
    {/* Outer Row */}
    <div className="row justify-content-center">
      <div className="col-xl-10 col-lg-12 col-md-9">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            {/* Nested Row within Card Body */}
            <div className="row">
              <div className="col-lg-6 d-none d-lg-block bg-login-image" />
              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form className="user" onSubmit={LogIn}>
                    <div className="form-group">
                      <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {/* <div className="form-group">
                      <div className="custom-control custom-checkbox small">
                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                        <label className="custom-control-label" htmlFor="customCheck">Remember
                          Me</label>
                      </div>
                    </div> */}
                    <input type="submit" className="btn btn-primary btn-user btn-block" value='Login' />
                    <hr />
                    <div className="text-center">
                      <Link className="small" to="/forgot-password">Forgot Password?</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);
}