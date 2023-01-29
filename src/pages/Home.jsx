import React from "react";

// import AOS
import Aos from "aos";
import "aos/dist/aos.css";

// import components
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Workouts from "../components/Workouts";
import Pricing from "../components/Pricing";
import Community from "../components/Community";
import Faq from "../components/Faq";
import Join from "../components/Join";
import Footer from "../components/Footer";

const Home = () => {
  // initialization AOS
  return (
    <div className="relative mx-auto max-w-[1440px] overflow-hidden bg-page">
      <Header />
      <Banner />
      <About />
      <Workouts />
      <Pricing />
      <Community />
      <Faq />
      <Join />
      <Footer />

      {/* for test scrolling */}
      {/* <div className="h-[4000px]"/> */}
    </div>
  );
};

export default Home;
