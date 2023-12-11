import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import { BsCreditCard } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import BottomNavigation from "./bottom-navigation";
import MobileHeader from "../mobile-header/mobile-header";
import "./header.css";

const Header = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <header>
        <div className="left">
          <img
            src="https://marketing.uz/uploads/articles/2596/article-original.png"
            alt=""
          />
          <button className="category">
            <IoMenuOutline className="category-icon" />
            {t("header.category")}
          </button>
          <form>
            <input type="text" placeholder={t("header.search") + "..."} />
            <button>{t("header.search")}</button>
          </form>
        </div>
        <div className="right">
          <ul>
            <li>
              <a href="#">
                <BsCreditCard className="header-icon" />
                {t("header.pay")}
              </a>
            </li>
            <li>
              <a href="#">
                <TbTruckDelivery className="header-icon" />
                {t("header.treck")}
              </a>
            </li>
            <li>
              <a href="#">
                <MdOutlineShoppingCart className="header-icon" />
                {t("header.shop")}
              </a>
            </li>
            <li>
              <a href="#">
                <FaRegHeart className="header-icon" />
                {t("header.favorites")}
              </a>
            </li>

            {i18n.language === "uz" ? (
              <li>
                <a onClick={() => handleChangeLanguage("ru")} href="#">
                  <img
                    className="header-image"
                    src="https://asaxiy.uz/custom-assets/images/icons/header/language-ru.svg"
                    alt=""
                  />
                  Русский
                </a>
              </li>
            ) : (
              <li>
                <a onClick={() => handleChangeLanguage("uz")} href="#">
                  <img
                    className="header-image"
                    src="https://asaxiy.uz/custom-assets/images/icons/header/language-uz.svg"
                    alt=""
                  />
                  O'zbekcha
                </a>
              </li>
            )}

            <li>
              <a href="#">
                <FiUser className="header-icon" />
                {t("header.signIn")}
              </a>
            </li>
          </ul>
        </div>
      </header>
      <MobileHeader  changeLanguage={handleChangeLanguage} lang={i18n.language}/>
      <BottomNavigation />
    </>
  );
};

export default Header;
