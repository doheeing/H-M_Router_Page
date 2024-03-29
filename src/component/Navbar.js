import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  let [width, setWidth] = useState(0);
  const gotoMainPage = () => {
    navigate("/");
  };
  const search = (event) => {
    if (event.key == "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  const changeToLogin = () => {
    if (authenticate == false) {
      //로그아웃상태면
      navigate("/login"); // 로그인 페이지로 이동
    } else {
      //로그인 상태면
      setAuthenticate(false);
      navigate("/login");
    }
  };
  const checkLogin = () => {
    return authenticate == true ? "로그아웃" : "로그인";
  };
  const openNav = () => {};

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
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menulist.map((menu) => (
            <button>{menu}</button>
          ))}
        </div>
      </div>
      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div onClick={changeToLogin} className="login-text">
            {checkLogin()}
          </div>
        </div>
      </div>
      <div className="nav-section">
        <button onClick={gotoMainPage} className="main-logo">
          <img
            width={100}
            src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"
          />
        </button>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menulist.map((menu) => (
            <button>{menu}</button>
          ))}
        </ul>
        <div className="search-space">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder={"Search"}
            onKeyPress={(event) => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
