import PropTypes from "prop-types";
import PropertyMap from "../PropertyMap/PropertyMap";
import "./slide.css";
import { IoBedOutline, IoHomeOutline, IoLocation } from "react-icons/io5";
import { FaPersonRunning, FaUmbrellaBeach, FaUser } from "react-icons/fa6";
import { MdOutlineKitchen, MdOutlinePool } from "react-icons/md";
import { useContext, useState } from "react";
import { TbBath } from "react-icons/tb";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { PiIntersectSquareLight } from "react-icons/pi";
import { IoMdCheckboxOutline } from "react-icons/io";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import moment from "moment";
import { Option, Select } from "@material-tailwind/react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";

const DisplayPropertyDetails = ({ element }) => {
  const {
    image,
    estate_title,
    facilities,
    area,
    location,
    price,
    property_details,
    status,
    position,
    living_area,
    city,
  } = element;

  const [view, setView] = useState(false);
  const { user } = useContext(AuthContext);

  const handelFacilities = () => {
    setView(!view);
  };

  console.log(element);
  return (
    <>
      <div className=" my-12">
        <div>
          <div className={`w-full h-[470px] `}>
            <img src={image} alt="" className=" object-cover h-full w-full" />
          </div>

          <div className=" mt-7 border-b border-[#64626265] pb-6">
            <p className=" text-xl font-bold  bg-gradient-to-r from-[#ff0000] to-[#FF8938] text-white inline-block py-3 px-6  top-6 right-6 rounded-sm mb-2 ">
              For {status}
            </p>
            <p className=" text-lg font-medium ">
              1461 Obere Zifen, {city}
            </p>
            <div className=" flex item-center gap-1 mt-2">
              <IoLocation className=" text-2xl text-[#FF8938] " />
              <p>{location}</p>
            </div>
          </div>
          <div className=" flex items-center gap-1 mt-4">
          <BiDollar className=" text-3xl text-[#141414c6]" />
          <p className=" text-3xl font-bold font-serif text-[#141414c6]">{price}</p>
          </div>

          <section className="  mb-16 mt-12">
            <div>
              <h1 className="  font-bold text-3xl">
                {estate_title}
              </h1>
              <p className="  text-lg mt-4 ">
                Welcome to this unparalleled {estate_title} from the Ritz and
                LakeClub, offering expansive lake views, recently-added
                resort-style infinity pool and deck, 4-car garage with golf
                lockers, extra large suites including a spacious apartment,{" "}
                {property_details.kitchen} kitchens, elevator. Crafted by
                premiere builder Rick Buechler and renovated by Black Sheep &
                Alicia Mooney Interiors, superb craftsmanship is evident
                throughout the home.The open floorplan and large gathering rooms
                create the ideal entertainment spaces. Large great room, dining
                room with barrel ceiling, butlers pantry, expansive gourmet
                kitchen with top-of-the-line appliances that include Wolf double
                oven and range with griddle, warming drawers, 2 full Subzero
                refrigerator and freezers, 2 gourmet dishwashers, farmers
                stainless steel sink, large center island, beverage bar with
                custom cabinetry. Adjacent to kitchen is a family and keeping
                room with spectacular views of the lake. Butlers pantry offers
                custom glass cabinetry. The expansive all season-lake porch with
                heated floors offer unobstructed water views.The luxurious
                master suite has built-in headboard, electronic shades, drop
                down projector and spa master bath with 10-body spray remote
                control shower and top-of-the-line jacuzzi. Large built-in
                closets complement the master suite.
              </p>

              <div className=" grid place-content-center md:grid-cols-2 xl:flex gap-6 justify-center my-12">
                <div className=" border px-4 py-8 shadow-sm w-72 inline-block ">
                  <IoHomeOutline className=" text-5xl mb-6" />
                  <h1 className=" text-xl font-bold  mb-2">
                    Residential
                  </h1>
                  <p className="  text-lg">Property Type</p>
                </div>
                <div className=" border px-4 py-8 shadow-sm w-72 inline-block ">
                  <MdOutlinePool className=" text-5xl mb-6" />
                  <h1 className=" text-xl font-bold  mb-2">
                    Pool - Private
                  </h1>
                  <p className="  text-lg">Amenity</p>
                </div>
                <div className=" border px-4 py-8 shadow-sm w-72 inline-block ">
                  <FaPersonRunning className=" text-5xl mb-6" />
                  <h1 className=" text-xl font-bold  mb-2">
                    Beach Access
                  </h1>
                  <p className="  text-lg">Proximity</p>
                </div>
                <div className=" border px-4 py-8 shadow-sm w-72 inline-block ">
                  <FaUmbrellaBeach className=" text-5xl mb-6" />
                  <h1 className=" text-xl font-bold  mb-2">
                    Ocean View
                  </h1>
                  <p className="  text-lg">View</p>
                </div>
              </div>

              <h1 className=" text-2xl font-bold  mt-16  mx-16">
                Property Details:
              </h1>
              <div className=" grid place-content-center grid-cols-2 md:grid-cols-3 xl:flex gap-16 mt-12 mb-16 mx-16 justify-between">
                <div>
                  <IoBedOutline className=" text-4xl"></IoBedOutline>
                  <p className=" text-lg uppercase font-medium mt-2 leading-relaxed ">
                    {property_details.bedrooms} Beds
                  </p>
                </div>
                <div>
                  <TbBath className=" text-4xl"></TbBath>
                  <p className=" text-lg uppercase font-medium mt-2 leading-relaxed ">
                    {property_details.bathrooms} Baths
                  </p>
                </div>
                <div>
                  <MdOutlineKitchen className=" text-4xl"></MdOutlineKitchen>
                  <p className=" text-lg uppercase font-medium mt-2 leading-relaxed ">
                    {property_details.kitchen} Kitchen
                  </p>
                </div>
                <div>
                  <HiOutlineArrowTopRightOnSquare className=" text-4xl" />
                  <p className=" text-lg uppercase font-medium mt-2 leading-relaxed ">
                    {living_area} Living Area
                  </p>
                </div>
                <div>
                  <PiIntersectSquareLight className=" text-4xl" />
                  <p className=" text-lg uppercase font-medium mt-2 leading-relaxed ">
                    {area} Lot
                  </p>
                </div>
              </div>

              <div className=" flex flex-col xl:flex-row gap-6 justify-between my-24">
                <div className="  relative w-full">
                  <h1 className=" text-xl font-bold mb-12">Key Features</h1>
                  <div className=" grid grid-cols-3 place-content-center">
                    {view
                      ? facilities.map((element, index) => (
                          <>
                            <div className=" flex gap-2 items-center mb-7 ">
                              <IoMdCheckboxOutline className=" text-xl text-[#FF8938] " />
                              <p
                                className=" text-lg font-medium "
                                key={index}
                              >
                                {element}
                              </p>
                            </div>
                          </>
                        ))
                      : facilities.slice(0, 12).map((element, index) => (
                          <>
                            <div className=" flex gap-2 items-center mb-7 ">
                              <IoMdCheckboxOutline className=" text-xl text-[#FF8938] " />
                              <p
                                className=" text-lg font-medium "
                                key={index}
                              >
                                {element}
                              </p>
                            </div>
                          </>
                        ))}
                  </div>
                  <p
                    onClick={handelFacilities}
                    className=" absolute left-2 cursor-pointer"
                  >
                    {view ? "See Less..." : "...See More"}
                  </p>
                </div>

                <div className=" shadow-xl px-8 py-6 border border-[#00000086]  h-[430px] mt-20 xl:mt-0 ">
                  <div className=" xl:w-[320px]">
                    <div className=" flex items-center gap-6">
                      <div>
                      <img
                
                className="cursor-pointer max-w-[80px] rounded-full w-14 h-14  object-cover"
                src={user?.photoURL}
              />
                      </div>
                      <div>
                        <p className=" font-bold  text-xl">
                          {user?.displayName}
                        </p>
                        <p className=" font-medium text-lg  ">
                          {user?.email}
                        </p>
                      </div>
                    </div>
                    <div className=" mt-12 mb-7">
                      <input
                        type="text"
                        placeholder="Your Name"
                        name=""
                        id=""
                        className=" border-2 rounded-md mb-4 py-2
                   border-[#2a2929a1] w-full px-6"
                      />
                      <input
                        type="text"
                        placeholder="Your Phone"
                        name=""
                        id=""
                        className=" border-2 rounded-md mb-2
                   border-[#2a2929a1] mt-4 py-2 w-full px-6"
                      />
                    </div>

                    <p className="  font-medium">{`I'm interested in this property and I'd like to know more details.`}</p>
                    <button className="mt-6 bg-gradient-to-r from-[#ff0000] to-[#FF8938] w-full py-3 rounded-lg font-bold text-white  text-xl">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
              <div className=" hidden lg:hidden xl:inline-block md:inline-block ">
              <div className=" flex flex-col xl:flex-row gap-6 ">
                <div className=" md:hidden w-[740px] mb-12 lg:mb-0  ">
                  <img src={image} alt="" className="w-full xl:max-w-[670px] h-full object-cover" />
                </div>
                <div className=" w-full ">
                  <div>
                    <h1 className=" text-4xl font-medium ">
                      Schedule a Showing
                    </h1>
                    <p className=" text-lg  mt-6">
                      I would love to show you our beautiful property. Please
                      select your preferred date and time below. I will be in
                      touch shortly to confirm your appointment.
                    </p>
                  </div>
                  <div className=" my-14 ">
                    <Swiper
                      spaceBetween={10}
                      // centeredSlides={true}
                      slidesPerView={3}
                      autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                      }}
                      navigation={true}
                      new
                      modules={[Autoplay, Navigation]}
                      className="slide"
                    >
                      <SwiperSlide>
                        <div className=" border-2 border-[#00000047] inline-block py-6   px-16 rounded-sm text-center">
                          <p className=" font-medium text-lg  ">
                            {moment().add(0, "days").format("ddd")}
                          </p>
                          <p className=" font-medium text-4xl mb-2 mt-4 text-[#181818bd]">
                            {moment().add(0, "days").format("D")}
                          </p>
                          <p className=" font-medium text-xl  text-[#181818bd]">
                            {moment().format("MMM")}
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className=" border-2 border-[#00000047] inline-block py-6   px-16 rounded-sm text-center">
                          <p className=" font-medium text-lg  ">
                            {moment().add(1, "days").format("ddd")}
                          </p>
                          <p className=" font-medium text-4xl mb-2 mt-4 text-[#181818bd]">
                            {moment().add(1, "days").format("D")}
                          </p>
                          <p className=" font-medium text-xl  text-[#181818bd]">
                            {moment().format("MMM")}
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className=" border-2 border-[#00000047] inline-block py-6   px-16 rounded-sm text-center">
                          <p className=" font-medium text-lg  ">
                            {moment().add(2, "days").format("ddd")}
                          </p>
                          <p className=" font-medium text-4xl mb-2 mt-4 text-[#181818bd]">
                            {moment().add(2, "days").format("D")}
                          </p>
                          <p className=" font-medium text-xl  text-[#181818bd]">
                            {moment().format("MMM")}
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className=" border-2 border-[#00000047] inline-block py-6   px-16 rounded-sm text-center">
                          <p className=" font-medium text-lg  ">
                            {moment().add(3, "days").format("ddd")}
                          </p>
                          <p className=" font-medium text-4xl mb-2 mt-4 text-[#181818bd]">
                            {moment().add(3, "days").format("D")}
                          </p>
                          <p className=" font-medium text-xl  text-[#181818bd]">
                            {moment().format("MMM")}
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className=" border-2 border-[#00000047] inline-block py-6   px-16 rounded-sm text-center">
                          <p className=" font-medium text-lg  ">
                            {moment().add(4, "days").format("ddd")}
                          </p>
                          <p className=" font-medium text-4xl mb-2 mt-4 text-[#181818bd]">
                            {moment().add(4, "days").format("D")}
                          </p>
                          <p className=" font-medium text-xl  text-[#181818bd]">
                            {moment().format("MMM")}
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className=" border-2 border-[#00000047] inline-block py-6   px-16 rounded-sm text-center">
                          <p className=" font-medium text-lg  ">
                            {moment().add(5, "days").format("ddd")}
                          </p>
                          <p className=" font-medium text-4xl mb-2 mt-4 text-[#181818bd]">
                            {moment().add(5, "days").format("D")}
                          </p>
                          <p className=" font-medium text-xl  text-[#181818bd]">
                            {moment().format("MMM")}
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className=" border-2 border-[#00000047] inline-block py-6   px-16 rounded-sm text-center">
                          <p className=" font-medium text-lg  ">
                            {moment().add(6, "days").format("ddd")}
                          </p>
                          <p className=" font-medium text-4xl mb-2 mt-4 text-[#181818bd]">
                            {moment().add(6, "days").format("D")}
                          </p>
                          <p className=" font-medium text-xl  text-[#181818bd]">
                            {moment().format("MMM")}
                          </p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className=" my-6">
                    <Select variant="standard" label="Choose a time" className="">
                      <Option>9:00 AM</Option>
                      <Option>10:00 Am</Option>
                      <Option>11:00 Am</Option>
                      <Option>12:00 Am</Option>
                      <Option>1:00 PM</Option>
                      <Option>2:00 PM</Option>
                      <Option>3:00 PM</Option>
                      <Option>4:00 PM</Option>
                    </Select>
                  </div>
                  <div className=" flex items-center gap-12 my-9">

                    <div className=" flex items-center gap-4 border-2 py-2 px-16 hover:bg-[#042D49] hover:text-white border-[#042D49] rounded-sm duration-700 cursor-pointer  hover:duration-500">
                    <FaUser className=" text-2xl" />
                      <p>IN PERSON</p>
                    </div>
                    <div className=" flex items-center gap-4 border-2 py-2 px-16 hover:bg-[#042D49] hover:text-white border-[#042D49] rounded-sm duration-700 cursor-pointer  hover:duration-500">
                    <BsFillCameraVideoFill className=" text-2xl" />
                      <p>VIA VIDEO CHAT</p>
                    </div>

                  </div>
                  <button className=" border-2 py-2 px-24 hover:bg-[#042D49] hover:text-white border-[#042D49] rounded-sm duration-700 cursor-pointer  hover:duration-500 w-full">NEXT</button>
                </div>
              </div>
              </div>
            </div>
            <div className=" mb-12 mt-48">
              <PropertyMap position={position} location={location} />
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
