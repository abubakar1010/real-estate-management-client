import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        new
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <div className=" bg-[url('https://i.postimg.cc/NF3pLz19/r-architecture-2g-Dwl-Iim3-Uw-unsplash.jpg')] w-full h-[520px] bg-cover bg-center bg-no-repeat my-8 rounded-xl relative ">
            <div className="absolute inset-0 grid h-full w-full  items-center bg-[#1d1d1d70] rounded-xl">
              <div className="text-white pl-56">
                <h1 className=" text-6xl font-extrabold font-PlayFair">Experience</h1>
                <p className=" text-lg uppercase font-medium mt-5 mb-3">
                  The New Standard Of Luxury
                </p>
                <p className="  font-PlayFair font-bold text-2xl">
                  With Every Purchase
                </p>
                <button className=" font-PlayFair bg-gradient-to-r from-[#ff0000] to-[#FF8938] mt-8 py-2 px-5 font-bold text-lg rounded-md ">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" bg-[url('https://dlajgvw9htjpb.cloudfront.net/cms/c60b43e3-96d9-447c-b364-47f8d14f0e76/65958/-1247076084590263335.jpg')] w-full h-[520px] bg-cover bg-center bg-no-repeat my-8 rounded-xl relative ">
            <div className="absolute inset-0 grid h-full w-full  items-center bg-[#1d1d1d70] rounded-xl">
              <div className="text-white pl-56">
                <h1 className=" text-6xl font-extrabold font-PlayFair">Luxury Condo</h1>
                <p className=" text-lg uppercase font-medium mt-5 mb-3">
                  Iconic Luxurious Collection
                </p>
                <p className=" tracking-wider font-PlayFair font-bold text-2xl">
                  Exclusively at TraumHeim
                </p>
                <button className=" font-PlayFair bg-gradient-to-r from-[#ff0000] to-[#FF8938] mt-8 py-2 px-5 font-bold text-lg rounded-md ">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" bg-[url('https://dlajgvw9htjpb.cloudfront.net/cms/c60b43e3-96d9-447c-b364-47f8d14f0e76/65966/757402811230810274.jpg')] w-full h-[520px] bg-cover bg-center bg-no-repeat my-8 rounded-xl relative ">
            <div className="absolute inset-0 grid h-full w-full  items-center bg-[#1d1d1d70] rounded-xl">
              <div className="text-white pl-56">
                <h1 className=" text-6xl font-extrabold">Cozy Cottage</h1>
                <p className=" text-lg uppercase font-medium mt-5 mb-3">
                  Experience Iconic Swiss Elegance
                </p>
                <p className=" font-PlayFair font-bold text-2xl tracking-wider">
                  Exclusively at TraumHeim
                </p>
                <button className=" font-PlayFair bg-gradient-to-r from-[#ff0000] to-[#FF8938] mt-8 py-2 px-5 font-bold text-lg rounded-md ">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;

