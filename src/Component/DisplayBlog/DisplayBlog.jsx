import PropTypes from "prop-types"
import { FaEye } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const DisplayBlog = ({element}) => {

    const {id, image, heading, author, published_date, view, content} = element

    return (
        <>
            <div className="  w-full ">
      <div className=" w-full">
        <div className=" w-full ">
          <img
            src={image}
            alt=""
            className=" h-[340px] w-full object-cover"
          />
         
        </div>

         <div className=" min-h-[70px] mt-9 mb-4">
         <h1 className="  text-2xl font-bold font-PlayFair">{heading}</h1>
         </div>

         <p className="border-[2px] my-4 w-96 "></p>

         <div className=" flex items-center justify-between">
         <div className=" flex items-center ">
            <p className=" border-r-4 border-[#8f8e8e] pr-3 text-xl font-bold font-PlayFair text-[#3f3c3c]">{author}</p>
            <p className="text-xl font-bold font-sans pl-3 text-[#3f3c3c]">{published_date}</p>
         </div>
         <div className=" flex items-center gap-3 text-xl text-[#3f3c3c]">
         <FaEye />
         <p>{view}</p>
         </div>
         </div>
                
                <div>

                    <p className=" mt-12">{content[0].text.slice(0, 127)} ....</p>

                </div>

        <div className="pt-14 pb-7 text-right">
        <NavLink to={`/blogDetails/${id}`}>
        <button className=" bg-gradient-to-r from-[#ff0000] to-[#FF8938]  py-2 px-4 text-white font-bold font-PlayFair rounded-md text-xl hover:scale-105 duration-500 hover:duration-500  ">
            Read More
        </button>
        </NavLink>

        </div>
      </div>
    </div>
        </>
    );
};

DisplayBlog.propTypes = {

    element: PropTypes.object
}

export default DisplayBlog;