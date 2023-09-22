// import React from "react";
// import { Link } from "react-router-dom";
// import Card from "../components/Card";
// import "../components/Card.css";

// function Home() {
//   return (
//     <div className="App">
//       <div className="cards-container">
//         <Link to="/ControllerInput">
//           <Card
//             title="Card title"
//             imageUrl="https://esports.gg/_next/image/?url=https%3A%2F%2Fadmin.esports.gg%2Fwp-content%2Fuploads%2F2023%2F05%2Fryu-hadoken-street-fighter-6.png&w=3840&q=75"
//             body="hello"
//           />
//         </Link>

//         <Link to="/ControllerInput">
//           <Card
//             title="Card title"
//             imageUrl="https://esports.gg/_next/image/?url=https%3A%2F%2Fadmin.esports.gg%2Fwp-content%2Fuploads%2F2023%2F05%2Fryu-hadoken-street-fighter-6.png&w=3840&q=75"
//             body="Testing"
//           />
//         </Link>

//         <Link to="/ControllerInput">
//           <Card
//             title="Card title"
//             imageUrl="https://esports.gg/_next/image/?url=https%3A%2F%2Fadmin.esports.gg%2Fwp-content%2Fuploads%2F2023%2F05%2Fryu-hadoken-street-fighter-6.png&w=3840&q=75"
//             body="Testing"
//           />
//         </Link>
//       </div>
//       <div className="text-container">
//         <h2>Text Above the Cards</h2>
//         <p>This is some additional information or description.</p>
//       </div>
//     </div>
//   );
// }

// export default Home;
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/Card.css";
import selectMotionImage from "../images/select motion.png";
import selectQCFImage from "../images/QCFmotions.png";

function Home() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
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
            transformOrigin: "center",
          }}
        />
        <div className="text-container">
          <h3>Classic Controls Motion Input Trainer</h3>
          <Link to="/Info">
            <div className="clickable-text">
              Why Should I use Classic Controls ?
            </div>
          </Link>
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
          <img
            src="https://esports.gg/_next/image/?url=https%3A%2F%2Fadmin.esports.gg%2Fwp-content%2Fuploads%2F2023%2F05%2Fryu-hadoken-street-fighter-6.png&w=3840&q=75"
            alt="A beautiful sunset over the mountains"
            style={{
              width: "50%",
              height: "auto",
            }}
          />
          <Link to="/ControllerInput">
            <div className="clickable-text">qcf + p Motion</div>
          </Link>
        </div>

        <div className="image-container">
          <img
            src="https://esports.gg/_next/image/?url=https%3A%2F%2Fadmin.esports.gg%2Fwp-content%2Fuploads%2F2023%2F05%2Fryu-hurricane-kick-sf6.png&w=750&q=75"
            alt="A beautiful sunset over the mountains"
            style={{
              width: "40%",
              height: "auto",
            }}
          />
          <Link to="/ControllerInput">
            <div className="clickable-text">qcb + k Motion </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
