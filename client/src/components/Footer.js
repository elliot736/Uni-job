import React from "react";
import "../static/css/footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <ul className="footer-ul">
        <li className="footer-li">
          <a className="footer-a" href="#">
            Twitter
          </a>
        </li>
        <li className="footer-li">
          <a className="footer-a" href="#">
            Codepen
          </a>
        </li>
        <li className="footer-li">
          <a className="footer-a" href="#">
            Email
          </a>
        </li>
        <li className="footer-li">
          <a className="footer-a" href="#">
            Dribbble
          </a>
        </li>
        <li className="footer-li">
          <a className="footer-a" href="#">
            Github
          </a>
        </li>
        <li className="footer-li">
          <p className="footer-p">👋</p>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
