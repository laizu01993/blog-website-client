import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const SocialLogin = () =>{

    // distructuring from auth context
    const {signInWithGoogle} = useContext(AuthContext);

    // button handler
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.message)
        })
    } 

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn rounded-3xl p-6 text-lg text-green-700 border-green-600">Google</button>
        </div>
    );
};

export default SocialLogin;