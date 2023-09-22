// import React from "react";
// import { Link } from "react-router-dom";
// import "../components/info.css";

// function Info() {
//   return (
//     <div className="info-page-container">
//       <div className="flipped-text-container">
//         <h2 className="flipped-text">Information Page</h2>
//       </div>
//       <div className="flipped-text-container">
//         <p className="rotate-180 flipped-text">
//           This is the information page.
//           <br />
//           You can add any relevant information or content here.
//         </p>
//       </div>
//       {/* <Link to="/Home">
//         <div className="rotate-180">Go back to Home</div>
//       </Link> */}
//     </div>
//   );
// }

// export default Info;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./ControllerInput.css";

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

//   useEffect(() => {
//     const handleGamepadInput = () => {
//       const gamepads = navigator.getGamepads();
//       for (const gamepad of gamepads) {
//         if (gamepad) {
//           const pressedButtons = [];
//           for (let i = 0; i < gamepad.buttons.length; i++) {
//             if (gamepad.buttons[i].pressed) {
//               pressedButtons.push(i);
//             }
//           }
//           setButtonPresses(pressedButtons);

//           if (sequenceError) {
//             setSequenceError(false);
//             setWrongInputsCount(wrongInputsCount + 1);
//           }

//           if (sequenceStep === 0 && gamepad.buttons[13].pressed) {
//             setSequenceStep(1);
//           } else if (sequenceStep === 1 && gamepad.buttons[15].pressed) {
//             setSequenceStep(2);
//           } else if (sequenceStep === 2 && gamepad.buttons[2].pressed) {
//             setSpecialMove("Hadouken");
//             setSequenceStep(0);
//             setCorrectInputsCount(correctInputsCount + 1);
//           } else {
//             if (
//               gamepad.buttons[13].pressed ||
//               gamepad.buttons[15].pressed ||
//               gamepad.buttons[2].pressed
//             ) {
//               setSequenceError(true);
//             }
//             setSequenceStep(0);
//             setSpecialMove("");
//           }

//           // Handle joystick input
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
//       <Link to="/home">Back to Home</Link> {/* Add a Link to the Home page */}
//       <div>Pressed Buttons: {buttonPresses.join(", ")}</div>
//       {/* <div>Joystick X: {joystickX.toFixed(2)}</div>
//       <div>Joystick Y: {joystickY}</div> */}
//       {sequenceError && <div className="error">Incorrect Sequence</div>}
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

import React from "react";
import { Link } from "react-router-dom";
import "./ControllerInput.css";

const ControllerTester = () => {
  return (
    <div className="gamepad-input-screen">
      <h1>Why Use Classic ?</h1>

      <div className="content-right">
        {<div className="error"></div>}
        {
          <div>
            When using Modern Controls, you will be working with a noticeably
            smaller toolkit than if you were using Classic, and one of the
            biggest drawbacks of this tradeoff is that your options for combos
            will be much more limited.
          </div>
        }

        <div>
          Modern has preset combos, and you can craft your own combos without
          the assist button, but if you want to squeeze as much damage out of
          each hit as possible, you’ll want to play on Classic mode.{" "}
        </div>
      </div>
      <Link to="/home">Back to Home</Link>
    </div>
  );
};

export default ControllerTester;
