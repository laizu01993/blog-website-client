import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import { useContext, useEffect, useMemo, useState } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { formatDistanceToNow, parseISO } from 'date-fns';
import Swal from 'sweetalert2';

const Wishlist = () => {

    // distructuring user
    const { user } = useContext(AuthContext);

    // wishlist state declare
    const [wishlist, setWishlist] = useState([]);

    // fetch data with useEffect
    useEffect(() => {
        if (!user || !user.email)
            return;

        fetch(`http://localhost:5000/wishlist?email=${user.email}`)
            .then(res => res.json())
            .then((data) => setWishlist(data));
    }, [user?.email]);

    // delete wishlist item
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/wishlist/${id}`, {
                    method: "DELETE"
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0)
                            // Remove the deleted item from the wishlist state
                        setWishlist(prev => prev.filter(item => item._id !== id)); {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Blog remove from wishlist.",
                                icon: "success",
                                showConfirmButton: false,
                        timer: 1500
                            });
                        }
                    })

            }
        });
    }


    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
                My Wishlist ({wishlist.length})
            </h2>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto rounded-lg shadow">
                <table className="table min-w-[900px] text-sm sm:text-base">
                    <thead className="bg-gray-100">
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Added On</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wishlist.map((item, index) => (
                            <tr key={item._id}>
                                <td className="font-semibold">{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.blogImage} alt={item.title} />
                                        </div>
                                    </div>
                                </td>
                                <td className="font-medium">{item.title}</td>
                                <td>{item.category}</td>
                                <td>
                                    {item.createdAt
                                        ? formatDistanceToNow(parseISO(item.createdAt), {
                                            addSuffix: true,
                                        })
                                        : "Just now"}
                                </td>
                                <td className="flex gap-2">
                                    <button
                                        onClick={() => handleDetails(item._id)}
                                        className="btn btn-sm bg-green-500 hover:bg-green-600 text-white"
                                    >
                                        Details
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden flex flex-col gap-4">
                {wishlist.map((item, index) => (
                    <div
                        key={item._id}
                        className="bg-white shadow rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                    >
                        <div className="w-full sm:w-20 flex-shrink-0">
                            <img
                                src={item.blogImage}
                                alt={item.title}
                                className="w-20 h-20 object-cover rounded-md"
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <span className="text-gray-600">{item.category}</span>
                            <span className="text-gray-400 text-sm">
                                {item.createdAt
                                    ? formatDistanceToNow(parseISO(item.createdAt), {
                                        addSuffix: true,
                                    })
                                    : "Just now"}
                            </span>
                        </div>
                        <div className="flex gap-2 mt-2 sm:mt-0">
                            <button
                                onClick={() => handleDetails(item._id)}
                                className="btn btn-sm bg-green-500 hover:bg-green-600 text-white"
                            >
                                Details
                            </button>
                            <button
                                onClick={() => handleDelete(item._id)}
                                className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;