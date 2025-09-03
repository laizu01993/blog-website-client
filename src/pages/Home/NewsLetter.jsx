import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            toast.error("Please enter a valid email");
            return;
        }

        // Simulate subscription (no backend required)
        toast.success("Thank you for subscribing to our newsletter!");

        // Reset input
        setEmail("");
    };

    return (
        <div className="bg-green-50 py-12 px-4 text-center rounded-lg mt-10">
            <Toaster position="top-right" reverseOrder={false} />

            <h2 className="text-2xl font-bold mb-3">Subscribe to our Newsletter</h2>
            <p className="text-gray-600 mb-6">
                Get the latest blogs delivered straight to your inbox.
            </p>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-xl mx-auto"
            >
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 flex-1"
                    required
                />
                <button
                    type="submit"
                    className="px-6 py-2 bg-green-400 hover:bg-green-500 text-white rounded-md font-semibold transition-colors duration-200"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default Newsletter;
