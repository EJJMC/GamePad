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
import React from "react";
import { Link } from "react-router-dom";
import "../components/Card.css";
import selectMotionImage from "../images/select motion.png"; // Adjust the path as needed

function Home() {
  return (
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
        <h2>Text Above the Cards</h2>
        <p>This is some additional information or description.</p>
      </div>
      <div className="cards-container">
        <Link to="/ControllerInput">
          <div className="clickable-text">Click Me 1</div>
        </Link>

        <Link to="/ControllerInput">
          <div className="clickable-text">Click Me 2</div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
