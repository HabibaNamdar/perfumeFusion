import { Link } from "react-router-dom";
import "./login.css";
import { FormEvent, useState } from "react";
import {  FieldValues, useForm } from "react-hook-form";
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" })
});

type FormData = z.infer<typeof schema>;

function Login() {

const {register, handleSubmit, formState: {errors}} = useForm<FormData>({resolver: zodResolver(schema)});

const onSubmit = (data: FieldValues) =>console.log(data);

  return (
    <div className="container  mt-3">
      <div className="row justify-content-center">
        <div className="col-5">
          <div className="row">
            <div className="col-12">
              <h1 className="login-title">LOGIN</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mt-3">
              <div className="col-12">
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input {...register('email')}
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                  />
                  {errors.email &&<p className="text-danger">{errors.email.message}</p>}
                  
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="mb-3">
                      <label className="password">Password</label>
                      <label className="forgotpassword">Forgot password?</label>
                      <input {...register('password')}
                        type="password"
                        className="form-control"
                      />
                      {errors.password &&<p className="text-danger">{errors.password.message}</p>}
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
