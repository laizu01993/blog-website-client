import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { formatDistanceToNow } from "date-fns";

const BlogDetails = () => {

    // loading data by loader
    const blog = useLoaderData();

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    // state for comments
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState("");

    const {
        _id,
        title,
        blogImage,
        shortDescription,
        longDescription,
        name,
        authorImage,
        category,
        createdAt,
        email
    } = blog;

    // Fetch comments for this blog
    useEffect(() => {
        fetch(`http://localhost:5000/comments?blogId=${_id}`)
            .then((res) => res.json())
            .then((data) => setComments(data));
    }, [_id]);

    // Handle comment submit
    const handleComment = (e) => {
        e.preventDefault();

        if (!commentText.trim()) {
            Swal.fire("Error", "Comment cannot be empty", "error");
            return;
        }

        const newComment = {
            blogId: _id,
            text: commentText,
            commenterName: user.displayName || "Anonymous",
            commenterImage:
                user.photoURL || "https://i.ibb.co/4RhtcZVD/default-avatar-icon-of-social-media-user-vector.jpg",
            createdAt: new Date().toISOString(),
        };

        fetch("http://localhost:5000/comments", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newComment),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire("Success", "Comment added successfully!", "success");
                    setComments((prev) => [...prev, newComment]);
                    setCommentText("");
                }
            });
    };

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            {/* Blog Image */}
            <div className="relative">
                <img
                    src={blogImage}
                    alt={title}
                    className="w-full max-h-[500px] object-cover rounded-2xl shadow-lg"
                />
                <span className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                    {category || "General"}
                </span>
            </div>

            {/* Blog Content */}
            <div className="mt-6">
                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {title}
                </h1>

                {/* Author Section */}
                <div className="flex items-center gap-4 mb-6">
                    <img
                        src={authorImage || "https://i.ibb.co/4RhtcZVD/default-avatar-icon-of-social-media-user-vector.jpg"}
                        alt={name || "Anonymous"}
                        className="w-12 h-12 rounded-full object-cover border-2 border-green-500"
                    />
                    <div>
                        <p className="font-semibold text-gray-800">
                            {name || "Anonymous"}
                        </p>
                        <p className="text-sm text-gray-500">
                            {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
                        </p>
                    </div>
                </div>

                {/* Short Description */}
                <p className="text-lg font-medium text-gray-700 leading-relaxed mb-6">
                    {shortDescription}
                </p>

                {/* Long Description */}
                <div className="text-gray-800 text-base md:text-lg leading-relaxed space-y-4">
                    {longDescription}
                </div>
                {/* Update Button - Visible only to blog owner */}
                {user?.email === email && (
                    <Link 
                        to={`/updateBlog/${_id}`}>  
                        <button className="btn rounded-lg mt-4 bg-green-600 hover:bg-green-700 text-white mb-8" > Update Blog </button></Link>

                )}
            </div>
            {/* Comments Section */}
            <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4">Comments</h2>

                {/* If the current user is the blog owner */}
                {user?.email === email ? (
                    <p className="text-red-500 font-medium">
                        You cannot comment on your own blog.
                    </p>
                ) : (
                    <form onSubmit={handleComment} className="mb-6">
                        <textarea
                            className="textarea textarea-bordered w-full mb-3"
                            placeholder="Write your comment here..."
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            required
                        ></textarea>
                        <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white">
                            Post Comment
                        </button>
                    </form>
                )}

                {/* Display Comments */}
                <div className="space-y-4">
                    {comments.length === 0 ? (user?.email !== email && (
                        <p className="text-gray-500">No comments yet. Be the first to comment!</p>)
                    ) : (
                        comments.map((comment, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg shadow-sm"
                            >
                                <img
                                    src={comment.commenterImage}
                                    alt={comment.commenterName}
                                    className="w-12 h-12 rounded-full object-cover border border-green-400"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800">{comment.commenterName}</p>
                                    <p className="text-sm text-gray-500">
                                        {new Date(comment.createdAt).toLocaleString()}
                                    </p>
                                    <p className="mt-2 text-gray-700">{comment.text}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div >
    );
};

export default BlogDetails;