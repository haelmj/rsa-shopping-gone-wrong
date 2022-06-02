import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <h1>Michael's Weird Library</h1>
      <div className="breadcrumb">
        <Link to="/"> Home </Link> |<Link to="/about"> About </Link> |
        <Link to="/bookcase" className="bookLink">
          {" "}
          Bookcase ({props.bookLength})
        </Link>
        {props.price && <span> | Total Price: ${props.price.toFixed(2)}</span>}
      </div>
    </div>
  );
};

export default Header;
