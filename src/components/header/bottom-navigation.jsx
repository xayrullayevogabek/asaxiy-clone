import React from "react";
import { useTranslation } from "react-i18next";
import "./header.css";

const navigations = [
  {
    title: {
      uz: "Chegirmalar",
      ru: "Скидки",
    },
  },
  {
    title: {
      uz: "Sport buyumlari",
      ru: "Спорт товары",
    },
  },
  {
    title: {
      uz: "Yangi kelganlar",
      ru: "Новинки",
    },
  },
  {
    title: {
      uz: "Kitoblar",
      ru: "Книги",
    },
  },
  {
    title: {
      uz: "Telefonlar va gadjetlar",
      ru: "Телефоны и гаджеты",
    },
  },
  {
    title: {
      uz: "Noutbuklar",
      ru: "Ноутбуки",
    },
  },
  {
    title: {
      uz: "Maishiy texnika",
      ru: "Бытовая техника",
    },
  },
];

const BottomNavigation = () => {
  const { i18n } = useTranslation();

  const currentLocale = i18n.language
  return (
    <div className="navigation">
      {navigations.map((item) => (
        <a href="#">{item.title[currentLocale]}</a>
      ))}
    </div>
  );
};

export default BottomNavigation;
