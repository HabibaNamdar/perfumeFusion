import "./login.css";
function Login() {
  return (
    <div className="container  mt-3">
      <div className="row justify-content-center">
        <div className="col-5">
          <div className="row">
            <div className="col-12">
              <h1 className="login-title">LOGIN</h1>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                />
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <label className="forgotpassword">Forgot password?</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-2">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg btn-block col-12 login-btn"
                        >
                          Sign In
                        </button>
                      </div>
                      <div className="row">
                        <span className="createaccount">Create account</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
