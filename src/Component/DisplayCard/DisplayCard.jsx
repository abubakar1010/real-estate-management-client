import { FaStar } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { IoBedOutline, IoLocation } from "react-icons/io5";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { MdOutlineKitchen } from "react-icons/md";
import { LuBath } from "react-icons/lu";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DisplayCard = ({ element }) => {
  // console.log(element);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const {
    id,
    estate_title,
    image,
    location,
    price,
    status,
    rating,
    facilities,
    property_details,
  } = element;
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className=" flex justify-center items-center h-[510px] "
    >
      <div className=" shadow-xl border-2 border-[#0003] h-full rounded-xl">
        <div className=" ">
          <img
            src={image}
            alt=""
            className=" w-[540px] h-[240px] object-cover px-4 py-6"
          />
        </div>
        <div className=" px-4 pb-6">
          <div className=" flex items-center justify-between">
            <h1 className=" font-bold  text-xl ">{estate_title}</h1>
            <div className=" flex items-center gap-2">
              <FaStar className=" text-xl text-orange-500" />
              <p className=" font-medium text-lg ">{rating}</p>
            </div>
          </div>
        </div>
        <div className=" flex  items-center pb-4 px-4">
          <p className=" pr-2 text-[#000000de] ">{facilities[0]}</p>
          <p className=" border-2 border-[#000000a4] h-[16px]"></p>
          <p className="px-2 text-[#000000de] ">{facilities[1]}</p>
          <p className=" border-2 border-[#000000a4] h-[16px]"></p>
          <p className="pl-2 text-[#000000de] ">{facilities[2]}</p>
        </div>
        <div className="flex items-center gap-12 mb-4 px-4">
          <div className=" flex items-center gap-2">
            <IoBedOutline className=" text-2xl"></IoBedOutline>
            <p className=" text-xl font-medium ">{property_details.bedrooms}</p>
          </div>
          <div className=" flex items-center gap-2">
            <LuBath className=" text-2xl"></LuBath>
            <p className=" text-xl font-medium ">
              {property_details.bathrooms}
            </p>
          </div>
          <div className=" flex items-center gap-2">
            <MdOutlineKitchen className=" text-2xl"></MdOutlineKitchen>
            <p className=" text-xl font-medium ">{property_details.kitchen}</p>
          </div>
        </div>
        <div className=" flex justify-between px-4 pb-4">
          <p className=" font-bold  text-xl">For {status}</p>
          <div className=" flex items-center gap-1">
            <BiDollar className=" text-xl font-extrabold" />
            <p>{price}</p>
          </div>
        </div>

        <div className=" flex justify-between px-3 items-center pt-4 pb-7">
          <div className=" flex item-center gap-1">
            <IoLocation className=" text-2xl text-[#FF8938] " />
            <p>{location}</p>
          </div>
          <div>
            <NavLink to={`/details/${id}`}>
              <button className=" bg-gradient-to-r from-[#ff0000] to-[#FF8938]  py-2 px-4 text-white font-bold  rounded-md text-xl hover:scale-105 duration-500 hover:duration-500  ">
                View Property
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

DisplayCard.propTypes = {
  element: PropTypes.object,
};

export default DisplayCard;
