import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useState } from "react";
import Footer from "../../components/Footer";
import CheckBox from "../../components/cubes/CheckBox";
import NetflixLogo from "../../assets/netflix-logo.png";
import background from "../../assets/hero-background.jpg";
import UseClickOutside from "../../hooks/useClickOutside";

const Index = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const form = useForm();
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;

    // Submit form
    const onSubmit = (data) => {
        console.log("submitted", data);
    };

    // handle click outside by custom hook
    const isClickOutside = UseClickOutside(() => {
        setIsFocused(false);
        setIsValid(false);
        setIsEmail(false);
    });

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

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        className="relative flex flex-col gap-3"
                    >
                        <div
                            ref={isClickOutside}
                            className={`p-5 pb-2 flex-1 border rounded-md bg-black opacity-50 min-w-[235px]  cursor-text ${
                                isEmail || isValid
                                    ? "border-red-700"
                                    : "border-white"
                            }`}
                        >
                            <label
                                onClick={() => {
                                    setIsFocused(true);
                                }}
                                className={`${
                                    isFocused
                                        ? "cursor-text transition-all absolute text-sm top-1 left-5"
                                        : "cursor-text transition-all text-lg absolute top-[17px] md:top-5 left-5"
                                }`}
                            >
                                Email or Number
                            </label>
                            <input
                                className={`w-full mt-2 p-2 rounded bg-transparent focus:outline-none`}
                                type="email"
                                id="email"
                                placeholder="Email or mobile number"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required",
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message:
                                            "Please enter a valid email address",
                                    },
                                })}
                            />
                        </div>

                        <p className="text-red-500 text-sm mt-1 text-start">
                            {errors.email?.message}
                        </p>

                        <div
                            ref={isClickOutside}
                            className={`relative p-5 pb-2 flex-1 border rounded-md bg-black opacity-50 min-w-[235px]  cursor-text ${
                                isEmail || isValid
                                    ? "border-red-700"
                                    : "border-white"
                            }`}
                        >
                            <label
                                onClick={() => {
                                    setIsFocused(true);
                                }}
                                className={`${
                                    isFocused
                                        ? "cursor-text transition-all absolute text-sm top-1 left-5"
                                        : "cursor-text transition-all text-lg absolute top-[17px] md:top-5 left-5"
                                }`}
                            >
                                Password
                            </label>
                            <input
                                className={`w-full mt-2 p-2 rounded bg-transparent focus:outline-none`}
                                type="password"
                                id="password"
                                placeholder="Password"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required",
                                    },
                                })}
                            />
                        </div>

                        <p className="text-red-500 text-sm mt-1 text-start">
                            {errors.password?.message}
                        </p>

                        <button className="button transition-color ease-in duration-200 hover:bg-red-700 h-[50px] text-white p-2 rounded">
                            Sign in
                        </button>

                        <p>OR</p>

                        <button className="transition-color ease-in duration-200 hover:backdrop-opacity-50 hover:backdrop-filter h-[50px] backdrop-filter backdrop-opacity-10 bg-opacity-25 hover:bg-opacity-20 bg-white text-white p-2 rounded">
                            Use a Sign-in Code
                        </button>
                    </form>

                    <p className="mt-4 font-bold cursor-pointer hover:underline hover:text-gray-500 self-center">
                        Forgot password?
                    </p>

                    <div className="flex flex-col items-start text-start mt-2 ">
                        <CheckBox
                            isChecked={isChecked}
                            setIsChecked={setIsChecked}
                        >
                            Remember me
                        </CheckBox>

                        <p className="mt-4">
                            New to Netflix?
                            <span className="cursor-pointer">Sign up now</span>
                        </p>

                        <p className="mt-4 text-sm">
                            This page is protected by Google reCAPTCHA to ensure
                            you're not a bot.
                            <span className="text-blue-600 cursor-pointer">
                                Learn more
                            </span>
                        </p>
                    </div>
                </div>

                <div className="bg-black opacity-50 absolute inset-0 z-0"></div>
            </div>
            <DevTool control={control} />
            <Footer />
        </div>
    );
};

export default Index;
