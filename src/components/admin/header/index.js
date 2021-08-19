/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ToggleData from "./ToggleData";
import { searchResultData, EnvelopData, NotifyData, userDetail } from "./Data";
import Search from "./Search";
import UserDropdown from "./UserDropdown";
// import Auth from '../../../../config/auth';

const Header = () => {
  return (
    <div>
      <div className="navbar-bg" />
      <nav className="navbar navbar-expand-lg main-navbar">
        <form className="form-inline mr-auto">
        
        </form>
        <ul className="navbar-nav navbar-right">
        

          <UserDropdown userDetail={userDetail} />
        </ul>
      </nav>
    </div>
  );
};

export default Header;
