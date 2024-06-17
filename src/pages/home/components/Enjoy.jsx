import TvSet from "../../../assets/Tv-set.png";
import EnjoyVideo from "../../../assets/video/Enjoy-Video.mp4";

const Enjoy = () => {
    return (
        <div className="z-10 flex flex-col lg:flex-row items-center text-[14px] justify-evenly gap-4 bg-black text-white min-h-[90dvh] p-10 lg:px-[100px] max-lg:text-center">
            <div className="space-y-6">
                <h1 className="font-roboto-bold text-[2em] lg:text-[4em] font-bold">Enjoy on your TV</h1>
                <p className="text-[1.2em] lg:text-[2em] lg:max-w-[700px]">
                    Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                    Blu-ray players, and more.
                </p>
            </div>
            <div className="relative overflow-hidden">
                <img className=" relative z-10" src={TvSet} alt="Tv set" />

                <video
                    className="absolute top-[20%] left-[13%] overflow-hidden"
                    autoPlay
                    muted
                    loop
                    src={EnjoyVideo}
                ></video>
            </div>
        </div>
    );
};

export default Enjoy;
