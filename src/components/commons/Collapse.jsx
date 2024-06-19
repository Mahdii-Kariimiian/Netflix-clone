import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Collapse = ({ qas , children }) => {
    //drop down open or close
    const [openQuestionId, setOpenQuestionId] = useState(null);

    const handleClick = (id) => {
        setOpenQuestionId(openQuestionId === id ? null : id);
    };
    return (
        <div>
            {qas ? (
                qas.map((question) => {
                    const isOpen = openQuestionId === question.id;
                    return (
                        <div key={question.id} className="leading-10">
                            <div
                                onClick={() => handleClick(question.id)}
                                className="flex justify-between items-center bg-[#3A3A3A] mb-[2px] mt-2 p-6 cursor-pointer"
                            >
                                <h3 className="text-2xl">{question.name}</h3>
                                {isOpen ? (
                                    <ImCross className="text-xl" />
                                ) : (
                                    <FaPlus className="text-2xl" />
                                )}
                            </div>
                            {isOpen && (
                                <p className="transition-all p-4 text-2xl bg-[#3A3A3A]">
                                    {question.body}
                                </p>
                            )}
                        </div>
                    );
                })
            ) : (
                <div>Loading </div>
            )}
        </div>
    );
};

export default Collapse;
