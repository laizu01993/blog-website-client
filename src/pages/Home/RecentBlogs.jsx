import { useEffect, useState } from "react";
import RecentBlogCard from "./RecentBlogCard";

const RecentBlogs = () =>{

    // data load by useEffect
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data =>{
            setBlogs(data)
        })
    }, [])

    return (
        <div>
            <div>
                {
                    blogs.map(blog =><RecentBlogCard
                    key={blog._id}
                    job={job}></RecentBlogCard>)
                }
            </div>
        </div>
    );
};

export default RecentBlogs;