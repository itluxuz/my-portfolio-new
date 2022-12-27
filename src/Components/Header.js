import React, { useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="container header ">
        <div>
          <NavLink to={"/"}>
            <img className="logo" src="./logoo.png" />
          </NavLink>
        </div>
        <div className=" menu d-none d-md-flex ">
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#ff6464" : "#03989E",
                borderColor: isActive ? "#ff6464" : "#03989E",
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
                color: isActive ? "#ff6464" : "#03989E",
                borderColor: isActive ? "#ff6464" : "#03989E",
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
                color: isActive ? "#ff6464" : "#03989E",
                borderColor: isActive ? "#ff6464" : "#03989E",
              };
            }}
            className=" list"
            to={"/projekt"}
          >
            Projekt
          </NavLink>
        </div>
        <div className="d-md-none">
          <button className="btn button" onClick={() => setOpen(!open)}>
            <BiMenuAltRight />
          </button>
        </div>
        <div
          className="headerMenu d-md-none"
          style={{
            position: "absolute",
            top: 0,
            left: open ? 0 : -200,
          }}
        >
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#ff6464" : "#03989E",
                borderColor: isActive ? "#ff6464" : "#03989E",
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
                color: isActive ? "#ff6464" : "#03989E",
                borderColor: isActive ? "#ff6464" : "#03989E",
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
                color: isActive ? "#ff6464" : "#03989E",
                borderColor: isActive ? "#ff6464" : "#03989E",
              };
            }}
            className=" list"
            to={"/projekt"}
          >
            Projekt
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
}
