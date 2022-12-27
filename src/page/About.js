import React from "react";

export default function About() {
  return (
    <div>
      <div className="name container">
        <h2 className="my-name">Latifjonov Abdulaziz Azizovich </h2>
        <img className=" my-photo img-fluid" src="./me.png"></img>

        <h2 className="my-year">The year is: 2006</h2>
      </div>
      <div className=" jobs d-flex align-items-center gap-5 justify-content-center  container">
        <h2>JOBS</h2>
        <div className="menu-jobs" >
        <div className="developer">
          <h2>Front End Developer</h2>
        </div>
        <div className="smm-manger">
          <h2> SMM Manager </h2>
        </div>
      </div>

        </div>
    </div>
  );
}
