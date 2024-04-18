import { Avatar } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";
import auth from "../../firebase/firebase.init";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const [updatedProfile, setUpdatedProfile] = useState(null);

  const handleUpdate = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    // console.log(name, email, photo, password, conform);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        toast("Congratulations! Your Profile Updated successfully.");
        setUpdatedProfile(user);
      })
      .catch((error) => {
        toast(
          "Oops! Profile Update failed. Please check your information and try again."
        );
        console.error("Error updating profile:", error);
      });
  };
  return (
    <>
      <Helmet>
        <title>Update Profile | TraumHeim</title>
      </Helmet>
      <div className=" my-28 lg:flex gap-16 ">
        <div className=" shadow-xl lg:flex justify-center lg:w-[720px] border border-[#29282859] rounded-sm py-8 mb-28 lg:mb-auto">
          <div>
            <div className=" text-center mb-7">
              <Avatar
                size="xl"
                src={updatedProfile?.photoURL || user?.photoURL}
                alt="avatar"
                withBorder={true}
                className="p-0.5"
              />
              <p className=" mt-4 mb-1">
                {updateProfile?.displayName || user?.displayName}
              </p>
              <p>{user?.email}</p>
            </div>
            <div className=" text-center">
              <h1 className=" font-bold text-xl">About Me</h1>
              <p className=" text-justify px-12 mt-4">
                {`A passionate Python Developer with a focus on Machine Learning (ML) and Artificial Intelligence (AI). Equipped with a deep understanding of Python's versatility, I specialize in leveraging ML and AI algorithms to unlock insights, automate processes, and build intelligent systems. From developing predictive models to implementing neural networks, I am passionate about harnessing the power of data to drive innovation and create real-world impact.`}
              </p>
            </div>
          </div>
        </div>
        <div className="shadow-xl flex justify-center w-full border border-[#29282859] rounded-sm pt-8">
          <form onSubmit={handleUpdate} className="w-full px-8 mb-7 lg:mb-2">
            <h1 className=" font-bold text-xl mb-6">Update Your Profile:</h1>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="photo"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Photo URL
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="password"
                id="password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Password
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="update"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Confirm password
              </label>
            </div>

            <div className=" ">
              <button
                type="submit"
                className="mt-6 bg-gradient-to-r from-[#ff0000] to-[#FF8938] px-12  py-3 rounded-lg font-bold text-white text-xl "
              >
                Update
              </button>
              <button
                type="reset"
                className="mt-6 hover:bg-gradient-to-r bg-white from-[#ff0000] to-[#FF8938] px-12 py-3 rounded-lg font-bold hover:text-white text-xl border border-[#FF8938] ml-7 duration-700 hover:duration-700 hover:delay-300 "
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default UpdateProfile;
