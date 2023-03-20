import React from "react";
import logo from "../../../src/assets/icon.png";
import "./Header.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import BasicMenu from "./ProfileMenu";
import SimpleBottomNavigation from "./BottomNav";

function Header() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar-logo" />
      <div className="search-bar">
        <div className="search-bar-text">Search through the dumpster!</div>
        <div className="search-icon-div">
          <SearchRoundedIcon className="search-icon" />
        </div>
      </div>
      <div className="profile-container">
        <div>
        {/* <div className="airbnb-your-home">Dumpster your home</div>
        <div className="globe-icon">
          <LanguageIcon /> */}
        </div>
        <div className="profile-div">
            <BasicMenu />
        </div>
      </div>
      <SimpleBottomNavigation />
    </div>
  );
}

export default Header;
