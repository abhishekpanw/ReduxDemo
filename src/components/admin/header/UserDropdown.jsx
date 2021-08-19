import React, { Component } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAdmin, isAuthenticated, signout } from "../../../helpers";

function UserDropdown({userDetail}) {

  const state = useSelector(state => state.auth)
  console.log(state);
  return (
    <li className="dropdown">
    <a
      href="#"
      data-toggle="dropdown"
      className="nav-link dropdown-toggle nav-link-lg nav-link-user"
    >
      <img
        alt="image"
        src={userDetail.userImg}
        className="rounded-circle mr-1"
      />
      <div className="d-sm-none d-lg-inline-block">
      {state.user.email || getAdmin().email}
      </div>
    </a>
    <div className="dropdown-menu dropdown-menu-right">
     

      {userDetail.datas.map((data, idata) => {
        return (
          <NavLink
            key={idata}
            to={data.link}
            activeStyle={{
              color: "#6777ef",
            }}
            exact
            className="dropdown-item has-icon"
          >
            <i className={data.icode} /> {data.title}
          </NavLink>
        );
      })}

      <div className="dropdown-divider" />
      <a
       
        className="dropdown-item has-icon text-danger"
        onClick= {signout}
      >
        <i className={userDetail.logoutIcon} /> {userDetail.logoutTitle}
      </a>
    </div>
  </li>
  )
}


export default UserDropdown;
