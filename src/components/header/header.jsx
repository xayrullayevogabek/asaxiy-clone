import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import { BsCreditCard } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="left">
        <img
          src="https://marketing.uz/uploads/articles/2596/article-original.png"
          alt=""
        />
        <button className="category">
          <IoMenuOutline className="category-icon"/>
          Bo'limlar
        </button>
        <form>
          <input type="text" placeholder="Qidirish..." />
          <button>Qidirish</button>
        </form>
      </div>
      <div className="right">
        <ul>
          <li>
            <a href="#">
              <BsCreditCard className="header-icon"/>
              To'lov
            </a>
          </li>
          <li>
            <a href="#">
              <TbTruckDelivery  className="header-icon"/>
              Trek
            </a>
          </li>
          <li>
            <a href="#">
              <MdOutlineShoppingCart  className="header-icon"/>
              Savatcha
            </a>
          </li>
          <li>
            <a href="#">
              <FaRegHeart  className="header-icon"/>
              Sevimlilar
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className="header-image"
                src="https://asaxiy.uz/custom-assets/images/icons/header/language-uz.svg"
                alt=""
              />
              O'zbekcha
            </a>
          </li>
          <li>
            <a href="#">
              <FiUser  className="header-icon"/>
              Kirish
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
