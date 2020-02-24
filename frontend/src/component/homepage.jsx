import React from "react";
import "./csshomepage.css";
import { Button } from "reactstrap";
import bg2 from "./../img/backgroundslide2.png";
import bg1 from "../img/backgroundslide1.jpg";
import Background from "./background";

function Homepage() {
  return (
    <div className="homemaster">
      <div className="homejumbotron">
        <div className="container">
          <div className="row content">
            <div className="col-md-6">
              <h1> Jual Kopi Nusantara Terbaik </h1>
              <p>
                Sasame Coffee memadukan biji kopi dari berbagai daerah penghasil
                kopi terbaik di Indonesia menjadi racikan house blend dengan
                rasa yang kaya & unik. Untuk kepuasan ngopi Anda, kami hanya
                menjual kopi Nusantara berkualitas tertinggi Specialty Coffee
                Grade 1.
              </p>
              <h5>
                "Sasame Coffee offers the finest Indonesian Specialty Coffee."
              </h5>
              <Button className="dark">Our Coffee</Button>
            </div>

            <div className="col-md-6">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/8KX6KWcEKmo"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <Background />
      </div>
    </div>
  );
}

export default Homepage;
