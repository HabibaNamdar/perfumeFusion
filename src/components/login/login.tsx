import { Link } from "react-router-dom";
import "./login.css";
import { FormEvent, useRef, useState } from "react";
function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const person = { email: "", password: "" };
  
  const handlerSumbit = (event: FormEvent) => {
    event.preventDefault();
  
    if (emailRef.current) {
      person.email = emailRef.current.value;
    }
    if (passwordRef.current) {
      person.password = passwordRef.current.value;
    }
    console.log(person);
  };

  return (
    <div className="container  mt-3">
      <div className="row justify-content-center">
        <div className="col-5">
          <div className="row">
            <div className="col-12">
              <h1 className="login-title">LOGIN</h1>
            </div>
          </div>
          <form onSubmit={handlerSumbit}>
            <div className="row mt-3">
              <div className="col-12">
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    ref={emailRef}
                    className="form-control"
                    placeholder="name@example.com"
                  />
  
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="mb-3">
                      <label className="password">Password</label>
                      <label className="forgotpassword">Forgot password?</label>
                      <input
                        ref={passwordRef}
                        type="password"
                        className="form-control"
                      />
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="mb-2">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg btn-block col-12 login-btn"
                          >
                            Sign In
                          </button>
                        </div>
                        <div className="row">
                          <Link to="/register" className="createaccount">
                            Create account
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
