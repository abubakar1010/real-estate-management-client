import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";
// import { useContext } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import { Spinner } from "@material-tailwind/react";


const RootLayout = () => {

    return (
        <div className="container mx-auto">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;