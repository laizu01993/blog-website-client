import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import logo from "../../assets/logo.png"

const Navbar = () => {

    // distructuring from authcontext
    const { user, logoutUser } = useContext(AuthContext);

    const links = <>
        <li><NavLink className={({ isActive }) =>
            isActive ? "text-green-400 font-bold underline" : "font-semibold"
        } to="/">Home</NavLink></li>

        <li><NavLink className={({ isActive }) =>
            isActive ? "text-green-400 font-bold underline" : "font-semibold"
        } to="/addBlog" >Add Blog</NavLink></li>

        <li><NavLink className={({ isActive }) =>
            isActive ? "text-green-400 font-bold underline" : "font-semibold"
        } to="/allBlogs" >All Blogs</NavLink></li>

        <li><NavLink className={({ isActive }) =>
            isActive ? "text-green-400 font-bold underline" : "font-semibold"
        } >Featured Blogs</NavLink></li>

        <li><NavLink className={({ isActive }) =>
            isActive ? "text-green-400 font-bold underline" : "font-semibold"
        } to="/wishlist">Wishlist</NavLink></li>
    </>

    // logout button
    const handleLogout = () => {
        logoutUser()
            .then(() => {
                console.log('successful log out');
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
    return (
        <div className="navbar shadow-sm sticky top-0 z-50 backdrop-blur-md bg-green-50/90 rounded-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="flex items-center gap-2 btn btn-ghost normal-case text-3xl text-green-700 font-bold">
                    <img
                        src={logo}
                        alt="My Blog Logo"
                        className="w-10 h-10 rounded-full"
                    />
                    My Blog
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {/* conditional button for user */}
                {
                    user ? <>
                        <div>
                            <img
                                src={user.photoURL || "/default-avatar.png"}

                                className="w-10 h-10 rounded-full border-2 border-primary"
                            />
                        </div>
                        <div>
                            <button onClick={handleLogout} className="btn btn-outline bg-green-300 text-white hover:bg-green-500">Log out</button>
                        </div></> : <>
                        <Link className="btn btn-outline hover:bg-green-200 bg-green-300" to='/register'>Register</Link>
                        <Link className="btn btn-outline hover:bg-green-200 bg-green-300" to='/login'>Log In</Link></>
                }

            </div>
        </div>
    );
};

export default Navbar;