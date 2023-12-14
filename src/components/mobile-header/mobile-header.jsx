import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import Form from "../search-form/search-from";
import "./mobile-header.css";
import Sidebar from "./sidebar";

const MobileHeader = ({ changeLanguage, lang }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mb-header-container">
        <div className="mobile-left">
          <button onClick={() => setIsOpen(!isOpen)}>
            <IoMenuOutline />
          </button>
          <img
            src="https://marketing.uz/uploads/articles/2596/article-original.png"
            alt="logo"
          />
        </div>
        <div className="mobile-right">
          {lang === "uz" ? (
            <button onClick={() => changeLanguage("ru")}>Русский</button>
          ) : (
            <button onClick={() => changeLanguage("uz")}>O'zbekcha</button>
          )}
        </div>
      </div>
      <Form  className={"d-none"}/>
      <Sidebar open={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default MobileHeader;
