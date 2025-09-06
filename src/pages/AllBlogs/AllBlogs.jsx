import { useLoaderData } from "react-router-dom";
import AllBlogCard from "./AllBlogCard";
import { useEffect, useState } from "react";

const AllBlogs = () => {

    // get data using loader
    const allBlogs = useLoaderData();
    console.log(allBlogs)

    // state for categories
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Fetch categories from backend
    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);

    // Filter blogs based on selected category
    const filteredBlogs = selectedCategory === "All"
        ? allBlogs
        : allBlogs.filter(blog => blog.category === selectedCategory);


    return (
        <div className="mt-6">
            <h2 className="text-4xl font-bold text-center mb-8">
                All Blogs
            </h2>

            {/* Search and Category Filter */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                {/* Search Box */}
                <input
                    type="text"
                    placeholder="Search by title..."
                    className="input input-bordered w-full md:w-1/2 rounded-md border-gray-300 focus:ring-2 focus:ring-green-400"
                />

                {/* Category Filter with Label */}
                <div className="flex flex-col md:flex-row items-center gap-2">
                    <label htmlFor="category" className="text-gray-700 font-medium">
                        Filter by Category:
                    </label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        id="category"
                        className="select select-bordered rounded-md border-gray-300 focus:ring-2 focus:ring-green-400"
                    >
                        <option value="All">All</option>
                        {
                            categories.map((category, index) => (<option key={index} value={category}>{category}</option>))
                        }

                    </select>
                </div>
            </div>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {
                    filteredBlogs.map(blog => <AllBlogCard
                        key={blog._id}
                        blog={blog}></AllBlogCard>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;