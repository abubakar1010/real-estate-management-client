
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Private/PrivateRoute";
import PropertyDetails from "../Component/PropertyDetails/PropertyDetails";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import Blog from "../Component/Blog/Blog";
import BlogDetails from "../Component/Banner/BlogDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "/",
            element:<Home />
        },
        {
            path: "/login",
            element:<Login />
        },
        {
            path: "/register",
            element:<Register />
        },
        {
            path: "/details/:id",
            element: <PrivateRoute>
              <PropertyDetails />
            </PrivateRoute>,
            loader: () => fetch('../../public/estate.json')
        },
        {
            path: "/blog",
            element: <PrivateRoute>
              <Blog />
            </PrivateRoute>,
            loader: () => fetch('../../public/blog.json')
        },
        {
          path: "/blogDetails/:id",
          element: <PrivateRoute>
            <BlogDetails />
          </PrivateRoute>,
          loader: () => fetch('../../public/blog.json')
      },
        {
            path: "/update",
            element: <PrivateRoute>
              <UpdateProfile />
            </PrivateRoute>,
        },
    ]
  },
]);

export default router;
