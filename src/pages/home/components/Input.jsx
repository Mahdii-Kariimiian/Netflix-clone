import { useState, useRef } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";
import EmailValidation from "../../../utils/EmailValidation";
import UseClickOutside from "../../../hooks/useClickOutside";

const Input = ({ label }) => {
    // Value of input
    const [email, setEmail] = useState("");
    // Input is focused or not
    const [isFocused, setIsFocused] = useState(false);
    // Email pattern matches or not
    const [isValid, setIsValid] = useState(false);
    // value is empty or not
    const [isEmail, setIsEmail] = useState(false);
    // Ref for Input
    const inputRef = useRef(null);

    // Use Custom hook
    const isClickOutside = UseClickOutside(() => {
        setIsFocused(false);
        setIsValid(false);
        setIsEmail(false);
    });

    // Input change
    const handleEmailChange = (e) => {
        e.preventDefault();
        const trimmedValue = email.trim();

        if (EmailValidation(trimmedValue) && trimmedValue) {
            setIsValid(false);
            setIsEmail(false);
        } else if (!trimmedValue) {
            setIsEmail(true);
            setIsValid(false);
        } else {
            setIsValid(true);
            setIsEmail(false);
        }
    };

    return (
        <div className="max-md:w-full">
            <form
                onSubmit={handleEmailChange}
                className="w-full relative flex gap-3 flex-col items-stretch md:items-center justify-between md:flex-row md:max-w-[700px] z-10"
            >
                <div
                    onClick={() => {
                        setIsFocused(true);
                        inputRef.current.focus();
                    }}
                    className={`${
                        isFocused
                            ? "border-2 border-white p-[1px] rounded-lg"
                            : "border-2 border-transparent p-[1px]"
                    }`}
                >
                    <div
                        ref={isClickOutside}
                        className={`relative p-3 pb-2 flex-1 border rounded-md bg-black opacity-50 min-w-[235px] lg:min-w-[365px] cursor-text h-14 ${
                            isEmail || isValid
                                ? "border-red-700"
                                : "border-white"
                        }`}
                    >
                        <label
                            onClick={() => {
                                setIsFocused(true);
                            }}
                            className={`${
                                isFocused
                                    ? "cursor-text transition-all absolute text-[10px] top-1 left-5"
                                    : "cursor-text transition-all text-[15px] absolute top-[17px] md:top-[15px] left-5"
                            }`}
                        >
                            {label}
                        </label>
                        <input
                            ref={inputRef}
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            className="w-full bg-transparent mt-2 border-none focus:outline-none"
                            type="text"
                        />
                    </div>
                </div>

                <p
                    className={`absolute text-sm pt-1 flex gap-2 items-end ${
                        isEmail || isValid ? "block" : "hidden"
                    } top-[70px] left-2 text-red-600 font-bold`}
                >
                    <IoMdCloseCircleOutline className="text-xl" />
                    {isEmail && "Email is required"}
                    {isValid && "Please insert a valid Email address"}
                </p>

                <button className="h-14 max-md:self-center button md:text-xl md:px-6 flex gap-1 md:gap-3 py-3 items-center md:w-[205px]">
                    Get Started <RiArrowRightSLine className="text-4xl" />
                </button>
            </form>
        </div>
    );
};

export default Input;
