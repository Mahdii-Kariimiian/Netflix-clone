import { useState } from "react";
import { Link } from "react-router-dom";
import NetflixLogo from "../assets/images/netflix-logo.png";
import { IoLanguageOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import DropDown from "./commons/DropDown";
import UseClickOutside from "../hooks/useClickOutside";

const Header = () => {
    // languages for dropdown
    const languages = ["English", "Italiano"];
    // state for dropdown
    const [isDropDown, setIsDropDown] = useState(false);
    // state for selected language in dropdown
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    // function passed to UseClickOutside Hook
    const isClickOut = UseClickOutside(() => {
        setIsDropDown(false);
    });

    return (
        <div className="absolute top-0 w-full z-10 flex p-5 items-center lg:px-[175px] flex-wrap gap-1">
            <Link to="/">
                <img
                    className="md:w-[150px] w-[100px]"
                    src={NetflixLogo}
                    alt="Logo"
                />
            </Link>

            <div className="flex ml-auto gap-2">
                <div
                    ref={isClickOut}
                    onClick={() => {
                        setIsDropDown(!isDropDown);
                    }}
                    className="relative min-w-[min-content] flex items-center h-[35px] px-4 text-white rounded-md font-bold border border-white whitespace-nowrap cursor-pointer"
                >
                    <div className="z-0 absolute inset-0 bg-black opacity-50 whitespace-nowrap"></div>
                    <div className="z-10  flex items-center gap-2 whitespace-nowrap">
                        <IoLanguageOutline />
                        <p className="hidden md:block">{selectedLanguage}</p>
                        {isDropDown && (
                            <DropDown
                                languages={languages}
                                setSelectedLanguage={setSelectedLanguage}
                            />
                        )}
                        <IoMdArrowDropdown />
                    </div>
                </div>

                <Link to="/signin">
                    <button className="button md:ml-4 h-[35px] whitespace-nowrap">
                        Sign in
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
