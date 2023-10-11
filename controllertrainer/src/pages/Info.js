// import React from "react";
// import { Link } from "react-router-dom";
// import "../components/info.css";

// const ControllerTester = () => {
//   return (
//     <div className="Info-Text">
//       <h1>Why Use Classic ?</h1>

//       <div className="content-right">
//         {<div className="error"></div>}
//         {
//           <div>
//             When using Modern Controls, you will be working with a noticeably
//             smaller toolkit than if you were using Classic, and one of the
//             biggest drawbacks of this tradeoff is that your options for combos
//             will be much more limited.
//           </div>
//         }

//         <div>
//           Modern has preset combos, and you can craft your own combos without
//           the assist button, but if you want to squeeze as much damage out of
//           each hit as possible, you’ll want to play on Classic mode.{" "}
//         </div>
//       </div>
//       <Link to="/home">Back to Home</Link>
//     </div>
//   );
// };

// export default ControllerTester;

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../components/info.css";
import Classic from "../images/Classic.png";
import Modern from "../images/Modern.png";

function Home() {
  return (
    <div className="scrollable-container">
      <div className="title">
        <div className="text-container">
          <h3 className="info-text">
            Moder vs Classic Controls, Which One To Use:
          </h3>

          <div className="info-text">
            Street Fighter 6 has two disntinct control types for players to use
            - classic controls that require motion inputs to preform special
            moves and modern controls that require no inputs.
          </div>

          <div className="info-text">
            In order to understand the importance of learning motion inputs,
            here are the positive and negatives of using Modern Controls:
          </div>
          <h3 className="info-text">Positives of using modern controls:</h3>
          <img
            src={Modern}
            alt="Select Motion"
            style={{
              width: "10%",
              height: "auto",
              marginLeft: "auto",
              marginRight: "auto",
              transformOrigin: "center",
            }}
          />
          <h4 className="info-text">single button special and super moves</h4>
          <div>
            {" "}
            The SF6 Modern Control scheme comes with one button designated for
            special attacks. This means players can pull off special moves such
            as fireballs and dragon punches as well as super attacks much more
            quickly and with less chances for whiffing a move. There are also
            dedicated single buttons for throws and key moves such as Drive
            Impact and Drive Parry.
          </div>
        </div>

        <div className="text-container">
          <h3 className="info-text">Negatives of Using Modern:</h3>
          <h4 className="info-text">Missing Normal moves:</h4>
          <div className="info-text">
            Replacing the traditional six-button control scheme means you will
            lose some of a character’s normal moves and unique attacks. The
            impact varies by character with fighters such as Luke not losing too
            much while Ryu loses quite a bit. In addition to reducing your move
            options, this can also make you more predictable.
          </div>

          <h4 className="info-text">Damage Reduction:</h4>
          <div className="info-text">
            Performing special moves and supers via simplified Modern Controls
            reduces their damage by a certain percentage. The good news is that
            you can still manually input certain specials even when in Modern
            Control mode, allowing you to vary them and retain their damage.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
