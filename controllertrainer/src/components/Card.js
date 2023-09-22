import React from "react";
import "./Card.css";

function Card({ title, body, images }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <div className="image-scroll-container">
          {images.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt=""
              style={{
                width: "50%",
                height: "auto",
              }}
            />
          ))}
        </div>
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default Card;
