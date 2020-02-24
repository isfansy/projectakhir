import React from "react";
import bg2 from "./../img/backgroundslide2.png";
import "./componentstyle.css";

function Background() {
  return (
    <div className="backgroundbawah">
      <img src={bg2} style={{ width: "100%" }} />
    </div>
  );
}

export default Background;
