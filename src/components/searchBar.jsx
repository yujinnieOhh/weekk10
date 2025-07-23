import React from "react";
import logo from "../assets/onlyBF.png";
import userPage from "../assets/user-page.svg";
import { NavLink } from "react-router-dom";

export default function SearchBar({ value, onChange }) {
  return (
    <>
      <div className="flex flex-row space-x-10">
        <NavLink to="mainPage">
          <img src={logo} alt="logo" />
        </NavLink>
        <NavLink to="/myPage">
          <img src={userPage} alt="my page" />
        </NavLink>
      </div>

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="구매하고 싶은 물품을 검색해주세요"
        style={{ padding: "8px" }}
      />
    </>
  );
}
