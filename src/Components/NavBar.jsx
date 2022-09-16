import React from "react";
import "../App.css";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  p-0">
        <div className="container-fluid py-4 mx-lg-5">
          <a classNameName="navbar-brand" href="/src/App.js">
            <span classNameNameName="container-child">
              <img
                src="https://static.tvmaze.com/images/tvm-header-logo.png"
                alt="tvmaze"
                height={50}
              />
            </span>{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="./src/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="./src/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./src/">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
