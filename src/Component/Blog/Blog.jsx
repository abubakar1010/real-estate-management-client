import { useLoaderData } from "react-router-dom";
import DisplayBlog from "../DisplayBlog/DisplayBlog";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <Helmet>
        <title>Blogs | TraumHeim</title>
      </Helmet>
      <div>
        <div className=" relative mt-16 mb-9 h-[620px] w-full bg-[url(https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/imaalnjnizzd4lsxchjf/blog)] bg-cover bg-center bg-no-repeat flex justify-center items-center">
          <div className="  inset-0 bg-gradient-to-tr from-[#00000083] via-[#302f2f2b] to-[#2323233b] absolute"></div>
          <h1 className=" font-bold  text-7xl text-white">Our Blogs</h1>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 my-16 place-content-center">
          {data.map((element) => (
            <DisplayBlog key={element.id} element={element} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
