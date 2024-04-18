import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <>
            <div className=" flex justify-center items-center h-screen flex-col">

                <h1 className=" text-9xl font-bold mb-9">{error.status}</h1>
                <p className=" text-lg">{`Oops! The page you were looking for was either removed or doesn't exist.`}</p>
                <Link to={"/"}>
                <button className="mt-6 bg-gradient-to-r from-[#ff0000] to-[#FF8938] py-3 px-7 rounded-lg font-bold text-white text-xl">Return Home</button>
                </Link>

            </div>
        </>
    );
};

export default ErrorPage;