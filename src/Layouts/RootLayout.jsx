import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";


const RootLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;