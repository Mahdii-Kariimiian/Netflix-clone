import React from "react";

const MenuLinks = ({ text }) => {
    return (
        <div>
            <a href="#" className="hover:underline">
                {text}
            </a>
        </div>
    );
};

export default MenuLinks;
