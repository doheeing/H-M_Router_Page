import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const menulist = [
    "Women",
    "Men",
    "Baby",
    "Kids",
    "HOME",
    "Sport",
    "Sale",
    "지속가능성",
  ];
  return (
    <div>
      <div>
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div className="login-text">로그인 </div>
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"
        />
      </div>
      <div className="menu-area">
        <div className="empty-space">

        </div>
        <ul className="menu-list">
          {menulist.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="search-space">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder={"Search"}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
