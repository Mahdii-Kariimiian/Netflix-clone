

const DropDown = ({ languages, setSelectedLanguage }) => {
    return (
        <ul className="z-100 absolute top-[35px] left-0 min-w-[90px] w-full bg-white text-gray-900 p-1 rounded-md">
            {languages.map((language) => {
                return (
                    <li
                        onClick={() => {
                            setSelectedLanguage(language);
                        }}
                        className="hover:bg-gray-600 hover:text-white p-2 rounded-md cursor-pointer"
                        key={language}
                    >
                        {language}
                    </li>
                );
            })}
        </ul>
    );
};

export default DropDown;
