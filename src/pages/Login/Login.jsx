import Lottie from "lottie-react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginLottieData from "../../assets/Login.json"

const Login = () => {

    // show password state
    const [showPassword, setShowPassword] = useState(false);

    // event handler
    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <div className="w-11/12 mx-auto max-w-5xl mt-10 flex flex-col md:flex-row items-center gap-10">
            {/* Left Side - Form */}
            <div className="w-full md:w-1/2 bg-green-100 shadow-md p-8 rounded">
                <h2 className="text-4xl font-bold text-center">Login Now!</h2>
                <form onSubmit={handleLogin} className="space-y-4 mt-8">

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

                    <div className="text-center">
                        <button type="submit" className="btn w-full font-bold text-green-500 border-green-500">Login</button>
                    </div>

                    <p className="font-medium text-center">
                        Don't Have An Account? Please <Link className="text-red-500" to="/register">Sign up</Link>
                    </p>

                    <div className="divider font-bold">OR</div>
                </form>
            </div>

            {/* Right Side - Lottie */}
            <div className="w-full md:w-1/2 flex justify-center ">
                <Lottie animationData={loginLottieData} loop={true} className="w-60 md:w-full" />
            </div>
        </div>
    );
};

export default Login;