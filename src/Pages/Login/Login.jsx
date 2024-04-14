import {
    Card,
    Input,
    Checkbox,
    Typography,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";


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
        <button className="mt-6 bg-gradient-to-l from-[#ff5d64ab] via-[#ff5d64ed] to-[#ff5d64a8] w-full py-3 rounded-lg font-bold text-white font-PlayFair text-xl" >
          sign In
        </button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          {`Don't have an account`}?{" "}
          <Link to={"/register"} className="font-medium text-gray-900">
            Sign Up
          </Link>
        </Typography>
      </form>
    </Card>
            </div>
        </>
    );
};

export default Login;