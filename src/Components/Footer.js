import React, { useState } from "react";
import { ImTelegram } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import{MdEmail}from"react-icons/md";

export default function Footer() {
    return (
      <>
        <div className="footer-section">
          <div className="container d-flex align-items-center justify-content-between ">
            <div className="icons">
              <h2 className="text-footer">Contact me</h2>
              <a
                className="footer-icons d-flex align-items-center"
                href="https://t.me/az1zov1ch_a"
                target="_blank"
              >
                <ImTelegram className="icon-footer" />
                <p>@az1zov1ch_a </p>
              </a>
              <a
                className="footer-icons d-flex align-items-center"
                href="https://instagram.com/it_lux_uzb/"
                target="_blank"
              >
                <RiInstagramFill className="icon-footer" />
                <p>@it_lux_uzb</p>
              </a>
              <a
                className="footer-icons d-flex align-items-center "
                href="https://mail.google.com/mail/u/0/?tab=rm#inbox"
                target="_blank"
              >
                <MdEmail className="icon-footer" />
                <p>itluxa@gmail.com</p>
              </a>
            </div>
            <h3  className="motto "> "ISH" BILAN ISHNING FARQI BOR </h3>
          </div>
        </div>
      </>
    );
}
