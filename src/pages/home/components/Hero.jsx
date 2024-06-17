import background from "../../../assets/hero-background.jpg";

import Input from "./Input";

const Hero = () => {
    return (
        <div
            className="z-10 h-[100dvh]  md:h-[100dvh]  flex flex-col gap-7 items-center justify-center text-l md:text-xl lg:text-2xl text-white bg-center p-10 bg-no-repeat text-center"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
            }}
        >
            <h1 className="md: mt-[100px] z-10 font-roboto-bold text-[2em] font-bold  leading-10">
                Unlimited movies, TV shows, and more
            </h1>
            <p className="z-10">Watch anywhere. Cancel anytime.</p>
            <p className="z-10">
                Ready to watch? Enter your email to create or restart your
                membership.
            </p>
            <div className="bg-custom-gradient absolute inset-0 z-0 max-h-[100dvh]">
                {/* Gradient for background*/}
            </div>
            <div className="z-10 w-full flex flex-col md:flex-row gap-3 justify-center items-center md:items-stretch">
                <Input label="Email address" />
            </div>
        </div>
    );
};

export default Hero;
