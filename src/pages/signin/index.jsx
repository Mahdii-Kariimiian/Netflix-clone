// index.jsx
import { useState } from "react";
import background from "../../assets/hero-background.jpg";
import Footer from "../../components/Footer";
import InputWithoutButton from "../../components/commons/InputWithoutButton";
import NetflixLogo from "../../assets/netflix-logo.png";
import CheckBox from "../../components/cubes/CheckBox";

const Index = () => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div>
            <div
                className="flex flex-col items-center justify-start text-center text-white bg-center py-0 p-5 bg-no-repeat relative"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                }}
            >

                <div className="w-full z-10 self-start lg:px-[175px] py-5">
                    <img
                        className=" md:w-[150px] w-[100px]"
                        src={NetflixLogo}
                        alt="Logo"
                    />
                </div>

                <div className="max-w-[450px] bg-black bg-opacity-70 backdrop-filter backdrop-opacity-70 z-10 p-14 rounded-t-md rounded-r-md flex flex-col">

                    <h1 className="font-roboto-bold text-4xl text-start mb-4">
                        Sign in
                    </h1>

                    <form className="relative flex flex-col  gap-3" >
                        <InputWithoutButton label="Email or mobile number" />
                        <InputWithoutButton label="Password" />

                        <button className="button transition-color ease-in duration-200 hover:bg-red-700 h-[50px] text-white p-2 rounded ">
                            Sign in
                        </button>

                        <p>OR</p>

                        <button className="transition-color ease-in duration-200 hover:backdrop-opacity-50 hover:backdrop-filter h-[50px] backdrop-filter backdrop-opacity-10 bg-opacity-25 hover:bg-opacity-20 bg-white text-white p-2 rounded">
                            Use a Sign-in Code
                        </button>

                    </form>

                    <p className="mt-4 font-bold cursor-pointer hover:underline hover:text-gray-500 self-center">Forgot password?</p>

                    <div className="flex flex-col items-start text-start mt-2 ">
                        <CheckBox
                            isChecked={isChecked}
                            setIsChecked={setIsChecked}
                        >
                            Remember me
                        </CheckBox>

                        <p className="mt-4">
                            New to Netflix?{" "}
                            <span className="cursor-pointer">Sign up now</span>
                        </p>

                        <p className="mt-4 text-sm">
                            This page is protected by Google reCAPTCHA to ensure
                            you're not a bot.{" "}
                            <span className="text-blue-600 cursor-pointer">
                                Learn more
                            </span>
                        </p>
                    </div>
                </div>

                <div className="bg-black opacity-50 absolute inset-0 z-0"></div>
            </div>
            <Footer />
        </div>
    );
};

export default Index;
