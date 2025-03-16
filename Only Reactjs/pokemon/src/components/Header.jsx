import React from "react";
import "./header.css";
const Header = (props) => {
  return (
    <div className="header">
      <h4>{props.heading}</h4>
    </div>
  );
};

export default Header;
