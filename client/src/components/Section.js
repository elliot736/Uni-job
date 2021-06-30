import React from "react";
import { Link } from "react-scroll";
import "../static/css/section.css";

import SearchBar from "./SearchBar";

const Section = () => {
  return (
    <div>
      <section id="section">
        <p>Gib einfach einen Titel und einen Ort ein !</p>
        <SearchBar />
      </section>
    </div>
  );
};

export default Section;
