import React, { useContext } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
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
            isActive? "flex items-center text-lg text-[#FF5D64] border py-1 px-4 border-[#FF5D64] rounded-lg hover:scale-95 hover:duration-300 duration-300 font-bold" : "flex items-center text-lg text-[#222121] hover:text-[#FF5D64] hover:text-xl hover:duration-300 duration-300 font-bold"
            
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <NavLink
          to={"/service"}
          className={ ({isActive}) => 
            isActive? "flex items-center text-lg text-[#FF5D64] border py-1 px-4 border-[#FF5D64] rounded-lg hover:scale-95 hover:duration-300 duration-300 font-bold" : "flex items-center text-lg text-[#222121] hover:text-[#FF5D64] hover:text-xl hover:duration-300 duration-300 font-bold"
            
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
            isActive? "flex items-center text-lg text-[#FF5D64] border py-1 px-4 border-[#FF5D64] rounded-lg hover:scale-95 hover:duration-300 duration-300 font-bold" : "flex items-center text-lg text-[#222121] hover:text-[#FF5D64] hover:text-xl hover:duration-300 duration-300 font-bold"
            
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
            isActive? "flex items-center text-lg text-[#FF5D64] border py-1 px-4 border-[#FF5D64] rounded-lg hover:scale-95 hover:duration-300 duration-300 font-bold" : "flex items-center text-lg text-[#222121] hover:text-[#FF5D64] hover:text-xl hover:duration-300 duration-300 font-bold"
            
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
            isActive? "flex items-center text-lg text-[#FF5D64] border py-1 px-4 border-[#FF5D64] rounded-lg hover:scale-95 hover:duration-300 duration-300 font-bold" : "flex items-center text-lg text-[#222121] hover:text-[#FF5D64] hover:text-xl hover:duration-300 duration-300 font-bold"
            
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
                className="mr-4 cursor-pointer py-1.5 font-bold text-3xl "
              >
                Traum<span className=" text-[#ff0000cf]">Heim</span>
              </Typography>
            </div>
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-x-8">
                {
                  user && <button onClick={handleLogout} className="hidden xl:inline-block bg-gradient-to-r from-[#ff0000] to-[#FF8938]  py-2 px-5 text-white font-bold rounded-md text-xl hover:scale-105 duration-500 hover:duration-500  ">
                  <span>Log Out</span>
                </button>
                }
                {userData || user ? (
                  <UserProfile />
                ) : (
                  <Link to={"/login"}>
                    <button className="hidden xl:inline-block bg-gradient-to-r from-[#ff0000] to-[#FF8938]  py-2 px-5 text-white font-bold rounded-md text-xl hover:scale-105 duration-500 hover:duration-500  ">
                      <span>Log In</span>
                    </button>
                  </Link>
                )}
              </div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent xl:hidden"
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
            <div className="flex items-center gap-x-7">
              
                  <button onClick={handleLogout} className=" hover:bg-gradient-to-r from-[#ff0000] to-[#FF8938]  py-2 px-5 hover:text-white font-bold rounded-md text-xl hover:scale-105 duration-500 hover:duration-500 w-full text-[#2e2d2d] border border-[#FF8938]  ">
                  <span>Log Out</span>
                </button>
                <Link to={"/login"} className=" w-full">
                    <button className="w-full bg-gradient-to-r from-[#ff0000] to-[#FF8938]  py-2 px-3 text-white font-bold rounded-md text-xl hover:scale-105 duration-500 hover:duration-500  ">
                      <span>Log In</span>
                    </button>
                  </Link>
            </div>
          </MobileNav>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
