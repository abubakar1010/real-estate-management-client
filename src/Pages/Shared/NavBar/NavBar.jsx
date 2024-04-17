import React, { useContext } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Spinner,
} from "@material-tailwind/react";

import nIcon from "../../../assets/navIcon.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import UserProfile from "../../../Component/UserProfile/UserProfile";

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const { user,logout, loading, setUserData, userData } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        // toast.success("You've successfully Logout.");
        setUserData(null)
      })
      .catch(() => {
      });
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography as="li" variant="small" className="p-1 font-normal">
        <NavLink
          to={"/"}
          className={ ({isActive}) => 
            isActive? "flex items-center text-lg text-[#FF5D64] border py-1 px-4 border-[#FF5D64] rounded-lg hover:scale-95 hover:duration-300 duration-300 font-bold font-PlayFair" : "flex items-center text-lg text-[#222121] hover:text-[#FF5D64] hover:text-xl hover:duration-300 duration-300 font-bold font-PlayFair"
            
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <NavLink
          to={"/service"}
          className={ ({isActive}) => 
            isActive? "flex items-center text-lg text-[#FF5D64] border py-1 px-4 border-[#FF5D64] rounded-lg hover:scale-95 hover:duration-300 duration-300 font-bold font-PlayFair" : "flex items-center text-lg text-[#222121] hover:text-[#FF5D64] hover:text-xl hover:duration-300 duration-300 font-bold font-PlayFair"
            
          }
        >
          Service
        </NavLink>
      </Typography>
      {
        user? "" : <Typography as="li" variant="small" className="p-1 font-normal">
        <NavLink
          to={"/contact"}
          className={ ({isActive}) => 
            isActive? "flex items-center text-lg text-[#FF5D64] border py-1 px-4 border-[#FF5D64] rounded-lg hover:scale-95 hover:duration-300 duration-300 font-bold font-PlayFair" : "flex items-center text-lg text-[#222121] hover:text-[#FF5D64] hover:text-xl hover:duration-300 duration-300 font-bold font-PlayFair"
            
          }
        >
          Contact Us
        </NavLink>
      </Typography>
      }
      {
        user && <Typography as="li" variant="small" className="p-1 font-normal">
        <NavLink
          to={"/blog"}
          className={ ({isActive}) => 
            isActive? "flex items-center text-lg text-[#FF5D64] border py-1 px-4 border-[#FF5D64] rounded-lg hover:scale-95 hover:duration-300 duration-300 font-bold font-PlayFair" : "flex items-center text-lg text-[#222121] hover:text-[#FF5D64] hover:text-xl hover:duration-300 duration-300 font-bold font-PlayFair"
            
          }
        >
          Blog
        </NavLink>
      </Typography>
      }
      {
        user && <Typography as="li" variant="small" className="p-1 font-normal">
        <NavLink
          to={"/update"}
          className={ ({isActive}) => 
            isActive? "flex items-center text-lg text-[#FF5D64] border py-1 px-4 border-[#FF5D64] rounded-lg hover:scale-95 hover:duration-300 duration-300 font-bold font-PlayFair" : "flex items-center text-lg text-[#222121] hover:text-[#FF5D64] hover:text-xl hover:duration-300 duration-300 font-bold font-PlayFair"
            
          }
        >
          Update Profile
        </NavLink>
      </Typography>
      }
    </ul>
  );

  if (loading) {
    return <div className=" flex justify-center items-center h-screen">
            <Spinner color="green" className=" w-14 h-14"></Spinner>
        </div>
  }

  return (
    <>
      <div className=" max-h-[768px]">
        <Navbar className="sticky top-0 z-10 h-max max-w-full shadow-none rounded-none py-2  lg:py-4 ">
          <div className="flex items-center justify-between text-blue-gray-900">
            <div className=" flex items-center gap-4">
              <div>
                <img src={nIcon} alt="" className=" w-16 h-16" />
              </div>
              <Typography
                as="a"
                href="#"
                className="mr-4 font-PlayFair cursor-pointer py-1.5 font-bold text-3xl "
              >
                Traum<span className=" text-[#ff0000cf]">Heim</span>
              </Typography>
            </div>
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-x-8">
                {
                  user && <button onClick={handleLogout} className="hidden lg:inline-block bg-gradient-to-r from-[#ff0000] to-[#FF8938]  py-2 px-5 text-white font-bold font-PlayFair rounded-md text-xl hover:scale-105 duration-500 hover:duration-500  ">
                  <span>Log Out</span>
                </button>
                }
                {userData || user ? (
                  <UserProfile />
                ) : (
                  <Link to={"/login"}>
                    <button className="hidden lg:inline-block bg-gradient-to-r from-[#ff0000] to-[#FF8938]  py-2 px-5 text-white font-bold font-PlayFair rounded-md text-xl hover:scale-105 duration-500 hover:duration-500  ">
                      <span>Log In</span>
                    </button>
                  </Link>
                )}
              </div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav}>
            {navList}
            <div className="flex items-center gap-x-1">
              <Button fullWidth variant="text" size="sm" className="">
                <span>Log In</span>
              </Button>
              <Button fullWidth variant="gradient" size="sm" className="">
                <span>Sign in</span>
              </Button>
            </div>
          </MobileNav>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
