import PropTypes from "prop-types";
import PropertyMap from "../PropertyMap/PropertyMap";
import { IoBed, IoBedOutline } from "react-icons/io5";
import { FaBath } from "react-icons/fa6";
import { MdOutlineKitchen } from "react-icons/md";
import { useState } from "react";
import { TbBath } from "react-icons/tb";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { PiIntersectSquareLight } from "react-icons/pi";
const DisplayPropertyDetails = ({ element }) => {
  const {
    id,
    image,
    estate_title,
    description,
    facilities,
    area,
    location,
    price,
    price_per_day,
    property_details,
    rating,
    segment_name,
    status,
    position,
    living_area
  } = element;

  const [view, setView] = useState(false)

  const handelFacilities = () => {

    setView(!view)
  }

  console.log(element);
  return (
    <>
      <div className=" my-12">
        <div>
          <div className={`w-full h-[470px] relative `}>
            <img src={image} alt="" className=" object-cover h-full w-full" />
            <p className=" text-xl font-bold font-PlayFair bg-gradient-to-r from-[#ff0000] to-[#FF8938] text-white inline-block py-3 px-6 absolute top-6 right-6 rounded-sm ">
              For {status}
            </p>
          </div>

          <section className=" flex gap-6 justify-between my-16">
            <div>
              <h1 className=" font-PlayFair font-bold text-3xl">
                {estate_title}
              </h1>
              <p className=" font-PlayFair text-lg mt-4 ">{description}</p>

              <div className=" flex gap-16 mt-16 mb-6">

                <div>
                    <IoBedOutline className=" text-4xl"></IoBedOutline>
                    <p className=" text-xl uppercase font-medium mt-2 leading-relaxed font-PlayFair">{property_details.bedrooms} Beds</p>
                </div>
                <div>
                    <TbBath className=" text-4xl"></TbBath>
                    <p className=" text-xl uppercase font-medium mt-2 leading-relaxed font-PlayFair">{property_details.bathrooms} Baths</p>
                </div>
                <div>
                    <MdOutlineKitchen className=" text-4xl"></MdOutlineKitchen>
                    <p className=" text-xl uppercase font-medium mt-2 leading-relaxed font-PlayFair">{property_details.kitchen} Kitchen</p>
                </div>
                <div>
                <HiOutlineArrowTopRightOnSquare className=" text-4xl" />
                    <p className=" text-xl uppercase font-medium mt-2 leading-relaxed font-PlayFair">{living_area} Living Area</p>
                </div>
                <div>
                <PiIntersectSquareLight className=" text-4xl" />
                    <p className=" text-xl uppercase font-medium mt-2 leading-relaxed font-PlayFair">{area} Lot</p>
                </div>
              </div>

              <div className=" my-4 relative">
                <h1 className=" text-xl font-bold  pb-3">Property Features</h1>
                {
                    view? facilities.map( (element,index) => <li className=" text-lg font-medium font-PlayFair" key={index}>{element}</li>) : facilities.slice(0, 6).map( (element,index) => <li className=" text-lg font-medium font-PlayFair" key={index}>{element}</li>)
                }
                <p onClick={handelFacilities} className=" absolute -bottom-7 left-2 cursor-pointer">{ view? "See Less..." : "...See More"}</p>
              </div>
            </div>
            <div>
              <PropertyMap position={position} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

DisplayPropertyDetails.propTypes = {
  element: PropTypes.object,
};

export default DisplayPropertyDetails;
