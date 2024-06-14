import { RiArrowRightSLine } from "react-icons/ri";

const GetStartedButton = () => {
    
    return (
        <div>
            <button className="max-md:self-center button text-2xl px-7 flex gap-3 items-center py-4 w-[235px] h-[65px]">
                Get Started <RiArrowRightSLine className="text-4xl" />
            </button>
        </div>
    );
};

export default GetStartedButton;
