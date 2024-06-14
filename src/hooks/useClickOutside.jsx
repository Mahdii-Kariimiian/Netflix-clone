import { useRef, useEffect } from "react";

const UseClickOutside = (handler) => {
    const clickRef = useRef(null);
    useEffect(() => {
        const handleClickOut = (e) => {
            if (clickRef.current && !clickRef.current.contains(e.target)) {
                handler();
            }
        };
        document.addEventListener("click", handleClickOut, true);

        return () => {
            document.removeEventListener("click", handleClickOut, true);
        };
    }, [handler]);

    return clickRef
};

export default UseClickOutside;