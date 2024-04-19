import { Link ,useNavigate} from "react-router-dom";
import "./Checkout-form.css"
import { useForm, FieldValues } from "react-hook-form"; // Assuming useForm is imported from react-hook-form
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    firstname: z.string().min(2, { message: "This field is required" }),
    lastname: z.string().min(2, { message: "This field is required" }),
    address: z.string().min(5, { message: "This field is required" })
});

type FormData = z.infer<typeof schema>;

function CheckoutForm() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = (data: FormData) => {
        if (Object.keys(errors).length === 0){
            navigate("/item-in-cart");
    
        }
        console.log(data);
        // Here you can handle form submission logic, like sending data to a server
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-12">
                                <h5>Give your Email for Confirmation Message</h5>
                                <input {...register('email')} type="email" placeholder="Email or mobile phone number" className="form-control mt-3" />
                                {errors.email && <p className="text-danger">{errors.email.message}</p>}
                            </div>
                            <div className="row">
                                <div className="col-12 mt-2 pointer">
                                    <input type="checkbox" className="pointer" /> {/* Adding name attribute for checkbox */}
                                    <span className="checkbox-pointer">Email me with news and offers</span>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <h5>Delivery</h5>
                                <select className="form-select"> <option value="Pakistan">Pakistan</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-6">
                                <input {...register('firstname')} type="text" className="form-control" placeholder="First name" />
                                {errors.firstname && <p className="text-danger">{errors.firstname.message}</p>}
                            </div>
                            <div className="col-6">
                                <input {...register('lastname')} type="text" className="form-control" placeholder="Last name" />
                                {errors.lastname && <p className="text-danger">{errors.lastname.message}</p>}
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12">
                                <input {...register('address')} type="text" className="form-control" placeholder="Address" />
                                {errors.address && <p className="text-danger">{errors.address.message}</p>}
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <h5>Payment</h5>
                                <input type="radio" className="form-check-input border-dark" />
                                <label className="form-check-label">Cash on Delivery (COD)</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-dark btn-block mt-3 col-12">Complete order</button>
                      {/* <Link to="/item-in-cart"><button type="submit" className="btn btn-dark btn-block mt-3 col-12">Complete order</button></Link> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CheckoutForm;