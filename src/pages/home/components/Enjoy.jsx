import TvSet from "../../../assets/Tv-set.png";
import EnjoyVideo from "../../../assets/video/Enjoy-Video.mp4";

const Enjoy = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-evenly gap-4 bg-black text-white min-h-[90vh] px-[100px]">
            <div className="space-y-6">
                <h1 className="text-5xl font-bold">Enjoy on your TV</h1>
                <p className="text-2xl max-w-[550px]">
                    Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                    Blu-ray players, and more.
                </p>
            </div>
            <div className="relative overflow-hidden">
                <img className=" relative z-10" src={TvSet} alt="Tv set" />

                <video
                    className="absolute top-[20%] left-[13%] overflow-hidden"
                    autoPlay
                    loop
                    src={EnjoyVideo}
                ></video>
            </div>
        </div>
    );
};

export default Enjoy;
