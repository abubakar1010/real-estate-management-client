import { Card, Input, Checkbox, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {

  const {login, googleLogin, githubLogin} = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogin = (e) => {

    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    login(email,password)
    .then( () => {
      toast.success("Congratulations! You've successfully Logged In.")
      navigate("/")

    })
    .catch( () => {
      toast.error("Oops! Login failed. Please check your information and try again.")
    })
  }

  const handleGoogleLogin = () => {

    googleLogin()
    .then(() => {
      // console.log(result);
      navigate("/")
    })
    .catch( () => {
      toast.error("Oops! Login failed. Please check your information and try again.")
    })
  }
  const handleGithubLogin = () => {

    githubLogin()
    .then(() => {
      // console.log(result);
      navigate("/")
    })
    .catch( () => {
      toast.error("Oops! Login failed. Please check your information and try again.")
    })
  }
  return (
    <>
      <div className=" flex justify-center items-center my-16">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign In
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to Login.
          </Typography>
          <form onSubmit={handleLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
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
            <button type="submit" className="mt-6 bg-gradient-to-l from-[#ff5d64ab] via-[#ff5d64ed] to-[#ff5d64a8] w-full py-3 rounded-lg font-bold text-white font-PlayFair text-xl">
              sign In
            </button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              {`Don't have an account`}?{" "}
              <Link
                to={"/register"}
                className="font-medium text-[#ff5d64ed] hover:underline"
              >
                Create an account
              </Link>
            </Typography>
            <div className="inline-flex items-center justify-center w-full mt-2">
              <hr className="w-full h-px my-8 bg-[#AAAAAA] border-0 " />
              <span className="absolute px-3 font-medium text-xl -translate-x-1/2 bg-white left-1/2 ">
                or
              </span>
            </div>

            <div onClick={handleGoogleLogin} className=" flex gap-4 border-2 border-[#4c4a4aae] items-center py-3 rounded-full justify-center cursor-pointer">
                <FcGoogle className=" text-3xl" />
                <p className=" text-lg font-medium text-[#151515ca]">Continue with Google</p>
            </div>
            <div onClick={handleGithubLogin} className=" cursor-pointer flex gap-4 border-2 border-[#4c4a4aae] items-center py-3 rounded-full justify-center mt-6">
                <FaGithub className=" text-3xl" />
                <p className=" text-lg font-medium text-[#151515ca]">Continue with 
                GitHub</p>
            </div>
          </form>
        </Card>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default Login;
