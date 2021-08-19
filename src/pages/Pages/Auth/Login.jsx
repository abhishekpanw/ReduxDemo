import React, { Component, useEffect, useState } from "react";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/auth/auth.action";
import { Switch, Route, Link,Redirect } from "react-router-dom";
import { isAuthenticated } from "../../../helpers";

const Login = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state.auth)


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin =  (e) => {
 
     e.preventDefault();
    // alert(email)
     dispatch(login(email,password));
     

  }

  useEffect(() => {
    $(".needs-validation").submit(function(event) {
      let form = $(this);
      if (form[0].checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.addClass("was-validated");
    });
    
  }, [])

  if(isAuthenticated()){
   return <Redirect to="/dashboard"/> 
  }else{

    return (
      <div id="app"> 
        <section className="section">
          <div className="container mt-5">
            <div className="row">
              <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                <div className="login-brand">
                  <img
                    src="../assets/img/stisla-fill.svg"
                    alt="logo"
                    width="100"
                    className="shadow-light rounded-circle"
                  />
                </div>

                <div className="card card-primary">
                  <div className="card-header">
                    <h4>Login</h4>
                  </div>

                  <div className="card-body">
                    <form
                      method="POST"
                      noValidate
                      className="needs-validation"
                      onSubmit={handleLogin}
                    >
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          name="email"
                          tabIndex="1"
                          required
                          autoFocus
                          value= {email}
                          onChange = {(e)=> setEmail(e.target.value)}
                          
                        />
                        <div className="invalid-feedback">
                          Please fill in your email
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="d-block">
                          <label htmlFor="password" className="control-label">
                            Password
                          </label>
                          <div className="float-right">
                            <a
                              href="auth-forgot-password.html"
                              className="text-small"
                            >
                              Forgot Password?
                            </a>
                          </div>
                        </div>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          name="password"
                          tabIndex="2"
                          required
                          value= {password}
                          onChange = {(e)=> setPassword(e.target.value)}
                        />
                        <div className="invalid-feedback">
                          please fill in your password
                        </div>
                      </div>

                     

                      <div className="form-group">
                        <button                      
                          className="btn btn-primary btn-lg btn-block"
                          tabIndex="4"
                         type='submit'
                        >
                          Login
                        </button>
                      </div>
                    </form>
                   
                   
                  </div>
                </div>
              
                <div className="simple-footer">
                  Copyright &copy; CQLSYS 2020
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
 
   
  
}

export default Login

