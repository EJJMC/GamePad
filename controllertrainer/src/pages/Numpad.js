import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../components/info.css";
import info from "../images/controllerinstructions.png";
import dpad from "../images/dpadnumpad.png";
import puchkick from "../images/punchkick.png";

function Home() {
  return (
    <div className="scrollable-container">
      <div className="title">
        <div className="text-container">
          <Link to="/home" style={{ color: "white" }}>
            Back to Home
          </Link>
          <h3 className="info-text"> Full Controller Layout:</h3>

          <img
            src={info}
            alt="Select Motion"
            style={{
              width: "100%",
              height: "auto",
              marginLeft: "auto",
              marginRight: "auto",
              transformOrigin: "center",
            }}
          />
        </div>

        <div className="text-container">
          <h4 className="info-text">Dpad Number Notations:</h4>
          <img
            src={dpad}
            alt="Select Motion"
            style={{
              width: "50%",
              height: "auto",
              marginLeft: "auto",
              marginRight: "auto",
              transformOrigin: "center",
            }}
          />
          <h4 className="info-text">Punch and Kick locations</h4>
          <img
            src={puchkick}
            alt="Select Motion"
            style={{
              width: "80%",
              height: "auto",
              marginLeft: "auto",
              marginRight: "auto",
              transformOrigin: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
