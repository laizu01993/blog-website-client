// import { useContext } from "react";
// import AuthContext from "../../context/AuthContext/AuthContext";

// const AddBlog = () => {

//     // distructuring
//     const { user } = useContext(AuthContext);

//     // event handler
//     const handleAddBlog = e => {
//         e.preventDefault();

//         const form = e.target;
//         const title = form.title.value;
//         const blogImage = form.blogImage.value;
//         const category = form.category.value;
//         const shortDescription = form.shortDescription.value;
//         const longDescription = form.longDescription.value;

//         // blog object with user info
//         const newBlog = {
//             title,
//             blogImage,
//             category,
//             shortDescription,
//             longDescription,
//             email: user?.email,   // not from form, from AuthContext
//             name: user?.displayName,  // also from AuthContext
//             createdAt: new Date()     // optional, for time record
//         };
//         console.log(title, blogImage, category, shortDescription, longDescription);

//     }

//     return (
//         <div className="w-full mt-4 p-6 bg-green-100">
//             <h2 className="text-2xl font-bold text-center mb-6 ">Add New Blog</h2>
//             <form onSubmit={handleAddBlog} className="space-y-4">
//                 {/* title */}
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text font-semibold">Blog Title</span>
//                     </label>
//                     <input
//                         name="title"
//                         type="text"
//                         placeholder="Enter blog title"
//                         className="input input-bordered w-full"
//                         required
//                     />
//                 </div>
//                 {/* photo url */}
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text font-semibold">Blog Image URL</span>
//                     </label>
//                     <input
//                         name="blogImage"
//                         type="text"
//                         placeholder="Enter blog image URL"
//                         className="input input-bordered w-full"
//                         required
//                     />
//                 </div>
//                 {/* form category row */}
//                 <select name="category" className="select w-full" required>
//                     <option value="">Select Category</option>
//                     <option value="Tech">Tech </option>
//                     <option value="Lifestyle">Lifestyle</option>
//                     <option value="Travel">Travel</option>
//                 </select>

//                 {/* short description */}
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text font-semibold">Short Description</span>
//                     </label>
//                     <textarea
//                         name="shortDescription"
//                         placeholder="Write your brief summary of your blog"
//                         className="textarea textarea-bordered w-full"
//                         required
//                     ></textarea>
//                 </div>
//                 {/* long description */}
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text font-semibold">Long Description</span>
//                     </label>
//                     <textarea
//                         name="longDescription"
//                         placeholder="Write the full blog content here"
//                         className="textarea textarea-bordered w-full"
//                         required
//                     ></textarea>
//                 </div>

//                 {/* button */}
//                 <input type="submit" value="Add Blog" className="btn btn-block bg-gray-300 rounded-2xl" />
//             </form>
//         </div>
//     );
// };

// export default AddBlog;


import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const AddBlog = () => {
    const { user } = useContext(AuthContext);

    const handleAddBlog = (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const blogImage = form.blogImage.value;
        const category = form.category.value;
        const shortDescription = form.shortDescription.value;
        const longDescription = form.longDescription.value;

        // blog object with user info
        const newBlog = {
            title,
            blogImage,
            category,
            shortDescription,
            longDescription,
            // not from form, from AuthContext
            email: user?.email,
            name: user?.displayName,
            createdAt: new Date()
        };
        console.log(title, blogImage, category, shortDescription, longDescription);

        // send data to the server side
        fetch('http://localhost:5000/blog', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBlog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Blog added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();

                }
            })

    };

    return (
        <div className="w-full mt-6 px-4 flex justify-center">
            {/* CHANGED: Wrapped form inside a card-like container */}
            <div className="w-full max-w-2xl bg-green-50 shadow-lg rounded-xl p-6">
                <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
                    Add New Blog
                </h2>
                <form onSubmit={handleAddBlog} className="space-y-4">
                    {/* title */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Blog Title</span>
                        </label>
                        <input
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
                            name="blogImage"
                            type="text"
                            placeholder="Enter blog image URL"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    {/* category */}
                    <select name="category" className="select select-bordered w-full" required>
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
                        Add Blog
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;




