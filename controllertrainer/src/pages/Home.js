import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../components/Card.css";
import selectMotionImage from "../images/selectmotion.png";
import selectQCFImage from "../images/QCFmotions.png";
import BasicTraining from "../images/BasicTraining.png";
import QCFOne from "../images/QCFInputOne.png";
import Notation from "../images/Notation.png";
import FreeP from "../images/FreePratice.png";
import ModernC from "../images/ModernC.png";
import QCFTwo from "../images/QCFInputTwo.png";
import QCFThree from "../images/tatsu.png";
import selectZMotImage from "../images/zmotion.png";
import ZmotOne from "../images/ZMotOne.png";
import ZmotTwo from "../images/ZMotTwo.png";
import ViewCon from "../images/ViewCon.png";
import Classic from "../images/Classic.png";

function Home() {
  const selectMotionRef = useRef(null);

  useEffect(() => {
    if (selectMotionRef.current) {
      selectMotionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="scrollable-container">
      <div className="title">
        <img
          src={selectMotionImage}
          alt="Select Motion"
          style={{
            width: "100%",
            height: "auto",
            marginLeft: "auto",
            marginRight: "auto",
            transformOrigin: "center",
          }}
        />

        <img
          src={BasicTraining}
          alt="Select Motion"
          style={{
            width: "50%",
            height: "auto",
            transformOrigin: "center",
          }}
        />

        <div className="image-container">
          <div className="horizontal-scroll">
            <Link to="/Numpad" className="centered-link">
              <img
                src={ViewCon}
                alt="Select Motion"
                style={{
                  height: "auto",
                  transformOrigin: "center",
                }}
              />
            </Link>
            <Link to="/NumpadFreePlay" className="centered-link">
              <img
                src={Notation}
                alt="Select Motion"
                style={{
                  height: "auto",
                  transformOrigin: "center",
                }}
              />
            </Link>

            <Link to="/info" className="centered-link">
              <img
                src={ModernC}
                alt="Select Motion"
                style={{
                  height: "auto",
                  transformOrigin: "center",
                }}
              />
            </Link>
          </div>
        </div>
        <img
          src={selectQCFImage}
          alt="Select Motion"
          style={{
            width: "50%",
            height: "auto",
            transformOrigin: "center",
          }}
        />

        <div className="image-container">
          <div className="horizontal-scroll">
            <Link to="/ControllerInput" className="centered-link">
              <img
                src={QCFOne}
                alt="Select Motion"
                style={{
                  height: "auto",
                  transformOrigin: "center",
                }}
              />
            </Link>

            <Link to="/ReverseQCF" className="centered-link">
              <img
                src={QCFTwo}
                alt="Select Motion"
                style={{
                  height: "auto",
                  transformOrigin: "center",
                }}
              />
            </Link>

            <Link to="/Tatsu" className="centered-link">
              <img
                src={QCFThree}
                alt="Select Motion"
                style={{
                  height: "auto",
                  transformOrigin: "center",
                }}
              />
            </Link>
          </div>
        </div>
        <img
          src={selectZMotImage}
          alt="Select Motion"
          style={{
            width: "40%",
            height: "auto",
            transformOrigin: "center",
          }}
        />

        <div className="image-container">
          <div className="horizontal-scroll">
            <Link to="/ControllerInputDP" className="centered-link">
              <img
                src={ZmotOne}
                alt="Select Motion"
                style={{
                  height: "auto",
                  transformOrigin: "center",
                }}
              />
            </Link>

            <Link to="/ReverseDragonPunch" className="centered-link">
              <img
                src={ZmotTwo}
                alt="Select Motion"
                style={{
                  height: "auto",
                  transformOrigin: "center",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
