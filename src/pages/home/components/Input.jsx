import { RiArrowRightSLine } from "react-icons/ri";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState, useRef } from "react";

const Input = () => {
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const invalid = useRef(null);

    const emailPattern = new RegExp(
        "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
    );

    const handleEmailChange = (e) => {
        e.preventDefault();
        const trimmedValue = email.trim();
        if (emailPattern.test(trimmedValue) && trimmedValue) {
            setIsValid(false);
            setIsEmail(false);
            invalid.current.classList.add("border-white");
            invalid.current.classList.remove("border-red-700");
        } else if (!trimmedValue) {
            setIsEmail(true);
            setIsValid(false);
            invalid.current.classList.add("border-red-700");
        } else {
            setIsValid(true);
            setIsEmail(false);
            invalid.current.classList.add("border-red-700");
        }
    };
    return (
        <div>
            <form
                onSubmit={handleEmailChange}
                className="w-full relative flex gap-3 flex-col md:items-start justify-between md:flex-row md:max-w-[700px] z-10"
            >
                <label className="absolute top-5 left-5 z-10">
                    Email address
                </label>
                <input
                    ref={invalid}
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    className="p-5 border flex-1 border-white rounded-md bg-black opacity-50 mb-5 z-0 h-[65px] min-w-[235px] lg:min-w-[365px]"
                    type="name"
                />
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
                <button className="max-md:self-center button text-2xl px-7 flex gap-3 items-center py-4 w-[235px] h-[65px]">
                    Get Started <RiArrowRightSLine className="text-4xl" />
                </button>
            </form>
        </div>
    );
};

export default Input;
