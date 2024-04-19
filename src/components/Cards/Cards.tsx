import { Link } from "react-router-dom";
// import React from 'react';
import { CardProps } from "../Home/Home";
import "./card.css";

const Card: React.FC<CardProps> = ({ description, imageUrl, name, price }) => {
  // Define the array to repeat the image four times

  return (
    <div className="card-container">
      <div className="card">
      <Link to="/product-details">
        <img
          className="card-img-top"
          src={imageUrl}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-price">
            <h5>RS {price}</h5>
          </p>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
