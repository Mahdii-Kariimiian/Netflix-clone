import { useState, useRef } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import EmailValidation from "../../utils/EmailValidation";
import UseClickOutside from "../../hooks/useClickOutside";

const Input = ({ label, register, error, name, pattern, errorPattern }) => {
    const [email, setEmail] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const inputRef = useRef(null);

    const isClickOutside = UseClickOutside(() => {
        setIsFocused(false);
        setIsValid(false);
        setIsEmail(false);
    });

    return (
        <div
            onClick={() => {
                setIsFocused(true);
                inputRef.current.focus();
            }}
            className="max-md:w-full"
        >
            <div className="w-full relative flex gap-3 flex-col md:items-stretch justify-between md:flex-row md:max-w-[700px] z-10">
                <div
                    ref={isClickOutside}
                    className={`p-5 pb-2 flex-1 border rounded-md bg-black opacity-50 min-w-[235px]  cursor-text ${
                        isEmail || isValid ? "border-red-700" : "border-white"
                    }`}
                >
                    <label
                        onClick={() => {
                            setIsFocused(true);
                        }}
                        className={`${
                            isFocused
                                ? "cursor-text transition-all absolute text-sm top-1 left-5"
                                : "cursor-text transition-all text-lg absolute top-[17px] md:top-5 left-5"
                        }`}
                    >
                        {label}
                    </label>

                    <input
                        // ref={inputRef}
                        // value={email}
                        // onFocus={() => setIsFocused(true)}
                        // onBlur={() => setIsFocused(false)}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        className="w-full bg-transparent mt-2 border-none focus:outline-none"
                        type="text"
                        {...register(name, {
                            required: error,
                            pattern: {
                                value: pattern,
                                message: errorPattern,
                            },
                        })}
                    />
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
            </div>
        </div>
    );
};

export default Input;
