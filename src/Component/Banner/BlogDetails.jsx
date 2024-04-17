
import { FaComment, FaEye, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {
  const paramId = useParams();
  const data = useLoaderData();

  const filteredData = data.filter((element) => element.id == paramId.id);

  const { image, heading, author, published_date, content, view, comment } =
    filteredData[0];

  console.log(filteredData);
  return (
    <>
      <div
        className="relative mt-16 mb-9 h-[620px] w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center object-cover"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* <div className="  inset-0 bg-gradient-to-tr from-[#00000049] via-[#302f2f2b] to-[#2323233b] absolute"></div> */}
       
      </div>
      <div className=" min-h-[70px] mt-9 mb-4">
            <h1 className="  text-2xl font-bold font-PlayFair">{heading}</h1>
          </div>

          <p className="border-[2px] my-4 w-96 "></p>

          <div className=" flex flex-col md:flex-row md:items-center">
            <div className=" flex items-center pr-7 ">
              <p className=" border-r-4 border-[#8f8e8e] pr-7 text-xl font-bold font-PlayFair text-[#3f3c3c]">
                {author}
              </p>
              <p className="text-xl font-bold font-sans pl-7 text-[#3f3c3c]">
                {published_date}
              </p>
            </div>
            <div className=" flex mt-6 items-center md:mt-0">
            <div className=" md:border-x-4 border-[#8f8e8e] flex items-center gap-3 text-xl text-[#3f3c3c] border-r-4 pr-7 md:px-7">
              <FaEye />
              <p>{view}</p>
            </div>
            <div className=" flex items-center gap-3 text-xl pl-7 text-[#3f3c3c]">
              <FaComment />
              <p>{comment}</p>
            </div>
            </div>
          </div>

      <div className="">
        {content.map((element) => (
          <>
          <div className=" my-16">
            <h1 className=" font-medium font-PlayFair text-3xl mb-6">{element.title}</h1>
            <p>{element.text}</p>
          </div>
          </>
        ))}
      </div>

      <div className=" grid grid-cols-2 xl:flex items-center gap-6">
        <div className=" flex items-center border border-[#3b5999] text-[#3b5999] hover:bg-[#3b5999] hover:text-white text-xl duration-700 hover:duration-700 gap-2 py-2 px-7 rounded-md">
            <GrFacebookOption />
            <p>Share</p>
        </div>
        <div className=" flex items-center border border-[#042d49] text-[#042d49] hover:bg-[#042d49] hover:text-white text-xl duration-700 hover:duration-700 gap-2 py-2 px-7 rounded-md ">
        <FaXTwitter />
            <p>Tweet</p>
        </div>
        <div className=" flex items-center border border-[#CE332A] text-[#CE332A] hover:bg-[#CE332A] hover:text-white text-xl duration-700 hover:duration-700 gap-2 py-2 px-7 rounded-md">
            <FaGooglePlusG />
            <p>Share</p>
        </div>
        <div className=" flex items-center border border-[#1260A2] text-[#1260A2] hover:bg-[#1260A2] hover:text-white text-xl duration-700 hover:duration-700 gap-2 py-2 px-7 rounded-md">
            <FaLinkedinIn />
            <p>Share</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
