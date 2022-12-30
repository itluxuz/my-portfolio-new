import React, { useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import Logo from "../assets/logoo.png";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="container header ">
        <div>
          <NavLink to={"/"}>
            <img className="logo" src={Logo} />
          </NavLink>
        </div>
        <div className=" menu d-none d-md-flex justify-content-end">
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#000" : "#03989E",
                borderColor: isActive ? "#ff6464" : "#03989E",
                backgroundColor: isActive ? "#ff6464" : "transparent",
              };
            }}
            className=" list"
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#000" : "#03989E",
                borderColor: isActive ? "#ff6464" : "#03989E",
                backgroundColor: isActive ? "#ff6464" : "transparent",
              };
            }}
            className=" list"
            to={"/about"}
          >
            About
          </NavLink>

          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#000" : "#03989E",
                borderColor: isActive ? "#ff6464" : "#03989E",
                backgroundColor: isActive ? "#ff6464" : "transparent",
              };
            }}
            className=" list"
            to={"/projekt"}
          >
            Project
          </NavLink>
        </div>
        <div className="d-md-none d-flex justify-content-end">
          <button className="btn button" onClick={() => setOpen(!open)}>
            <BiMenuAltRight />
          </button>
        </div>
        <div
          className="headerMenu d-md-none  "
          style={{
            position: "absolute",
            top: 0,
            left: open ? 0 : -200,
          }}
        >
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#000" : "#03989E",
                borderColor: isActive ? "#ff6464" : "#03989E",
                backgroundColor: isActive ? "#ff6464" : "transparent",
              };
            }}
            className=" list"
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#000" : "#03989E",
                borderColor: isActive ? "#ff6464" : "#03989E",
                backgroundColor: isActive ? "#ff6464" : "transparent",
              };
            }}
            className=" list"
            to={"/about"}
          >
            About
          </NavLink>

          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#000" : "#03989E",
                borderColor: isActive ? "#ff6464" : "#03989E",
                backgroundColor: isActive ? "#ff6464" : "transparent",
              };
            }}
            className=" list"
            to={"/projekt"}
          >
            Project
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
}
