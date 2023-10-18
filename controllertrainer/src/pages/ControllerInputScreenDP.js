// import React, { useEffect, useState } from "react";
// import { Link, Redirect } from "react-router-dom";
// import "./ControllerInput.css";
// import correctSequenceGif from "../images/ryusrk.gif";
// import DownArrow from "../images/Down.png";
// import FowardArrow from "../images/Foward.png";
// import Punch from "../images/Punch.png";
// import defaultGif from "../images/Ryu3s-stance.gif";
// import TopNavbar from "./TopNavbar";

// import selectQCFImage from "../images/zmotion.png";

// import QCFmotion from "../images/ZMotOneinput.png";

// import QCFgif from "../images/qcf.gif";

// // Define image URLs for each button
// const buttonImages = {
//   13: DownArrow,
//   15: FowardArrow,
//   2: Punch,
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
//       const pressedButtons = [];

//       for (const gamepad of gamepads) {
//         if (gamepad) {
//           for (let i = 0; i < gamepad.buttons.length; i++) {
//             if (gamepad.buttons[i].pressed) {
//               pressedButtons.push({ button: i, image: buttonImages[i] });
//             }
//           }

//           // Handle joystick input
//           const adjustedJoystickX = gamepad.axes[0];
//           const adjustedJoystickY = gamepad.axes[1];

//           setJoystickX(adjustedJoystickX);
//           setJoystickY(adjustedJoystickY);
//         }
//       }

//       // Append newly pressed buttons to the existing ones, but keep a maximum length of 10
//       setButtonPresses((prevButtonPresses) =>
//         [...prevButtonPresses, ...pressedButtons].slice(-10)
//       ); // Only keep the last 10 entries

//       if (sequenceError) {
//         setSequenceError(false);
//         setWrongInputsCount(wrongInputsCount + 1);
//       }

//       if (
//         sequenceStep === 0 &&
//         pressedButtons.some((button) => button.button === 15)
//       ) {
//         setSequenceStep(1);
//       } else if (
//         sequenceStep === 1 &&
//         pressedButtons.some((button) => button.button === 13)
//       ) {
//         setSequenceStep(2);
//       } else if (
//         sequenceStep === 2 &&
//         pressedButtons.some((button) => button.button === 2)
//       ) {
//         setSpecialMove("Hadouken");
//         setSequenceStep(0);
//         setCorrectInputsCount(correctInputsCount + 1);
//         setShowGif(true);
//         setTimeout(() => {
//           setShowGif(false);
//         }, 1300);
//       } else {
//         if (
//           pressedButtons.some((button) => [13, 15, 2].includes(button.button))
//         ) {
//           setSequenceError(true);
//         }
//         setSequenceStep(0);
//         setSpecialMove("");
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
//       <TopNavbar />

//       <img
//         className="qcf"
//         src={selectQCFImage}
//         alt="Select Motion"
//         style={{
//           width: "50%",
//           height: "auto",
//           transformOrigin: "center",
//         }}
//       />

//       <img
//         className="otherimage"
//         src={QCFmotion}
//         alt="Select Motion"
//         style={{
//           width: "50%",
//           height: "auto",
//           transformOrigin: "center",
//         }}
//       />

//       {/* <img
//         className="qcfGIF"
//         src={QCFgif}
//         alt="Select Motion"
//         style={{
//           width: "50%",
//           height: "auto",
//           transformOrigin: "center",
//         }}
//       /> */}

//       <div className="content-right">
//         <div>Correct Inputs Count: {correctInputsCount}</div>
//         <div>Wrong Inputs Count: {wrongInputsCount}</div>
//         <div>Total Tries: {totalTries}</div>
//         {/* {specialMove && <div>Special Move: {specialMove}</div>}
//         {sequenceError && <div className="error">Incorrect Sequence</div>} */}

//         <button
//           className="retry-button"
//           onClick={handleRetry}
//           style={{
//             padding: "10px 20px", // Add padding for better spacing
//             background: "purple", // Change the background color
//             border: "none", // Remove the border
//             borderRadius: "5px", // Add rounded corners
//             color: "white", // Change the text color to white
//             cursor: "pointer", // Change the cursor to a pointer on hover
//             boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
//           }}
//         >
//           Retry
//         </button>

//         <button
//           className="retry-button"
//           onClick={handleRetry}
//           style={{
//             padding: "10px 20px", // Add padding for better spacing
//             background: "purple", // Change the background color
//             border: "none", // Remove the border
//             borderRadius: "5px", // Add rounded corners
//             color: "white", // Change the text color to white
//             cursor: "pointer", // Change the cursor to a pointer on hover
//             boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
//             textDecoration: "none", // Remove the underline from the link
//           }}
//         >
//           <Link to="/home" style={{ color: "white" }}>
//             Back to Home
//           </Link>
//         </button>
//       </div>

//       <div className="content-left">
//         <div className="icon-container">
//           {buttonPresses.map((button, index) => (
//             <div key={index} className="icon">
//               {button.image && (
//                 <img
//                   src={button.image}
//                   alt={`Button ${button.button}`}
//                   style={{ width: "50px", height: "50px" }}
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {showGif && (
//         <div className="gif-container">
//           <img src={correctSequenceGif} alt="Correct Sequence" />
//         </div>
//       )}

//       <div
//         className={`default-gif ${showGif ? "hidden" : ""}`}
//         style={{
//           position: "absolute",
//           top: "360px",
//           left: "50px",
//           width: "50px",
//           height: "50px",
//         }}
//       >
//         <img src={defaultGif} alt="Default GIF" />
//       </div>
//     </div>
//   );
// };

// export default ControllerTester;

import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./ControllerInput.css";

import correctSequenceGif from "../images/ryusrk.gif";
import DownArrow from "../images/Down.png";
import FowardArrow from "../images/Foward.png";
import BackArrow from "../images/Back.png";
import UpArrow from "../images/Up.png";
import DignalArrow from "../images/dignal.png";
import Punch from "../images/Punch.png";
import defaultGif from "../images/Ryu3s-stance.gif";
import TopNavbar from "./TopNavbar";

import selectQCFImage from "../images/zmotion.png";

import QCFmotion from "../images/ZMotOneinput.png";

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

      if (sequenceStep === 0) {
        if (pressedButtons.some((button) => button.button === 15)) {
          setSequenceStep(1);
        }
      } else if (sequenceStep === 1) {
        if (pressedButtons.some((button) => button.button === 13)) {
          setSequenceStep(2);
        }
      } else if (sequenceStep === 2) {
        if (pressedButtons.some((button) => button.button === 15)) {
          setSequenceStep(3); // This is the new step to check for the second "15".
        } else if (pressedButtons.some((button) => button.button === 2)) {
          setSequenceError(true);
          setSequenceStep(0);
          setSpecialMove("");
        }
      } else if (sequenceStep === 3) {
        if (pressedButtons.some((button) => button.button === 2)) {
          setSpecialMove("Hadouken");
          setSequenceStep(0);
          setCorrectInputsCount(correctInputsCount + 1);
          setShowGif(true);
          setTimeout(() => {
            setShowGif(false);
          }, 700);
        } else if (pressedButtons.some((button) => button.button === 15)) {
          // If "15" is pressed again, it restarts the sequence.
          setSequenceStep(2);
        }
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
        <div className="zmot-container">
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
        <div className="kendp-container">
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
