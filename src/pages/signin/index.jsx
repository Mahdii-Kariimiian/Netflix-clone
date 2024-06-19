import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Footer from "../../components/Footer";
import CheckBox from "../../components/cubes/CheckBox";
import NetflixLogo from "../../assets/images/netflix-logo.png";
import background from "../../assets/images/hero-background.jpg";
import UseClickOutside from "../../hooks/useClickOutside";
import InputWithoutButton from "../../components/commons/InputWithoutButton";

const Index = () => {
    // States for handle placeholders
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);
    // State for checkbox
    const [isChecked, setIsChecked] = useState(false);
    // React hook form
    const form = useForm();
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = form;
    // use custom hook functions to handle placeholders
    const emailRef = UseClickOutside(() => {
        setIsFocusedEmail(false);
    });

    const passwordRef = UseClickOutside(() => {
        setIsFocusedPassword(false);
    });

    // Submit form
    const onSubmit = (data) => {
        console.log("submitted", data);
    };

    return (
        <div>
            <div
                className="flex flex-col items-center justify-start text-center text-white bg-center py-0 max-lg:p-5 max-lg:py-0 bg-no-repeat relative"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                }}
            >
                <div className="w-full z-10 self-start lg:px-[175px] py-5">
                    <Link to="/">
                        <img
                            className="md:w-[150px] w-[100px]"
                            src={NetflixLogo}
                            alt="Logo"
                        />
                    </Link>
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
                        <InputWithoutButton
                            form={form}
                            ref={emailRef}
                            errors={errors}
                            setIsState={setIsFocusedEmail}
                            isState={isFocusedEmail}
                            name="email"
                            register={register}
                            labelText=" Email or mobile number"
                        >
                            {{
                                required: {
                                    value: true,
                                    message: "Email is required",
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message:
                                        "Please enter a valid email address",
                                },
                            }}
                        </InputWithoutButton>
                        <InputWithoutButton
                            form={form}
                            ref={passwordRef}
                            errors={errors}
                            setIsState={setIsFocusedPassword}
                            isState={isFocusedPassword}
                            name="password"
                            register={register}
                            labelText="Password"
                        >
                            {{
                                required: {
                                    value: true,
                                    message: "Password is required",
                                },
                            }}
                        </InputWithoutButton>

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

                        <p className="mt-4 text-gray-300">
                            New to Netflix?{" "}
                            <span className="cursor-pointer text-white font-bold">Sign up now</span>
                        </p>

                        <p className="text-gray-300 mt-4 text-sm">
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
