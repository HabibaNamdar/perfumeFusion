import { Link } from "react-router-dom";
import "./register.css";
import {  FieldValues, useForm } from "react-hook-form";
import {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  firstname: z.string().min(1, { message: "First Name is required" }),
  lastname: z.string().min(1, { message: "Last Name is required" }),
  email: z.string().email({ message: "Invalid email address" }).min(1, { message: "Email is required" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" })
});

type FormData = z.infer<typeof schema>;

function Registor() {
  const {register, handleSubmit, formState: {errors}} = useForm<FormData>({resolver: zodResolver(schema)});

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
              <div className="mb-3">
                <label className="firstname mb-2">First Name</label>
                <input {...register('firstname')} type="text" className="form-control" />
                {errors.firstname && <p className="text-danger">{errors.firstname.message}</p>}
              </div>
              <div className="row mt-3">
                <div className="col-12">
                  <div className="mb-3">
                    <label className="lastname mb-2">Last Name</label>
                    <input {...register('lastname')} type="text" className="form-control" />
                    {errors.lastname && <p className="text-danger">{errors.lastname.message}</p>}
                  </div>
                  <div className="row mt-3">
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="email mb-2">Email address</label>
                        <input {...register('email')} type="email" className="form-control" />
                       {errors.email && <p className="text-danger">{errors.email.message}</p>}
                      </div>
                      <div className="row mt-3">
                        <div className="col-12">
                          <div className="mb-3">
                            <label className="Password mb-2">Password</label>
                            <input {...register('password')} type="text" className="form-control" />
                          {errors.password &&  <p className="text-danger">{errors.password.message}</p>}
                          </div>
                          <div className="row mt-3">
                            <div className="col-12">
                              <div className="mb-2">
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
