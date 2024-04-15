import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Spinner } from "@material-tailwind/react";


const RootLayout = () => {

    const {loading} = useContext(AuthContext)

    if (loading) {
        return <>
        <div className=" flex justify-center items-center h-screen">
        <Spinner className=" h-8 w-8" color="purple" />
        </div>
        </>
      }
    return (
        <div className="container mx-auto">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;