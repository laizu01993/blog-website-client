import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <footer className="bg-green-50 text-gray-700 mt-10 rounded-md">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                {/* Brand / About */}
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="MyBlog Logo" className="w-10 h-10 object-contain" />
                    <div>
                        <h2 className="text-2xl font-bold text-green-700">MyBlog</h2>
                        <p className="mt-2 text-sm leading-relaxed">
                            Share and discover inspiring blogs from writers around the world.
                        </p>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold mb-3 text-green-800">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-green-600">Home</a></li>
                        <li><a href="/all-blogs" className="hover:text-green-600">All Blogs</a></li>
                        <li><a href="/featured" className="hover:text-green-600">Featured Blogs</a></li>
                        <li><a href="/add-blog" className="hover:text-green-600">Add Blog</a></li>
                        <li><a href="/wishlist" className="hover:text-green-600">Wishlist</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Contact</h3>
                    <p>Email: support@myblog.com</p>
                    <p>Phone: +880 1234 567890</p>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                    <div className="flex space-x-4 text-2xl">
                        <button><FaFacebook className="bg-blue-600 text-white rounded-full" /></button>
                        <button><FaTwitter
                            className="text-blue-300" /></button>
                        <button><FaGithub />
                        </button>

                    </div>
                </div>
            </div>
            {/* Bottom bar */}
            <div className="bg-green-100 text-center text-sm py-3 border-t border-green-200 rounded-sm">
                © {new Date().getFullYear()} <span className="font-semibold">MyBlog</span>. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
