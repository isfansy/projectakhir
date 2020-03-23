import React from "react";
import { Button } from "reactstrap";
import Header from "../component/header";
import Footer from "../component/footer";
import Frenchvanilla from "../img/frenchvanilla.png";
import Billygoat from "../img/billygoat.png";
import Blackforest from "../img/blackforest.png";

const ProductDetails = () => {
  return (
    <div>
      <Header />
      <div>
        <h1 style={{ textAlign: "center", paddingTop: "130px" }}>COFFEE</h1>
        <h5 style={{ textAlign: "center" }}>
          WE SERVE THE BEST COFFEEBEAN FOR YOU
        </h5>

        <div className="padimagedetails">
          <div className="row" style={{ paddingTop: "100px" }}>
            <div className="col-md-4" style={{ height: "1000px" }}>
              <img src={Frenchvanilla} />
              <div style={{ paddingLeft: "270px" }}>
                <p>Deskripsi</p>
                <h5>Rp.</h5>
                <Button
                  style={{
                    color: "black",
                    backgroundColor: "white"
                  }}
                >
                  Buy
                </Button>
              </div>
            </div>
            <div className="col-md-4">
              <img src={Billygoat} />
              <div style={{ paddingLeft: "270px" }}>
                <p>Deskripsi</p>
                <h5>Rp.</h5>
                <Button style={{ color: "black", backgroundColor: "white" }}>
                  buy
                </Button>
              </div>
            </div>
            <div className="col-md-4">
              <img src={Blackforest} />
              <div style={{ paddingLeft: "270px" }}>
                <p>Deskripsi</p>
                <h5>Rp.</h5>
                <Button style={{ color: "black", backgroundColor: "white" }}>
                  buy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
