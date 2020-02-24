import React from "react";
import sweatblack from "../img/sweatblack.jpg";
import sweatred from "../img/sweatred.jpg";
import shirtyellow from "../img/shirtyellow.jpg";
import sweatwhite from "../img/sweatwhite.jpg";
import Header from "../component/header";
import Footer from "../component/footer";

const NewArrival = props => {
  return (
    <div>
      <Header />
      <div className="">
        <div className="row padbawah">
          <div className="col-md-3">
            <div className="padkiri">
              <img className="imgsize" src={sweatblack} />
              {/* <img className='shopnow' src={shopnow}/> */}
            </div>
          </div>
          <div className="col-md-3">
            <img className="imgsize" src={sweatred} />
          </div>
          <div className="col-md-3">
            <img className="imgsize" src={shirtyellow} />
          </div>
          <div className="col-md-3">
            <img className="imgsize" src={sweatwhite} />
          </div>
        </div>
        <div className="row padbawah">
          <div className="col-md-3">
            <div className="padkiri">
              <img className="imgsize" src={sweatblack} />
              {/* <img className='shopnow' src={shopnow}/> */}
            </div>
          </div>
          <div className="col-md-3">
            <img className="imgsize" src={sweatred} />
          </div>
          <div className="col-md-3">
            <img className="imgsize" src={shirtyellow} />
          </div>
          <div className="col-md-3">
            <img className="imgsize" src={sweatwhite} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewArrival;
