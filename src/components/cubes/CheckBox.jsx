// CustomCheckBox.jsx
import { FaCheck } from "react-icons/fa";

const CustomCheckBox = ({ isChecked, setIsChecked, children }) => {
    return (
        <label className="flex items-center gap-2 cursor-pointer">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="sr-only peer"
            />

            <span
                aria-hidden="true"
                className={`flex items-center justify-center w-4 h-4 border border-gray-500 bg-white transition-all duration-200 ease-in-out peer-checked:bg-gray-500`}
            >
                {isChecked && <FaCheck className="text-[11px]" />}
            </span>

            <span className={`${isChecked ? "active" : ""}`}>{children}</span>
        </label>
    );
};

export default CustomCheckBox;
