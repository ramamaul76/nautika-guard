import React from "react";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Footer from "./components/Footer";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import "./index.css";

const App = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
};

export default App;
