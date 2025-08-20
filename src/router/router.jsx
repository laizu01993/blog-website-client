import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/LogIn/LogIn";


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
        path: '/register',
        element:<Register></Register>
      },
      {
        path: '/login',
        element:<Login></Login>
      }
      // {
      //   path: "*",
      //   element: <NotFound></NotFound>
      // }


    ]
  },
]);

export default router;