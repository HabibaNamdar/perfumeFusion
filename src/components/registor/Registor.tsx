import { Link } from "react-router-dom";
import "./register.css";
function Registor() {
  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-5">
          <div className="row">
            <div className="col-12">
              <h1 className="create-account">CREATE ACCOUNT</h1>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <div mb-3>
                <label className="firstname mb-2">First Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="row mt-3">
                <div className="col-12">
                  <div mb-3>
                    <label className="lastname mb-2">Last Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="row mt-3">
                    <div className="col-12">
                      <div mb-3>
                        <label className="email mb-2">Email address</label>
                        <input type="email" className="form-control" />
                      </div>
                      <div className="row mt-3">
                        <div className="col-12">
                          <div mb-3>
                            <label className="Password mb-2">Password</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="row mt-3">
                            <div className="col-12">
                              <div mb-2>
                                <button
                                  type="button"
                                  className="btn btn-primary btn-lg btn-block col-12 login-btn mb-2"
                                >
                                  Create
                                </button>
                              </div>
                              <div className="row">
                                <Link to="/login" className="alreadyregister">
                                  Already register ?
                                </Link>
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
          </div>
        </div>
      </div>
    </div>
  );
}
export default Registor;
