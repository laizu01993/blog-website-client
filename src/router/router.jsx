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
        element: <AddBlog></AddBlog>
      },
      {
        path: '/allBlogs',
        element: <AllBlogs></AllBlogs>,
        loader: () =>fetch('http://localhost:5000/blogs')
      },
      {
        path: '/wishlist',
        element: <Wishlist></Wishlist>
      },
      {
        path: '/featuredBlogs',
        element: <FeaturedBlogs></FeaturedBlogs>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: "*",
        element: <NotFound></NotFound>
      }


    ]
  },
]);

export default router;