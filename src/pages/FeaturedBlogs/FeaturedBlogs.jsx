import { useMemo, useEffect, useState } from "react";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";

import Swal from "sweetalert2";

const FeaturedBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    // Fetch all blogs
    useEffect(() => {
        fetch("https://blog-website-server-r74c.onrender.com/blogs")
            .then(res => res.json())
            .then(data => {
                // Sort by word count of longDescription and take top 10
                const sorted = data
                    .sort((a, b) => {
                        const aWords = a.longDescription?.split(" ").length || 0;
                        const bWords = b.longDescription?.split(" ").length || 0;
                        return bWords - aWords;
                    })
                    .slice(0, 10);
                setBlogs(sorted);
            });
    }, []);

    // Columns definition
    const columns = useMemo(
        () => [
            {
                header: "Image",
                accessorKey: "blogImage",
                cell: ({ getValue }) => (
                    <img
                        src={getValue()}
                        alt="blog"
                        className="w-16 h-16 object-cover rounded-md"
                    />
                ),
            },
            {
                header: "Title",
                accessorKey: "title",
            },
            {
                header: "Category",
                accessorKey: "category",
            },
            {
                header: "Author",
                accessorKey: "name",
                cell: ({ getValue }) => getValue() || "Anonymous",
            },
            {
                header: "Word Count",
                accessorFn: row => row.longDescription?.split(" ").length || 0,
            },

        ],
        []
    );

    const table = useReactTable({
        data: blogs,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <h2 className="text-4xl font-bold mb-6 text-center">Top 10 Featured Blogs</h2>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto rounded-lg shadow">
                <table className="table min-w-[900px] text-sm sm:text-base">
                    <thead className="bg-gray-100">
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th
                                        key={header.id}
                                        className="border-b border-gray-300 text-left p-2"
                                    >
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id} 
                             className="hover:bg-green-100 transition-colors duration-300">
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id} className="border-b border-gray-300 p-2">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden flex flex-col gap-4">
                {blogs.map(blog => (
                    <div key={blog._id} className="bg-white shadow rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:bg-green-50 transition-colors duration-300">
                        <div className="w-full sm:w-20 flex-shrink-0">
                            <img src={blog.blogImage} alt={blog.title} className="w-20 h-20 object-cover rounded-md" />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <h3 className="font-bold text-lg">{blog.title}</h3>
                            <span className="text-gray-600">{blog.category}</span>
                            <span className="text-gray-400 text-sm">Author: {blog.name || "Anonymous"}</span>
                            <span className="text-gray-400 text-sm">
                                Word Count: {blog.longDescription?.split(" ").length || 0}
                            </span>
                        </div>
                       
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedBlogs;
