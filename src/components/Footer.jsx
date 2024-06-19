import { IoLanguageOutline } from "react-icons/io5";
import MenuLinks from "../components/cubes/MenuLinks";
import DropDown from "./commons/DropDown";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import UseClickOutside from "../hooks/useClickOutside";

const Footer = () => {
    const languages = ["English", "Italiano"];
    const [selectedLanguage, setSelectedLanguage] = useState("English");
    const [isDropDown, setIsDropDown] = useState(false);

    // function passed to UseClickOutside Hook
    const isClickOut = UseClickOutside(() => {
        setIsDropDown(false);
    });
    return (
        <footer className="bg-black text-gray-300 p-8 pt-16">
            <div className="max-w-screen-xl mx-auto">
                <a href="#" className=" text-xl hover:underline">
                    Questions? Contact us.
                </a>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col space-y-2 mt-6">
                        <MenuLinks text="FAQ" />
                        <MenuLinks text="Investor Relations" />
                        <MenuLinks text="Ways to Watch" />
                        <MenuLinks text="Corporate Information" />
                        <MenuLinks text="Legal Notices" />
                    </div>

                    <div className="flex flex-col space-y-2 mt-6">
                        <MenuLinks text="Help Center" />
                        <MenuLinks text="Jobs" />
                        <MenuLinks text="Terms of Use" />
                        <MenuLinks text="Contact Us" />
                        <MenuLinks text="Only on Netflix" />
                    </div>

                    <div className="flex flex-col space-y-2 mt-6">
                        <MenuLinks text="Account" />
                        <MenuLinks text="Redeem Gift Cards" />
                        <MenuLinks text="Privacy" />
                        <MenuLinks text="Speed Test" />
                        <MenuLinks text="Ad Choices" />
                    </div>

                    <div className="flex flex-col space-y-2 mt-6">
                        <MenuLinks text="Media Center" />
                        <MenuLinks text="Buy Gift Cards" />
                        <MenuLinks text="Cookie Preferences" />
                        <MenuLinks text="Legal Guarantee" />
                    </div>
                </div>

                <div
                    ref={isClickOut}
                    onClick={() => setIsDropDown(!isDropDown)}
                    className=" mt-6 text-center"
                >
                    <button className="relative bg-transparent border border-gray-300 text-gray-300 py-2 px-4 rounded flex items-center justify-center">
                        <span className="mr-2">
                            <IoLanguageOutline />
                        </span>
                        {selectedLanguage}
                        <div className="absolute w-full top-2">
                            {isDropDown && (
                                <DropDown
                                    languages={languages}
                                    setSelectedLanguage={setSelectedLanguage}
                                />
                            )}
                        </div>
                        <IoMdArrowDropdown />
                    </button>
                </div>

                <div className="mt-10 mb-2 text-sm">Netflix Italy</div>
            </div>
        </footer>
    );
};

export default Footer;
