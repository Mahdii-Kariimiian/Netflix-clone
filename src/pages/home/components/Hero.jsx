import background from "../../../assets/hero-background.jpg";

import Input from "./Input"

const Hero = () => {
    return (
        <div
            className="h-[100vh] flex flex-col items-center justify-center text-white gap-7 bg-center p-10 bg-no-repeat"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "120%",
                backgroundSize: "cover",
            }}
        >
            <h1 className="z-100 text-5xl font-bold mt-[100px] z-10">
                Unlimited movies, TV shows, and more
            </h1>
            <p className="text-2xl font-bold z-10">
                Watch anywhere. Cancel anytime.
            </p>
            <p className="text-2xl font-bold z-10">
                Ready to watch? Enter your email to create or restart your
                membership.
            </p>
            <div className="bg-custom-gradient absolute inset-0 z-0 "></div>
            <Input />
        </div>
    );
};

export default Hero;
