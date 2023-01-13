import React from "react";

import "./Home.css";
import Slider from "./Slider/Slider";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Contactus from "../../Pages/Contactus/Contactus";
import Aboutus from "../../Pages/AboutUs/Aboutus";
import Categories from "../Categories/Category";

const Home = () => {
  return (
    <>
      <div className="home_container">
        <Header />
        <Slider />
        <Categories />
        <Aboutus />
        <Contactus />
        <Footer />
      </div>
    </>
  );
};

export default Home;
