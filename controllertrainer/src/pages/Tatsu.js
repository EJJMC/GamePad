import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./ControllerInput.css";
import correctSequenceGif from "../images/ryutatsu.gif";
import DownArrow from "../images/Down.png";
import FowardArrow from "../images/Foward.png";
import BackArrow from "../images/Back.png";
import UpArrow from "../images/Up.png";
import Kick from "../images/kick.png";
import DignalArrow from "../images/dignal.png";
import Punch from "../images/Punch.png";
import defaultGif from "../images/Ryu3s-stance.gif";
import TopNavbar from "./TopNavbar";

import selectQCFImage from "../images/QCFmotions.png";

import QCFmotion from "../images/qcftatsu.png";

import QCFgif from "../images/qcf.gif";

import oppositeGif from "../images/Ken3s-stance.gif";

import hurtGif from "../images/ken-block.gif";
// Define image URLs for each button
const buttonImages = {
  13: DownArrow,
  15: FowardArrow,
  2: Punch,
  14: BackArrow,
  12: UpArrow,
  0: Kick,
};

const ControllerTester = () => {
  const [buttonPresses, setButtonPresses] = useState([]);
  const [joystickX, setJoystickX] = useState(0);
  const [joystickY, setJoystickY] = useState(0);
  const [specialMove, setSpecialMove] = useState("");
  const [sequenceStep, setSequenceStep] = useState(0);
  const [sequenceError, setSequenceError] = useState(false);
  const [correctInputsCount, setCorrectInputsCount] = useState(0);
  const [wrongInputsCount, setWrongInputsCount] = useState(0);
  const [totalTries, setTotalTries] = useState(0);
  const [showGif, setShowGif] = useState(false);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const handleGamepadInput = () => {
      const gamepads = navigator.getGamepads();
      const pressedButtons = [];

      const updatedPercentage =
        (correctInputsCount / (correctInputsCount + wrongInputsCount)) * 100;
      setPercentage(updatedPercentage);

      for (const gamepad of gamepads) {
        if (gamepad) {
          for (let i = 0; i < gamepad.buttons.length; i++) {
            if (gamepad.buttons[i].pressed) {
              pressedButtons.push({ button: i, image: buttonImages[i] });
            }
          }

          // Handle joystick input
          const adjustedJoystickX = gamepad.axes[0];
          const adjustedJoystickY = gamepad.axes[1];

          setJoystickX(adjustedJoystickX);
          setJoystickY(adjustedJoystickY);
        }
      }

      // Append newly pressed buttons to the existing ones, but keep a maximum length of 10
      setButtonPresses((prevButtonPresses) =>
        [...prevButtonPresses, ...pressedButtons].slice(-10)
      ); // Only keep the last 10 entries

      if (sequenceError) {
        setSequenceError(false);
        setWrongInputsCount(wrongInputsCount + 1);
      }

      if (
        sequenceStep === 0 &&
        pressedButtons.some((button) => button.button === 13)
      ) {
        setSequenceStep(1);
      } else if (
        sequenceStep === 1 &&
        pressedButtons.some((button) => button.button === 14)
      ) {
        setSequenceStep(2);
      } else if (
        sequenceStep === 2 &&
        pressedButtons.some((button) => button.button === 0)
      ) {
        setSpecialMove("Hadouken");
        setSequenceStep(0);
        setCorrectInputsCount(correctInputsCount + 1);
        setShowGif(true);
        setTimeout(() => {
          setShowGif(false);
        }, 1200);
      } else {
        if (
          pressedButtons.some((button) => [13, 15, 2].includes(button.button))
        ) {
          setSequenceError(true);
        }
        setSequenceStep(0);
        setSpecialMove("");
      }
    };

    const interval = setInterval(handleGamepadInput, 100);

    return () => {
      clearInterval(interval);
    };
  }, [sequenceStep, sequenceError, correctInputsCount, wrongInputsCount]);

  const handleRetry = () => {
    setCorrectInputsCount(0);
    setWrongInputsCount(0);
    setTotalTries(totalTries + 1);
  };
  return (
    <div className="gamepad-input-screen">
      <TopNavbar />

      <img
        className="qcf"
        src={selectQCFImage}
        alt="Select Motion"
        style={{
          width: "50%",
          height: "auto",
          transformOrigin: "center",
        }}
      />

      <img
        className="otherimage"
        src={QCFmotion}
        alt="Select Motion"
        style={{
          width: "50%",
          height: "auto",
          transformOrigin: "center",
        }}
      />

      <div
        className="image-container"
        style={{ maxWidth: "300px", margin: "0 auto" }}
      >
        <img
          className="qcfGIF"
          src={QCFgif}
          alt="Select Motion"
          style={{
            width: "15%", // Set the image width to 100% of its container
            height: "auto", // Maintain the aspect ratio
          }}
        />
      </div>

      <div className="content-right">
        <div className="info-box">
          <div className="info-label">Correct Inputs:</div>
          <div className="info-value">{correctInputsCount}</div>
        </div>
        <div className="info-box">
          <div className="info-label">Wrong Inputs:</div>
          <div className="info-value">{wrongInputsCount}</div>
        </div>
        {/* <div className="info-box">
          <div className="info-label">Total Tries:</div>
          <div className="info-value">{totalTries}</div>
        </div> */}
        <div className="info-box">
          <div className="info-label">Success Percentage:</div>
          <div className="info-value">{percentage.toFixed(2)}%</div>
        </div>
        <button className="retry-button" onClick={handleRetry}>
          Retry
        </button>
        <button className="retry-button">
          <Link to="/home" style={{ color: "white" }}>
            Back to Home
          </Link>
        </button>
      </div>

      <div className="content-left">
        <div className="icon-container">
          {buttonPresses.map((button, index) => (
            <div key={index} className="icon">
              {button.image && (
                <img
                  src={button.image}
                  alt={`Button ${button.button}`}
                  style={{ width: "50px", height: "50px" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {showGif && (
        <div className="tatsu-container">
          <img src={correctSequenceGif} alt="Correct Sequence" />
        </div>
      )}

      <div
        className={`default-gif ${showGif ? "hidden" : ""}`}
        style={{
          position: "absolute",
          top: "360px",
          left: "150px",
          width: "15%", // Set the image width to 100% of its container
          height: "auto", // Maintain the aspect ratio
        }}
      >
        <img src={defaultGif} alt="Default GIF" />
      </div>
      {showGif && (
        <div className="kentatsu-container">
          <img src={hurtGif} alt="Correct Sequence" />
        </div>
      )}

      <div
        className={`default-gif ${showGif ? "hidden" : ""}`}
        style={{
          position: "absolute",
          top: "360px",
          left: "250px",
          width: "15%", // Set the image width to 100% of its container
          height: "auto", // Maintain the aspect ratio
          transform: "scaleX(-1)",
        }}
      >
        <img src={oppositeGif} alt="Default GIF" />
      </div>
    </div>
  );
};

export default ControllerTester;
