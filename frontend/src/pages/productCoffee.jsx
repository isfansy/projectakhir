import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import Axios from "axios";
import Header from "../component/header";
import Footer from "../component/footer";
import Frenchvanilla from "../img/frenchvanilla.png";
import Billygoat from "../img/billygoat.png";
import Blackforest from "../img/blackforest.png";
import { Url, Urlimage } from "../helper/apiurl";

const ProductCoffee = () => {
  const [dataCoffee, setdataCoffee] = useState([]);

  useEffect(() => {
    Axios.get(`${Url}product/product`)
      .then(res => {
        setdataCoffee(res.data.dataCoffee);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const renderCoffee = () => {
    return dataCoffee.map((val, index) => {
      return (
        <div>
          <img src={Urlimage + val.gambar} />
          <div>
            <h5>{val.namaproduct}</h5>
            <center>
              <p>{val.deskripsiproduct}</p>
            </center>
            <center>
              <h5>Rp.{val.hargaproduct}</h5>
            </center>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <Header />
      <div>
        <h1 style={{ textAlign: "center", paddingTop: "130px" }}>COFFEE</h1>
        <h5 style={{ textAlign: "center" }}>
          WE SERVE THE BEST COFFEEBEAN FOR YOU
        </h5>
        <div>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
          {renderCoffee()}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductCoffee;

{
  /* <div>
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
          </div>
        </div>
      </div>
      <Footer />
    </div> */
}
