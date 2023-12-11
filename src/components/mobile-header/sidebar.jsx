import React from "react";
import "./sidebar.css";

const Sidebar = ({ open, setIsOpen }) => {
  return (
    <div
      className={`${open ? "overlay" : ""}`}
      onClick={() => setIsOpen(false)}
    >
      <div className={`sidebar ${open ? "active" : ""} `}></div>
    </div>
  );
};

export default Sidebar;
