import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/LogIn/LogIn";
import NotFound from "../pages/NotFound/NotFound";
import AddBlog from "../pages/AddBlog/AddBlog";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import Wishlist from "../pages/Wishlist/Wishlist";
import FeaturedBlogs from "../pages/FeaturedBlogs/FeaturedBlogs";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import UpdateBlog from "../pages/UpdateBlog/UpdateBlog";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addBlog',
        element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>
      },
      {
        path: '/allBlogs',
        element: <AllBlogs></AllBlogs>,
        loader: () => fetch('http://localhost:5000/blogs')
      },
      {
        path: '/wishlist',
        element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
      },
      {
        path: '/featuredBlogs',
        element: <FeaturedBlogs></FeaturedBlogs>
      },
      {
        path: '/blogs/:id',
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
      },
      {
        path: '/updateBlog/:id',
        element: <PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: "*",
        element: <NotFound></NotFound>
      }


    ]
  },
]);

export default router;