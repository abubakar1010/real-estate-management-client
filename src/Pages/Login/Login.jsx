import { Card, Input, Checkbox, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const Login = () => {
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
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
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
            <button className="mt-6 bg-gradient-to-l from-[#ff5d64ab] via-[#ff5d64ed] to-[#ff5d64a8] w-full py-3 rounded-lg font-bold text-white font-PlayFair text-xl">
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

            <div className=" flex gap-4 border-2 border-[#4c4a4aae] items-center py-3 rounded-full justify-center">
                <FcGoogle className=" text-3xl" />
                <p className=" text-lg font-medium text-[#151515ca]">Continue with Google</p>
            </div>
            <div className=" flex gap-4 border-2 border-[#4c4a4aae] items-center py-3 rounded-full justify-center mt-6">
                <FaGithub className=" text-3xl" />
                <p className=" text-lg font-medium text-[#151515ca]">Continue with 
                GitHub</p>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};

export default Login;
