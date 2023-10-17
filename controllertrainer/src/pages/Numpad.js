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
import Numpadimg from "../images/NumpadNotation3.png";

function Home() {
  return (
    <div className="scrollable-container">
      <div className="title">
        <div className="text-container">
          <Link to="/home" style={{ color: "white" }}>
            Back to Home
          </Link>
          <h3 className="info-text">Numpad Notations, What are they?</h3>
          Numpad notation is a form of fighting game notation in which the
          directions that you may move in a fighting game are mapped to the
          layout of a keyboard's numpad. The notation is oriented as follows,
          with the "N" in the middle representing "neutral:"
          <div className="info-text"></div>
          <h3 className="info-text">Infographic Of Numpad:</h3>
          <img
            src={Numpadimg}
            alt="Select Motion"
            style={{
              width: "100%",
              height: "auto",
              marginLeft: "auto",
              marginRight: "auto",
              transformOrigin: "center",
            }}
          />
          <h4 className="info-text">single button special and super moves</h4>
          <div>
            {" "}
            Numpad notation is the most convenient way to quickly transcribe
            complex inputs and combos. It originated as an easy way of
            discussing fighting game commands before arrow keys were commonly
            available on computer character sets. They are now mostly in vogue
            within anime fighter scenes, but are being used for this project as
            some of the more obscure fighters have complicated inputs and
            combos.
          </div>
        </div>

        <div className="text-container">
          <h4 className="info-text">Common Examples of Motion Notations For Quarter-Circle Forward (QCF):</h4>
          <div className="info-text">
            Standard notation: d, df, f (down, down forward, forward)
          </div>
          <div className="info-text">Numpad notation: 236</div>

          <h4 className="info-text">Damage Reduction:</h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
