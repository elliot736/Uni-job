import React, { useState } from "react";
import "../static/css/searchbar.css";

import Section from "./Section";

const SearchBar = ({ setQuery, setLoc }) => {
  const [term, setTerm] = useState("");
  const [lo, setLo] = useState("");

  // const onInputChange = (event) => {
  //   setTerm(event.target.value);
  //   setLoc(event.target.value);
  // };

  const onSubmit = (event) => {
    event.preventDefault();
    setQuery(term);
    setLoc(lo);
    // onFormSubmit(term, loc);
  };

  return (
    <div>
      <form method="GET" onSubmit={onSubmit}>
        <div class="row">
          <div class="container-search">
            <div class="col-3">
              <input
                class="effect-7"
                type="text"
                placeholder="Was"
                required
                value={term}
                onChange={(event) => setTerm(event.target.value)}
              />
              <span class="focus-border">
                <i></i>
              </span>
            </div>

            <div class="col-3">
              <input
                class="effect-9"
                type="text"
                placeholder="Wo"
                required
                value={lo}
                onChange={(event) => setLo(event.target.value)}
              />
              <span class="focus-border">
                <i></i>
              </span>
            </div>
            <div class="col-3 col">
              <button className=" btn-primary " type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
