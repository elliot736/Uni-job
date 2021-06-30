import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import SearchBar from "./SearchBar";
import JobList from "./JobList";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "../static/css/section.css";
import "../static/css/app.css";
// import "../static/css/item.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [loc, setLoc] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    try {
      const search = async () => {
        const { data } = await axios.get("/api", {
          params: {
            q: query,
            loc: loc,
          },
          // headers: {
          //   Accept:
          //     "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          //   "Accept-Encoding": "gzip, deflate, br",
          //   "Accept-Language":
          //     "en-GB,en;q=0.9,de-DE;q=0.8,de;q=0.7,ar-AE;q=0.6,ar;q=0.5,en-US;q=0.4",

          //   "Sec-Ch-Ua":
          //     '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
          //   "Sec-Ch-Ua-Mobile": "?0",
          //   "Sec-Fetch-Dest": "document",
          //   "Sec-Fetch-Mode": "navigate",
          //   "Sec-Fetch-Site": "cross-site",
          //   "Sec-Fetch-User": "?1",
          //   "Upgrade-Insecure-Requests": "1",
          //   "User-Agent":
          //     "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36",
          //   "X-Amzn-Trace-Id": "Root=1-60dc6e6b-1c4a9b5f30fb721325804f2a",
          // },
        });
        setResults(data.body);
      };
      if (query && loc) {
        search();
      }
    } catch (err) {
      console.error(err);
    }
  }, [query, loc]);
  return (
    <div>
      <svg
        aria-hidden="true"
        className="svg"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <symbol id="icon-briefcase" viewBox="0 0 20 20">
            <path d="M9 10h2v2h9c0 0-0.149-4.459-0.2-5.854-0.050-1.326-0.525-2.146-2-2.146h-3.208c-0.497-0.938-1.032-1.945-1.197-2.256-0.331-0.623-0.444-0.744-1.179-0.744h-4.433c-0.735 0-0.847 0.121-1.179 0.744-0.165 0.311-0.7 1.318-1.196 2.256h-3.209c-1.476 0-1.945 0.82-2 2.146s-0.199 5.854-0.199 5.854h9v-2zM7.649 2.916c0.23-0.432 0.308-0.516 0.817-0.516h3.067c0.509 0 0.588 0.084 0.816 0.516 0.086 0.16 0.318 0.6 0.575 1.084h-5.85c0.257-0.484 0.489-0.924 0.575-1.084zM11 15h-2v-2h-8.5c0 0 0.124 1.797 0.199 3.322 0.031 0.633 0.218 1.678 1.8 1.678h15.001c1.582 0 1.765-1.047 1.8-1.678 0.087-1.568 0.2-3.322 0.2-3.322h-8.5v2z"></path>
          </symbol>
        </defs>
      </svg>
      <Navbar />

      <Header />
      <section className="section" id="section">
        <p className="sec-header">
          Gib einfach einen Titel und einen Ort ein !
        </p>

        <div className="main">
          <div className="child">
            <SearchBar setQuery={setQuery} setLoc={setLoc} />
          </div>
          <div className="child">
            <p className="p-found">
              {results
                ? "ich habe " +
                  results.length +
                  " Ergebnisse für dich gefunden 😚."
                : null}
              {!results && query
                ? "Konnte nix finden 🤔, versuch etwas anderes 🙃"
                : null}
            </p>

            <JobList jobs={results} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
