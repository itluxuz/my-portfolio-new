import React, { useState } from "react";
import { ImTelegram } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import{MdEmail}from"react-icons/md";

export default function Footer() {
    return (
      <>
        <div className="footer-section">
          <div className="container d-flex   footer-media  align-items-center justify-content-between ">
            <div className="d-flex icon-text gap-3 ">
              <h2 className="text-footer">Contact me</h2>
              <div className="icons d-flex gap-1 ">
                <a
                  className="footer-icons"
                  href="https://t.me/az1zov1ch_a"
                  target="_blank"
                >
                  <ImTelegram className="icon-footer" />
                </a>
                <a
                  className="footer-icons "
                  href="https://instagram.com/it_lux_uzb/"
                  target="_blank"
                >
                  <RiInstagramFill className="icon-footer" />
                </a>
                <a
                  className="footer-icons  "
                  href="https://mail.google.com/mail/u/0/?tab=rm#inbox"
                  target="_blank"
                >
                  <MdEmail className="icon-footer" />
                </a>
                <a
                  className="footer-icons  "
                  href="tel:+998977401448"
                  target="_blank"
                >
                  <BsFillTelephoneFill className="icon-footer" />
                </a>
              </div>
            </div>
            <h3 className="motto "> "ISH" BILAN ISHNING FARQI BOR </h3>
          </div>
        </div>
      </>
    );
}
