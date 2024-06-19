import { useEffect, useState } from "react";
import fetchData from "../../../config/axios";
import Input from "./Input";
import Collapse from "../../../components/commons/Collapse";

const FrequentlyAsked = () => {
    // Questions and answers took from API
    const [qas, setQas] = useState("");
    // Fetch data from API
    useEffect(() => {
        fetchData("/comments")
            .then((res) => {
                setQas(res.data.slice(0, 7));
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="bg-black p-10 text-white border-y-8 border-[#2f2f2f] pt-[70px]">
            <div className="text-start max-w-screen-lg mx-auto">
                <h2 className="font-roboto-bold text-3xl md:text-5xl text-center font-bold mb-8">
                    Frequently Asked Questions
                </h2>
                <Collapse qas={qas} />
                <div className="flex flex-col items-center justify-center p-10 space-y-6">
                    <p className="text-xl">
                        Ready to watch? Enter your email to create or restart
                        your membership.
                    </p>
                    <div className="flex flex-col md:flex-row gap-3 items-stretch">
                        <Input label="Email address" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrequentlyAsked;
