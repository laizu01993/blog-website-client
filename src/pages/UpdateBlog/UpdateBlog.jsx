import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBlog = () => {

    const { user } = useContext(AuthContext);

    const blog = useLoaderData();

    const handleUpdateBlog = (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const blogImage = form.blogImage.value;
        const category = form.category.value;
        const shortDescription = form.shortDescription.value;
        const longDescription = form.longDescription.value;

        // blog object with user info
        const updateBlog = {
            title,
            blogImage,
            category,
            shortDescription,
            longDescription,
            // not from form, from AuthContext
            email: user?.email,
            name: user?.displayName || "Anonymous",
            authorImage: user?.photoURL,
            createdAt: new Date()
        };

        // send data to the server
        fetch(`http://localhost:5000/blogs/${blog._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBlog)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Blog updated successfully",
                        confirmButton: false,
                        timer: 1500
                    });

                }
            })
    }
    return (
        <div className="w-full mt-6 px-4 flex justify-center">
            {/* CHANGED: Wrapped form inside a card-like container */}
            <div className="w-full max-w-2xl bg-green-50 shadow-lg rounded-xl p-6">
                <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
                    Update Blog
                </h2>
                <form onSubmit={handleUpdateBlog} className="space-y-4">
                    {/* title */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Blog Title</span>
                        </label>
                        <input
                        defaultValue={blog.title}
                            name="title"
                            type="text"
                            placeholder="Enter blog title"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    {/* photo url */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Blog Image URL</span>
                        </label>
                        <input
                        defaultValue={blog.blogImage}
                            name="blogImage"
                            type="text"
                            placeholder="Enter blog image URL"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    {/* category */}
                    <select name="category" defaultValue={blog.category} className="select select-bordered w-full" required>
                        <option value="">Select Category</option>
                        <option value="Tech">Tech </option>
                        <option value="Lifestyle">Lifestyle</option>
                        <option value="Travel">Travel</option>
                    </select>
                    {/* short description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Short Description</span>
                        </label>
                        <textarea
                        defaultValue={blog.shortDescription}
                            name="shortDescription"
                            placeholder="Write your brief summary of your blog"
                            className="textarea textarea-bordered w-full"
                            required
                        ></textarea>
                    </div>
                    {/* long description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Long Description</span>
                        </label>
                        <textarea
                        defaultValue={blog.longDescription}
                            name="longDescription"
                            placeholder="Write the full blog content here"
                            className="textarea textarea-bordered w-full h-32"
                            required
                        ></textarea>
                    </div>
                    {/* button */}
                    <button
                        type="submit"
                        className="btn btn-block bg-green-600 hover:bg-green-700 text-white rounded-xl"
                    >
                        Update Blog
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateBlog;