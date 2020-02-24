import React from "react";
import { Jumbotron, Container } from "reactstrap";
import Header from "../component/header";
import Footer from "../component/footer";
import Kedaijogja from "../img/kedaijogja.jpg";

const Store = props => {
  return (
    <div>
      <Header />
      <div className="padjumbotron">
        <Jumbotron fluid style={{ padding: "0", margin: "0" }}>
          {/* <Container fluid> */}
          {/* <div style={{ height: "100%" }}> */}
          <img src={Kedaijogja} style={{ width: "100%", height: "100%" }} />
          {/* </div> */}
          {/* </Container> */}
        </Jumbotron>
        <div
          style={{
            height: "2px",
            backgroundColor: "grey",
            width: "100%",
            margin: "50px 0"
          }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Store;
