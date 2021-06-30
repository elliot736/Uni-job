import React from "react";
import "../static/css/header.css";
import { Link } from "react-scroll";
import Section from "./Section";

const Header = () => {
  return (
    <div>
      <header id="showcase">
        <h1>Noch auf der Suche nach Werkstudent ? </h1>
        <p>UniJob ist immer hier für dich</p>
        <p>
          Wir haben die größten Vermittlungsplattformen in Deutschland
          durchforstet und brachte dich passende Angebote
        </p>
        <a href="#section-a" class="button">
          <Link
            activeClass="active"
            to="section"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Versuch es mal
          </Link>
        </a>
      </header>
    </div>
  );
};

export default Header;
