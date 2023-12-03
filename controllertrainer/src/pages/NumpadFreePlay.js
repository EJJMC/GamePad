import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./ControllerInput.css";
import correctSequenceGif from "../images/RYU.gif";
import DownArrow from "../images/Down.png";
import FowardArrow from "../images/Foward.png";
import BackArrow from "../images/Back.png";
import UpArrow from "../images/Up.png";
import info from "../images/controllerinstructions.png";
import DignalArrow from "../images/dignal.png";

import Kick from "../images/kick.png";

import Punch from "../images/Punch.png";

import TopNavbar from "./TopNavbar";

const buttonImages = {
  13: DownArrow,
  15: FowardArrow,
  2: Punch,
  14: BackArrow,
  12: UpArrow,
  0: Kick,
  4: DignalArrow,
};

const buttonText = {
  13: "2",
  15: "6",
  2: "Light Punch",
  14: "4",
  12: "8",
  0: "Light Kick",
  4: "3",
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
  useEffect(() => {
    const handleGamepadInput = () => {
      const gamepads = navigator.getGamepads();
      const pressedButtons = [];

      for (const gamepad of gamepads) {
        if (gamepad) {
          for (let i = 0; i < gamepad.buttons.length; i++) {
            if (gamepad.buttons[i].pressed) {
              pressedButtons.push({ button: i, image: buttonImages[i] });
            }
          }

          const adjustedJoystickX = gamepad.axes[0];
          const adjustedJoystickY = gamepad.axes[1];

          setJoystickX(adjustedJoystickX);
          setJoystickY(adjustedJoystickY);
        }
      }

      setButtonPresses((prevButtonPresses) =>
        [...prevButtonPresses, ...pressedButtons].slice(-10)
      );

      if (
        sequenceStep === 0 &&
        pressedButtons.some((button) => button.button === 13)
      ) {
        pressedButtons.push({ button: 4, image: buttonImages[4] });
        setSequenceStep(1);
      } else if (
        sequenceStep === 1 &&
        pressedButtons.some((button) => button.button === 15)
      ) {
        setTimeout(() => {
          setShowGif(false);
          setCorrectInputsCount(
            (prevCorrectInputsCount) => prevCorrectInputsCount + 1
          );
          setSequenceStep(2);
        }, 500);
      } else if (
        sequenceStep === 1 &&
        pressedButtons.some((button) => button.button === 4)
      ) {
        setShowGif(true);
      } else if (
        sequenceStep === 2 &&
        pressedButtons.some((button) => button.button === 2)
      ) {
        setSpecialMove("Hadouken");
        setSequenceStep(0);
        setShowGif(true);
        setTimeout(() => {
          setShowGif(false);
        }, 700);
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

      <img className="controllerinfo" src={info} alt="Select Motion" />

      <div className="textBox">
        <h3>Numpad Notations, What are they?</h3>
        <div>
          Numpad notation is a form of fighting game notation in which the
          directions that you may move in a fighting game are mapped to the
          layout of a keyboard's numpad.
        </div>
        <div>
          For example Ryus Hadouken move or QCF P is preformed by pressing down,
          down forward, forward on the dpad followed by a punch.
        </div>

        <div>The numbpad notation for this motion is 236P</div>
        <div>
          Try pressing the Dpad and buttons on your controller to see their
          numbpad values
        </div>

        <button
          className="retry-button"
          onClick={handleRetry}
          style={{
            padding: "10px 20px",
            background: "purple",
            border: "none",
            borderRadius: "8px",
            color: "white",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            textDecoration: "none",
          }}
        >
          <Link to="/home" style={{ color: "white" }}>
            Back to Home
          </Link>
        </button>
      </div>

      <div className="buttonFreeplay">
        <div className="icon-container">
          {buttonPresses.map((button, index) => (
            <div key={index} className="icon">
              {button.image && (
                <div style={{ textAlign: "center" }}>
                  <img
                    src={button.image}
                    alt={`Button ${button.button}`}
                    style={{ width: "30px", height: "30px" }}
                  />
                  <div>{buttonText[button.button]}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {showGif && (
        <div className="gif-container">
          <img src={correctSequenceGif} alt="Correct Sequence" />
        </div>
      )}
    </div>
  );
};

export default ControllerTester;
