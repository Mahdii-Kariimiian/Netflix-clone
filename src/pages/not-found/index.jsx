import netflixLogo from "../../assets/images/netflix-logo.png";
import Background404 from "../../assets/images/404-background.webp";
import { Link } from "react-router-dom";

const index = () => {
    return (
        <div
            className="relative h-screen overflow-hidden"
            style={{
                backgroundImage: `url(${Background404})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div className="w-full bg-black p-5">
                <Link to="/">
                    <img
                        className="md:w-[150px] w-[100px] "
                        src={netflixLogo}
                        alt="logo"
                    />
                </Link>
            </div>

            <div className="text-white h-full gap-7 flex flex-col items-center justify-center">
                <h1 className="font-roboto-bold text-7xl">Lost your way?</h1>
                <p className="font-roboto-regular text-2xl">
                    Sorry, we can't find that page. You'll find lots to explore
                    on the home page.
                </p>
                <Link to="/">
                    <button className="bg-white text-black px-7 py-3 font-bold rounded-md">
                        Netflix Home{" "}
                    </button>
                </Link>

                <div>
                    <p className="border-l border-red-700 text-2xl p-5 tracking-[6px]">
                        Error Code{" "}
                        <span className="text-3xl font-bold">NSES-404</span>
                    </p>
                </div>

                <div className="absolute bottom-10 right-10 uppercase">
                    from <span className="font-bold">Lost in space</span>
                </div>
            </div>
        </div>
    );
};

export default index;
