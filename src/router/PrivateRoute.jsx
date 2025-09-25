import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    console.log(location)

    if (loading) {
        // showed skeleton for loading
        return (
            <div className="p-6">
                <Skeleton height={50} width="80%" />
                <Skeleton height={30} width="60%" className="mt-4" />
            </div>
        );
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;