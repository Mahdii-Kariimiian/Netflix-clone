import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "./components/Hero";
import Enjoy from "./components/Enjoy";
import FrequentlyAsked from "./components/FrequentlyAsked"

const index = () => {
    return (
        <div>
            <div className="absolute top-0 w-full z-10 ">
                <Header />
            </div>

            <Hero />
            <Enjoy />
            <FrequentlyAsked />
            <Footer />
        </div>
    );
};

export default index;
