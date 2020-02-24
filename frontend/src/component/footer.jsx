import React from "react";
import "./componentstyle.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div
      style={{
        height: "2px",
        backgroundColor: "black",
        width: "100%",
        margin: "50px 0"
      }}
    >
      <div className="footerpage">
        <div className="row editfooter">
          <div className="col-md-3" style={{ padding: "0 50px" }}>
            <h7>
              <a
                href="/components"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                How To Order
              </a>{" "}
            </h7>
            <br />
            <h7>
              <a
                href="/components"
                style={{ textDecoration: "none", color: "black" }}
              >
                How To Pay
              </a>
            </h7>
            <br />
            <h7>
              <a
                href="/components"
                style={{ textDecoration: "none", color: "black" }}
              >
                Shipping
              </a>
            </h7>
            <br />
          </div>
          <div className="col-md-3">
            <h7>
              <a
                href="/components"
                style={{ textDecoration: "none", color: "black" }}
              >
                Contact Us
              </a>
            </h7>
            <br />
            <h7>
              <a
                href="/components"
                style={{ textDecoration: "none", color: "black" }}
              >
                Return
              </a>
            </h7>
            <br />
            <h7>
              <a
                href="/components"
                style={{ textDecoration: "none", color: "black" }}
              >
                FAQ
              </a>
            </h7>
            <br />
          </div>
          <div className="col-md-3">
            <h7>
              <a
                href="/components"
                style={{
                  textDecoration: "none",
                  color: "black",
                  padding: "0 10px"
                }}
              >
                <FaFacebookSquare />
              </a>
            </h7>
            <h7>
              <a
                href="/components"
                style={{
                  textDecoration: "none",
                  color: "black",
                  padding: "0 10px"
                }}
              >
                <FaInstagram />
              </a>
            </h7>
            <h7>
              <a
                href="/components"
                style={{
                  textDecoration: "none",
                  color: "black",
                  padding: "0 10px"
                }}
              >
                <FaTwitterSquare />
              </a>
            </h7>
            <br />
          </div>

          <div className="col-md-3">
            <h6 style={{ color: "black" }}>SIGN UP TO OUT NEWSLETTER</h6>
            <Form inline>
              <FormGroup>
                <Label for="exampleEmail" hidden>
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Email"
                />
              </FormGroup>{" "}
              <Button>Join Us</Button>
            </Form>
          </div>
        </div>

        <div className="row footerbawah">
          <div className="col-md-6">
            <div className="pademail">ISFANLYKOPI@ROCKETMAIL.COM</div>
          </div>
          <div className="col-md-6">
            <div className="padcopyright">
              Isfanly Kopi ® 2019. Allrights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
