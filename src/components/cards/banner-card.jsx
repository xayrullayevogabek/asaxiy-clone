import React from "react";
import "./banner-card.css";
import { FaStar } from "react-icons/fa";

const Card = ({ product }) => {
  const { thumbnail, id, price, rating, title, discountPercentage } = product;
  return (
    <div className="card">
      <img src={thumbnail} alt="banner-card-image" />
      <span className="title">
        {title.length > 24 ? title.slice(0, 24) + "..." : title}
      </span>
      <div className="rating-container">
        <span className="rm-price">{price + 100 * 11000}</span>
        <span className="percent">{discountPercentage}%</span>
      </div>
      <div className="rating-container">
        <span className="price">{price * 11000}</span>
        <span className="rating">
          <FaStar style={{color:"#FE7300", marginRight:"5px"}}/>
          {rating}
        </span>
      </div>
      <button>05.01.2024</button>
    </div>
  );
};

export default Card;
