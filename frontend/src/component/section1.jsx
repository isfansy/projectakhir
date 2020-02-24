import React from "react";
import "./section1.css";
import { Jumbotron, Button } from "reactstrap";
import imgtes from "../img/kopi3.jpeg";
import newarrival from "../img/newarrival.jpg";
import bestseller from "../img/bestseller.jpg";
import promo from "../img/promo.jpg";
import bag from "../img/bag.jpg";
import lookbook from "../img/lookbook.jpg";
import event from "../img/event.jpg";
import shopnow from "../img/shopnow.jpg";

const Section1 = props => {
  return (
    <div className="backgroundbig">
      <div className="row">
        <div className="col-md-3">
          <div className="padkiri">
            <img className="imgsize" src={newarrival} />
            {/* <img className='shopnow' src={shopnow}/> */}
          </div>
        </div>
        <div className="col-md-3">
          <img className="imgsize" src={bestseller} />
        </div>
        <div className="col-md-3">
          <img className="imgsize" src={promo} />
        </div>
        <div className="col-md-3">
          <img className="imgsize" src={bag} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 imgsizesection2 padkiri2">
          <img
            src={lookbook}
            style={{ height: "100%", width: "100%", margin: "auto" }}
          />
        </div>
        <div className="col-md-6 imgsizesection2 padkiri2">
          <img
            src={event}
            style={{ height: "100%", width: "100%", margin: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}; //how to export image to site

/* <div className='col-md-3'>
        <img className='imgsize' src={imgtes} />
        </div> */ export default Section1;
