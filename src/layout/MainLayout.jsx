import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";

const MainLayout = () =>{
    return(
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;