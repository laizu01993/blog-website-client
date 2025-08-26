import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-base-200 text-center px-4">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <h2 className="text-2xl mt-4 text-gray-800">Page Not Found</h2>
            <p className="mt-2 text-gray-600">Sorry, the page you're looking for doesn't exist.</p>
            <Link to="/" className="btn mt-6 bg-blue-400 text-white hover:bg-blue-500">
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;