import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";

const MainLayout = () =>{
    return(
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;