import { useEffect, useState } from "react";
import RecentBlogCard from "./RecentBlogCard";

const RecentBlogs = () => {

    // data load by useEffect
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://blog-website-server-r74c.onrender.com/recentBlogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, [])

    return (
        <div className="mt-6">
            <h2 className="text-3xl font-bold text-center mb-8">
                ✨ Recent Blog Posts
            </h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {
                    blogs.map(blog => <RecentBlogCard
                        key={blog._id}
                        blog={blog}></RecentBlogCard>)
                }
            </div>
        </div>
    );
};

export default RecentBlogs;