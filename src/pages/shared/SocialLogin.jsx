import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {

    // navigate hook
    const navigate = useNavigate();

    // distructuring from auth context
    const { signInWithGoogle } = useContext(AuthContext);

    // button handler
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Google login successful!',
                    timer: 1500,
                    showConfirmButton: false,
                    position: 'top-end'
                });
                navigate('/');
            })

            .catch(error => {
                // console.log(error.message)
                Swal.fire({
                    icon: 'error',
                    title: 'Google login failed: ' + error.message,
                    timer: 2000,
                    showConfirmButton: false,
                    position: 'top-end'
                });
            })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn rounded-3xl p-6 text-lg text-green-700 border-green-600">Google</button>
        </div>
    );
};

export default SocialLogin;