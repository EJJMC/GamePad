import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./ControllerInput.css";
import correctSequenceGif from "../images/RYU.gif";
import DownArrow from "../images/Down.png";
import FowardArrow from "../images/Foward.png";
import BackArrow from "../images/Back.png";
import UpArrow from "../images/Up.png";
import DignalArrow from "../images/dignal.png";
import Punch from "../images/Punch.png";
import defaultGif from "../images/Ryu3s-stance.gif";
import TopNavbar from "./TopNavbar";

import selectQCFImage from "../images/QCFmotions.png";

import QCFmotion from "../images/qcfinput.png";

import QCFgif from "../images/qcf.gif";

// Define image URLs for each button
const buttonImages = {
  13: DownArrow,
  15: FowardArrow,
  2: Punch,
  14: BackArrow,
  12: UpArrow,
};

const buttonText = {
  13: "2",
  15: "6",
  2: "Light Punch",
  14: "4",
  12: "8",
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
        pressedButtons.some((button) => button.button === 15)
      ) {
        setSequenceStep(2);
      } else if (
        sequenceStep === 2 &&
        pressedButtons.some((button) => button.button === 2)
      ) {
        setSpecialMove("Hadouken");
        setSequenceStep(0);
        setCorrectInputsCount(correctInputsCount + 1);
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

      <div className="content-right">
        {/* {specialMove && <div>Special Move: {specialMove}</div>} */}
        {/* {sequenceError && <div className="error">Incorrect Sequence</div>} */}

        <button
          className="retry-button"
          onClick={handleRetry}
          style={{
            padding: "10px 20px", // Add padding for better spacing
            background: "purple", // Change the background color
            border: "none", // Remove the border
            borderRadius: "5px", // Add rounded corners
            color: "white", // Change the text color to white
            cursor: "pointer", // Change the cursor to a pointer on hover
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
          }}
        >
          Retry
        </button>

        <button
          className="retry-button"
          onClick={handleRetry}
          style={{
            padding: "10px 20px", // Add padding for better spacing
            background: "purple", // Change the background color
            border: "none", // Remove the border
            borderRadius: "5px", // Add rounded corners
            color: "white", // Change the text color to white
            cursor: "pointer", // Change the cursor to a pointer on hover
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
            textDecoration: "none", // Remove the underline from the link
          }}
        >
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
                <div style={{ textAlign: "center" }}>
                  <img
                    src={button.image}
                    alt={`Button ${button.button}`}
                    style={{ width: "50px", height: "50px" }}
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

// import React, { useEffect, useState } from "react";
// import { Link, Redirect } from "react-router-dom";
// import "./ControllerInput.css";
// import correctSequenceGif from "../images/RYU.gif";
// import DownArrow from "../images/Down.png";
// import FowardArrow from "../images/Foward.png";
// import BackArrow from "../images/Back.png";
// import UpArrow from "../images/Up.png";
// import DignalArrow from "../images/dignal.png";
// import Punch from "../images/Punch.png";
// import defaultGif from "../images/Ryu3s-stance.gif";
// import TopNavbar from "./TopNavbar";

// // Define a mapping from button numbers to text representations
// const buttonText = {
//   13: "Down",
//   15: "Forward",
//   2: "Punch",
//   14: "Back",
//   12: "Up",
// };

// const buttonImages = {
//   13: DownArrow,
//   15: FowardArrow,
//   2: Punch,
//   14: BackArrow,
//   12: UpArrow,
// };

// const ControllerTester = () => {
//   const [buttonPresses, setButtonPresses] = useState([]);
//   const [joystickX, setJoystickX] = useState(0);
//   const [joystickY, setJoystickY] = useState(0);
//   const [specialMove, setSpecialMove] = useState("");
//   const [sequenceStep, setSequenceStep] = useState(0);
//   const [sequenceError, setSequenceError] = useState(false);
//   const [correctInputsCount, setCorrectInputsCount] = useState(0);
//   const [wrongInputsCount, setWrongInputsCount] = useState(0);
//   const [totalTries, setTotalTries] = useState(0);
//   const [showGif, setShowGif] = useState(false);

//   useEffect(() => {
//     const handleGamepadInput = () => {
//       const gamepads = navigator.getGamepads();

//       for (const gamepad of gamepads) {
//         if (gamepad) {
//           const pressedButtons = [];
//           for (let i = 0; i < gamepad.buttons.length; i++) {
//             if (gamepad.buttons[i].pressed) {
//               pressedButtons.push({
//                 button: i,
//                 image: buttonImages[i],
//                 text: buttonText[i],
//               });
//             }
//           }
//           setButtonPresses(pressedButtons);

//           if (sequenceError) {
//             setSequenceError(false);
//             setWrongInputsCount(wrongInputsCount + 1);
//           }

//           if (
//             sequenceStep === 0 &&
//             pressedButtons.some((button) => button.button === 13)
//           ) {
//             setSequenceStep(1);
//           } else if (
//             sequenceStep === 1 &&
//             pressedButtons.some((button) => button.button === 15)
//           ) {
//             setSequenceStep(2);
//           } else if (
//             sequenceStep === 2 &&
//             pressedButtons.some((button) => button.button === 2)
//           ) {
//             setSpecialMove("Hadouken");
//             setSequenceStep(0);
//             setCorrectInputsCount(correctInputsCount + 1);
//             setShowGif(true);
//             setTimeout(() => {
//               setShowGif(false);
//             }, 700);
//           } else {
//             if (
//               pressedButtons.some((button) =>
//                 [13, 15, 2].includes(button.button)
//               )
//             ) {
//               setSequenceError(true);
//             }
//             setSequenceStep(0);
//             setSpecialMove("");
//           }

//           const adjustedJoystickX = gamepad.axes[0];
//           const adjustedJoystickY = gamepad.axes[1];

//           setJoystickX(adjustedJoystickX);
//           setJoystickY(adjustedJoystickY);
//         }
//       }
//     };

//     const interval = setInterval(handleGamepadInput, 100);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [sequenceStep, sequenceError, correctInputsCount, wrongInputsCount]);

//   const handleRetry = () => {
//     setCorrectInputsCount(0);
//     setWrongInputsCount(0);
//     setTotalTries(totalTries + 1);
//   };

//   return (
//     <div className="gamepad-input-screen">
//       <h1>Gamepad Input Handling</h1>
//       <Link to="/home">Back to Home</Link>
//       <div>
//         Pressed Buttons:{" "}
//         {buttonPresses.map((button, index) => (
//           <span key={index}>
//             {button.text}{" "}
//             {button.image && (
//               <img
//                 src={button.image}
//                 alt={`Button ${button.button}`}
//                 style={{ width: "24px", height: "24px" }}
//               />
//             )}
//           </span>
//         ))}
//       </div>
//       {specialMove && <div>Special Move: {specialMove}</div>}
//       <div>Correct Inputs Count: {correctInputsCount}</div>
//       <div>Wrong Inputs Count: {wrongInputsCount}</div>
//       <div>Total Tries: {totalTries}</div>
//       <button className="retry-button" onClick={handleRetry}>
//         Retry
//       </button>
//     </div>
//   );
// };

// export default ControllerTester;
