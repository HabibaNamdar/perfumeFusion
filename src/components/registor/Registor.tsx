import { Link } from "react-router-dom";
import "./register.css";
import {  FieldValues, useForm } from "react-hook-form";
function Registor() {
  const {register, handleSubmit, formState: {errors}} = useForm();

const onSubmit = (data: FieldValues) =>console.log(data);

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-5">
          <div className="row">
            <div className="col-12">
              <h1 className="create-account">CREATE ACCOUNT</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row mt-3">
            <div className="col-12">
              <div mb-3>
                <label className="firstname mb-2">First Name</label>
                <input {...register('firstname' , {required:true})} type="text" className="form-control" />
                {errors.firstname?.type === 'required' && <p className="text-danger">firstname is required.</p>}
              </div>
              <div className="row mt-3">
                <div className="col-12">
                  <div mb-3>
                    <label className="lastname mb-2">Last Name</label>
                    <input {...register('lastname', {required:true})} type="text" className="form-control" />
                    {errors.lastname?.type === 'required' && <p className="text-danger">lastname is required.</p>}
                  </div>
                  <div className="row mt-3">
                    <div className="col-12">
                      <div mb-3>
                        <label className="email mb-2">Email address</label>
                        <input {...register('email', {required:true})} type="email" className="form-control" />
                       {errors.email?.type === 'required' && <p className="text-danger">email is required.</p>}
                      </div>
                      <div className="row mt-3">
                        <div className="col-12">
                          <div mb-3>
                            <label className="Password mb-2">Password</label>
                            <input {...register('password', {required:true})} type="text" className="form-control" />
                          {errors.password?.type === 'required' &&  <p className="text-danger">password is required.</p>}
                          </div>
                          <div className="row mt-3">
                            <div className="col-12">
                              <div mb-2>
                                <button
                                  type="submit"
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
          </form>
        </div>
      </div>
    </div>
  );
}
export default Registor;
