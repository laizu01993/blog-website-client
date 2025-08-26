import Lottie from "lottie-react";
import registerLottieData from "../../assets/Register.json"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";
import Swal from "sweetalert2";

const Register = () => {

    // distructuring data from AuthContext
    const { user, createUser } = useContext(AuthContext);

    // error message state
    const [errorMessage, setErrorMessage] = useState('');

    // show password state
    const [showPassword, setShowPassword] = useState(false);

    // event handler
    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const terms = form.terms.checked;
        console.log(name, photo, email, password, terms);

        // reset error and status
        setErrorMessage('');

        // terms validation
        if (!terms) {
            setErrorMessage('Please accept our terms and conditions');
            return;
        }

        // password validation
        if (password.length < 6) {
            setErrorMessage("Password must be at least 6 characters long");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setErrorMessage("Password must include at least one uppercase letter");
            return;
        }
        if (!/[0-9]/.test(password)) {
            setErrorMessage("Password must include at least one number");
            return;
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setErrorMessage("Password must include at least one special character");
            return;
        }

        // call createUser with email and password
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                // sweet alert for successful
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registration Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error.message);
                // sweet alert for error
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            })

    }

    return (
        <div className="w-11/12 mx-auto max-w-5xl mt-10 flex flex-col md:flex-row items-center gap-10">
            {/* Left Side - Form */}
            <div className="w-full md:w-1/2 bg-green-100 shadow-md p-8 rounded">
                <h2 className="text-4xl font-bold text-center">SignUp Now!</h2>
                <form onSubmit={handleRegister} className="space-y-4 mt-8">
                    <div>
                        <label className="block font-normal mb-1">Name</label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered w-full" required />
                    </div>
                    <div>
                        <label className="block font-normal mb-1">Photo URL</label>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered w-full" required />
                    </div>
                    <div>
                        <label className="block font-normal mb-1">Email</label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered w-full" required />
                    </div>
                    <div className="relative">
                        <label className="block font-normal mb-1">Password</label>
                        <input
                            type={showPassword ? "text" : "password"} placeholder="Password" name="password" className="input input-bordered w-full" required />
                        <button onClick={() => setShowPassword(!showPassword)} type="button" className="btn btn-xs absolute right-4 mt-2">
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </button>
                    </div>

                    {/* terms */}
                    <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">

                        <label className="label">
                            <input type="checkbox"
                                name="terms" className="checkbox" />
                            Accept Our Terms And Conditions.
                        </label>
                    </fieldset>

                    <div className="text-center">
                        <button type="submit" className="btn w-full font-bold text-green-500 border-green-500">SignUp</button>
                    </div>

                    <p className="font-medium text-center">
                        Already Have An Account? Please <Link className="text-red-500" to="/login">Login</Link>
                    </p>

                    <div className="divider font-bold">OR</div>

                    <div className="text-center">
                        <SocialLogin></SocialLogin>
                    </div>
                </form>
                {/* set error message */}
                {
                    errorMessage && <p className="text-red-600">{errorMessage}</p>
                }
            </div>

            {/* Right Side - Lottie */}
            <div className="w-full md:w-1/2 flex justify-center">
                <Lottie animationData={registerLottieData} loop={true} className="w-80 md:w-full" />
            </div>
        </div>
    );
};

export default Register;
