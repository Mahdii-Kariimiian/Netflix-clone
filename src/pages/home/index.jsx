import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "./components/Hero";
import Enjoy from "./components/Enjoy";
import FrequentlyAsked from "./components/FrequentlyAsked";

const index = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Enjoy />
            <FrequentlyAsked />
            <Footer />
        </div>
    );
};

export default index;
