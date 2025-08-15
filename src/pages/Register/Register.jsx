import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="w-11/12 mx-auto max-w-md bg-blue-50 shadow-md p-8 rounded mt-10">
            <h2 className="text-4xl font-bold text-center">SignUp Now!</h2>
            <form className="space-y-4 mt-8">
                <div>
                    <label className="block font-normal mb-1">Name</label>
                    <input type="text"
                        placeholder="Name" name="name" className="input input-bordered w-full" required />
                </div>
                <div>
                    <label className="block font-normal mb-1">Photo URL</label>
                    <input type="text"
                        placeholder="Photo URL" name="photo" className="input input-bordered w-full" required />
                </div>
                <div>
                    <label className="block font-normal mb-1">Email</label>
                    <input type="email"
                        placeholder="Email" name="email" className="input input-bordered w-full" required />
                </div>
                <div className="relative">
                    <label className="block font-normal mb-1">Password</label>
                    <input type="password"
                        placeholder="Password" name="password" className="input input-bordered w-full" required />
                    <button className="btn btn-xs absolute right-4 mt-2">
                         <FaEyeSlash></FaEyeSlash>
                        
                    </button>
                </div>


                <div className="text-center">
                    <button type="submit" className="btn w-full  font-bold text-blue-500 border-blue-500 text-center">SignUp</button>
                </div>

                <p className="font-medium text-center">Already Have An Account? Please <Link className="text-red-500" to="/login">Login</Link></p>


                <div className="divider font-bold">OR</div>
                {/* <div className="text-center">
                    <SocialLogin></SocialLogin>
                </div> */}
            </form>
        </div>
    );
};

export default Register;