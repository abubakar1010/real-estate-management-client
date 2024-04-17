
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Private/PrivateRoute";
import PropertyDetails from "../Component/PropertyDetails/PropertyDetails";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
            path: "/update",
            element: <PrivateRoute>
              <UpdateProfile />
            </PrivateRoute>,
        },
    ]
  },
]);

export default router;
