import React from "react";
import Homepage from "../component/homepage";
import Section1 from "../component/section1";
import Header from "../component/header";
import Footer from "../component/footer";

const Home = props => {
  return (
    <div>
      <Header />
      <Homepage />
      <Section1 />
      <Footer />
    </div>
  );
};

export default Home;
