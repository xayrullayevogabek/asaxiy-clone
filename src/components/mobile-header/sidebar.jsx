import React from "react";
import { BsCreditCard } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import {
  FaInfoCircle,
  FaRegHeart,
  FaRegNewspaper,
  FaUsers,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./sidebar.css";

const navigations = [
  {
    translations: {
      uz: {
        title: "To'lov",
      },
      ru: {
        title: "Оплатит",
      },
    },
    href: "#",
    icon: BsCreditCard,
  },
  {
    translations: {
      uz: {
        title: "Buyurtmani kuzatib borish",
      },
      ru: {
        title: "Отследить",
      },
    },
    href: "#",
    icon: TbTruckDelivery,
  },
  {
    translations: {
      uz: {
        title: "Sevimlilar",
      },
      ru: {
        title: "Избранное",
      },
    },
    href: "#",
    icon: FaRegHeart,
  },
  {
    translations: {
      uz: {
        title: "Yangi kelganlar",
      },
      ru: {
        title: "Новые поступления",
      },
    },
    href: "#",
    icon: FaUsers,
  },
  {
    translations: {
      uz: {
        title: "Yangiliklar",
      },
      ru: {
        title: "Новости",
      },
    },
    href: "#",
    icon: FaRegNewspaper,
  },
  {
    translations: {
      uz: {
        title: "Biz haqimizda",
      },
      ru: {
        title: "O нас",
      },
    },
    href: "#",
    icon: FaInfoCircle,
  },
];

const Sidebar = ({ open, setIsOpen }) => {
  const { i18n } = useTranslation();
  return (
    <div
      className={`${open ? "overlay" : ""}`}
      onClick={() => setIsOpen(false)}
    >
      <div className={`sidebar ${open ? "active" : ""} `}>
        <div className="top-section">
          <button onClick={() => setIsOpen(false)}>
            <IoClose />
          </button>
          <img
            src="https://marketing.uz/uploads/articles/2596/article-original.png"
            alt="logo"
          />
        </div>
        <div className="navigation-container">
          {navigations.map((item, index) => (
            <a key={index} href={item.href}>
              <item.icon className="sidebar-icon" />
              {item.translations[i18n.language].title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
