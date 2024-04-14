import {
    Card,
    Input,
    Checkbox,

    Typography,
    Spinner,
  } from "@material-tailwind/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.init";

const Register = () => {

  const {register,loading} = useContext(AuthContext)

  console.log(register);
  
  const handleSubmit = (e) => {

    e.preventDefault()
    
    const name = e.target.name.value
    const photo = e.target.photo.value
    const email = e.target.email.value
    const password = e.target.password.value

    register(email,password)
    .then( () => {
      // update user profile 
      // updateProfile( auth.currentUser, {
      //   displayName: `${name}`,
      //   photoURL: `${photo}`
      // })
      // .then( () => {
      //   toast.success("Congratulations! You've successfully registered.")
        
      // })
      // .catch()
    })
    .catch( () => {

      toast.error(`Oops! Registration failed. Please check your information and try again.`)
      // console.log(error);

    })

  }

  if (loading) {
    return <>

    <div className=" flex items-center justify-center h-screen">
    <Spinner className=" w-8 h-8" color="purple" />
    </div>
    
    </>
  }

  console.log(auth.currentUser);

    return (
        <>
            <div className="flex justify-center items-center my-16">
            <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="name"
            name="name"
            type="text"
            required
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Photo URL
          </Typography>
          <Input
            size="lg"
            placeholder="Photo URL"
            name="photo"
            required
            type="text"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            type="email"
            name="email"
            required
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            name="password"
            required
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <button type="submit" className="mt-6 bg-gradient-to-l from-[#ff5d64ab] via-[#ff5d64ed] to-[#ff5d64a8] w-full py-3 rounded-lg font-bold text-white font-PlayFair text-xl" >
          sign up
        </button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to={"/login"} className="font-medium text-[#ff5d64ed] hover:underline ">
            Sign In
          </Link>
        </Typography>
      </form>
    </Card>
            </div>
            <ToastContainer autoClose={3000} />
        </>
    );
};

export default Register;