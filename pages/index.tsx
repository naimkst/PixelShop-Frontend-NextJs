import React, { useState } from "react";
import Footer from "../components/Footer";
import Banner from "../components/Home/Banner";
import Category from "../components/Home/Category";
import Feature from "../components/Home/Feature";
import Hero from "../components/Home/Hero";
import Product from "../components/Home/Product";
import BestSeller from "../components/Home/TopSelling";

export default function Index() {
    const [searchInput, setSearchInput] = useState(true);
    const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <Hero/>
            <Banner/>
            <Category />
            <Feature/>
            <Product/>
            <BestSeller/>
            <Footer/>
        </>
    );
}
