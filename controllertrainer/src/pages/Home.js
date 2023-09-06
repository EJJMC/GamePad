import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Card from "../components/Card";
import "../components/Card.css";

function Home() {
  return (
    <div className="App">
      <div className="cards-container">
        {/* Wrap Card with Link */}
        <Link to="/ControllerInput">
          <Card
            title="Card title"
            imageUrl="https://esports.gg/_next/image/?url=https%3A%2F%2Fadmin.esports.gg%2Fwp-content%2Fuploads%2F2023%2F05%2Fryu-hadoken-street-fighter-6.png&w=3840&q=75"
            body="hello"
          />
        </Link>
        {/* Wrap Card with Link */}
        <Link to="/ControllerInput">
          <Card
            title="Card title"
            imageUrl="https://esports.gg/_next/image/?url=https%3A%2F%2Fadmin.esports.gg%2Fwp-content%2Fuploads%2F2023%2F05%2Fryu-hadoken-street-fighter-6.png&w=3840&q=75"
            body="Testing"
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
