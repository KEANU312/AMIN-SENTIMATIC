import React from "react";
import { Link } from "react-router-dom";
import "./footer.styles.scss";

export const Footer = () => {
  return (
    <div className="footer-main">
      <p className="footer-p">Best Tech Site</p>
      <div className="footer-links">
        <Link className="footer-links-nav" to="">
          Terms and conditions
        </Link>
        <Link className="footer-links-nav" to="">
          Privacy policy
        </Link>
        <Link className="footer-links-nav" to="">
          About us
        </Link>
        <Link className="footer-links-nav" to="">
          Donate
        </Link>
        <Link className="footer-links-nav" to="">
          Contact us
        </Link>
      </div>
    </div>
  );
};
