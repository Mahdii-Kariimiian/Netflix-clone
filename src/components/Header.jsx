import NetflixLogo from "../assets/netflix-logo.png";
import { IoLanguageOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
    return (
        <div className="flex p-5 items-center max-w-[1225px] m-auto gap-2 ">
            <img
                className="md:w-[150px] w-[100px]"
                src={NetflixLogo}
                alt="Logo"
            />

            <div className="min-w-[min-content] flex items-center relative h-[35px] ml-auto px-4 text-white rounded-md font-bold border border-white overflow-hidden whitespace-nowrap">
                <div className="z-0 absolute inset-0 bg-black opacity-50 whitespace-nowrap"></div>
                <div className="z-10 relative flex items-center gap-2 whitespace-nowrap">
                    <IoLanguageOutline />{" "}
                    <select className="relative bg-transparent" name="language">
                        <option
                            className=""
                            name="language"
                            value="english"
                        >
                            English
                        </option>
                        <option name="language" value="italian">
                            Italiano
                        </option>
                    </select>{" "}
                    <IoMdArrowDropdown />
                </div>
            </div>

            <div></div>

            <button className="button ml-4 h-[35px] whitespace-nowrap">
                Sign in{" "}
            </button>
        </div>
    );
};

export default Header;
