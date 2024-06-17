import background from "../../assets/hero-background.jpg";
import Footer from "../../components/Footer";
import Input from "../home/components/Input";

const index = () => {
    return (
        <div>
            <div
                className="h-[100dvh] flex flex-col items-center justify-start text-center text-white bg-center p-10 bg-no-repeat relative"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                }}
            >
                
                
                <div className="max-w-[450px] bg-black bg-opacity-80 backdrop-filter backdrop-opacity-70 z-10 p-14 rounded-md">
                    <h1 className="text-4xl mb-4">Sign in</h1>
                    <form className="relative flex flex-col gap-4">
                        {/* <label
                            className="absolute top-[4%] left-[4%]"
                            htmlFor="email"
                        >
                            Email or mobile number
                        </label> */}
                        <Input label="Email or mobile number" />
                        {/* <input
                            type="text"
                            name="email"
                            className="p-2 h-[50px] border border-[#707070] rounded backdrop-filter backdrop-opacity-10 bg-opacity-10 bg-white text-white"
                        /> */}
                        {/* <label
                            className="absolute top-[24%] left-[4%]"
                            htmlFor="password"
                        >
                            Password
                        </label> */}
                        <Input label="Password" />
                        {/* <input
                            type="password"
                            name="password"
                            className="p-2 h-[50px] border border-[#707070] rounded backdrop-filter backdrop-opacity-10 bg-opacity-10 bg-white text-white"
                        /> */}
                        <button className="button h-[50px] text-white p-2 rounded mt-4">
                            Sign in
                        </button>
                        <p className="my-2">OR</p>
                        <button className="h-[50px] backdrop-filter backdrop-opacity-10 bg-opacity-25 bg-white text-white p-2 rounded">
                            Use a Sign-in Code
                        </button>
                    </form>
                    <p className="mt-4">Forgot password?</p>
                    <div className="text-start">
                        <div className="flex items-center mt-4">
                            <input
                                name="remember"
                                type="checkbox"
                                className="mr-2"
                            />
                            <label htmlFor="remember">Remember me</label>
                        </div>
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

export default index;
