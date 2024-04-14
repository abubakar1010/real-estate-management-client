import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,

} from "@material-tailwind/react";

import nIcon from "../../../assets/navIcon.png"
import { NavLink } from "react-router-dom";


const NavBar = () => {
    const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <NavLink to={"/"} className="flex items-center text-lg text-[#222121] hover:text-[#FF5D64] hover:text-xl hover:duration-300 duration-300 font-bold font-PlayFair  ">
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <NavLink to={"/service"} className="flex items-center text-lg text-[#222121] hover:text-[#FF5D64] hover:text-xl hover:duration-300 duration-300 font-bold font-PlayFair  ">
          Service
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <NavLink to={"/blog"} className="flex items-center text-lg text-[#222121] hover:text-[#FF5D64] hover:text-xl hover:duration-300 duration-300 font-bold font-PlayFair  ">
          Blog
        </NavLink>
      </Typography>
      
    </ul>
  );
 
    return (
        <>
             <div className=" max-h-[768px]">
      <Navbar className="sticky top-0 z-10 h-max max-w-full shadow-none rounded-none px-4 py-2 lg:px-8 lg:py-4 ">
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
            Traum<span className=" text-[#FF5D64]">Heim</span>
          </Typography>
          </div>
            <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Log In</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Sign in</span>
              </Button>
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