

import { formatDistanceToNow, parseISO } from "date-fns";
import { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import Swal from "sweetalert2";
import AuthContext from "../../context/AuthContext/AuthContext";

const RecentBlogCard = ({ blog }) => {

    const {user} = useContext(AuthContext);
    
    // Destructuring with default values
    const {
        title,
        blogImage,
        shortDescription,
        category,
        createdAt,
        name,
        authorImage,
    } = blog || {};

    // handle wishlist button
    const handleAddToWishlist = () => {
        const wishlistItem = {
            title: blog.title,
            category: blog.category,
            blogImage: blog.blogImage,
            email: user.email,
            createdAt: new Date()
        };

        fetch('http://localhost:5000/wishlist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(wishlistItem),
        })
            .then(res => res.json())
            .then(data => {
                // sweet alert for successful
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Blog added to wishlist successfully",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            });
    }

    // Safely format createdAt
    const timeAgo = createdAt
        ? formatDistanceToNow(parseISO(createdAt), { addSuffix: true })
        : "Just now";

    return (
        <div className="card bg-green-50 shadow-md">
            {/* Blog Image */}
            <figure>
                <img
                    src={blogImage}
                    alt={title}
                    className="h-48 w-full object-cover"
                />
            </figure>

            <div className="card-body p-4 flex flex-col gap-3">
                {/* Category */}
                <span className="badge badge-success w-fit font-medium">{category}</span>

                {/* Title */}
                <h2 className="text-lg font-bold">{title}</h2>

                {/* Short Description */}
                <p className="text-gray-600 font-medium">{shortDescription}</p>

                {/* Author and Publish Date */}
                <div className="flex items-center justify-between text-sm font-medium text-gray-500">
                    <div className="flex items-center gap-2">
                        <img
                            src={authorImage ||
                                //  fallback avatar
                                "https://i.ibb.co/4RhtcZVD/default-avatar-icon-of-social-media-user-vector.jpg"}
                            alt={name || "Anonymous"}
                            className="w-6 h-6 rounded-full"
                        />
                        <span>{name || "Anonymous"}</span> {/* fallback text */}
                    </div>
                    <span>{timeAgo}</span>
                </div>

                {/* Buttons */}
                <div className="card-actions justify-between mt-3">
                    <button className="btn bg-green-400 hover:bg-green-500 rounded-md border-black  btn-sm">Details</button>
                    <button onClick={handleAddToWishlist} className="btn btn-outline rounded-md btn-sm"><FaRegHeart /> Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default RecentBlogCard;
