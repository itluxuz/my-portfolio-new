import React from "react";
import MyPhoto from "../assets/me.png";
export default function About() {
  return (
    <div>
      <div className="name container">
        <h2 className="my-name">Latifjonov Abdulaziz Azizovich </h2>
        <img className=" my-photo img-fluid" src={MyPhoto}></img>

        <h2 className="my-year">The year is: 2006</h2>
      </div>

      <hr></hr>
      <div className=" jobs d-block  align-items-center   container">
        <h2 className="text-jobs media-text ">JOBS</h2>
        <div className="menu-jobs  justify-content-evenly   d-flex  ">
          <div className="developer">
            <h2 className=" media-text special-text">Front End Developer</h2>
            <h4 className=" media-text jobs-texts">
              <span className="special-text">Experience:</span> 1 year
            </h4>
            <h4 className=" media-text jobs-texts">
              <span className="  media-text special-text">Projects:</span>{" "}
              Quran, Weather
            </h4>
            <h4 className="jobs-texts  media-text">
              <span className="special-text">Level:</span> Junior
            </h4>
          </div>
          <div className="line"></div>
          <div className=" media-text smm-manager ">
            <h2 className="  media-text special-text"> SMM Manager </h2>
            <h4 className="  media-text jobs-texts">
              <span className="  media-text special-text">Experience:</span> 6
              month
            </h4>
            <h4 className=" media-text jobs-texts">
              <span className=" media-text special-text">Projects:</span> Lux
              Tuning UZ
            </h4>
            <h4 className="  media-text jobs-texts">
              <span className=" media-text special-text">Level:</span> Beginner
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
