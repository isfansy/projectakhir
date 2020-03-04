import React from "react";
import Imghowtoorder from "../img/howtoorder.jpg";
import Headernofix from "../component/headernofix";
import Footer from "../component/footer";

const Howtoorder = props => {
  return (
    <div>
      <Headernofix />
      <div className="gambartengah">
        <img src={Imghowtoorder} />
      </div>
      <Footer />
    </div>
  );
};

export default Howtoorder;
