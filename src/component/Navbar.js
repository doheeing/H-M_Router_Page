import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({authenticate}) => {
  const navigate = useNavigate()
  const gotoMainPage = () =>{
    navigate('/')
  }
  const search=(event)=>{
    if(event.key == "Enter"){
      let keyword = event.target.value
      navigate(`/?q=${keyword}`)
    }
  }
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
          <Link to="/login" className="login-text">로그인</Link>
        </div>
      </div>
      <div className="nav-section">
        <button onClick={gotoMainPage} className="main-logo"><img
          width={100}
          src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"
        /></button>
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
          <input type="text" placeholder={"Search"}onKeyPress={(event)=>search(event)}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
