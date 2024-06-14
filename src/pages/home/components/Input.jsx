import { useState, useRef } from "react";

import { IoMdCloseCircleOutline } from "react-icons/io";
import UseClickOutside from "../../../hooks/useClickOutside";
import GetStartedButton from "./GetStartedButton";

const Input = ({ label }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const inputRef = useRef(null);

    const emailPattern = new RegExp(
        "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
    );

    const isClickOutside = UseClickOutside(() => {
        setIsFocused(false);
        inputRef.current.classList.remove("border-white");
        inputRef.current.classList.remove("border-red-700");
    });

    const handleEmailChange = (e) => {
        e.preventDefault();
        const trimmedValue = email.trim();
        if (emailPattern.test(trimmedValue) && trimmedValue) {
            setIsValid(false);
            setIsEmail(false);
            inputRef.current.classList.add("border-white");
            inputRef.current.classList.remove("border-red-700");
        } else if (!trimmedValue) {
            setIsEmail(true);
            setIsValid(false);
            inputRef.current.classList.add("border-red-700");
        } else {
            setIsValid(true);
            setIsEmail(false);
            inputRef.current.classList.add("border-red-700");
        }
    };

    return (
        <div
            onClick={() => {
                setIsFocused(true);
                inputRef.current.focus();
            }}
            ref={isClickOutside}
        >
            <div
                onSubmit={handleEmailChange}
                className="w-full relative flex gap-3 flex-col md:items-start justify-between md:flex-row md:max-w-[700px] z-10"
            >
                <div className="p-5 border flex-1 border-white rounded-md bg-black opacity-50 mb-5 h-[65px] min-w-[235px] lg:min-w-[365px] cursor-text">
                    <label
                        onClick={() => {
                            setIsFocused(true);
                        }}
                        className={`${
                            isFocused
                                ? "cursor-text transition-all absolute text-sm top-1 left-5"
                                : "cursor-text transition-all text-lg absolute top-5 left-5 "
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
                        className="w-full bg-transparent mt-3 border-none focus:outline-none"
                        type="name"
                    />
                </div>
                <p
                    className={`absolute flex gap-2 items-end ${
                        isEmail ? " block" : "hidden"
                    } top-[70px] left-2 text-red-700 font-bold`}
                >
                    <IoMdCloseCircleOutline className="text-xl" /> Email is
                    required
                </p>
                <p
                    className={`absolute flex gap-2 items-end ${
                        isValid ? " block" : "hidden"
                    } top-[70px] left-2 text-red-700 font-bold`}
                >
                    <IoMdCloseCircleOutline className="text-xl" /> Please insert
                    a valid Email address
                </p>
                
            </div>
        </div>
    );
};

export default Input;
