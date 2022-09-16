import React from "react";
import "../App.css";

function NavBar() {
  return (
    <>
      <section>
        <nav className="navbar">
          <div className="container-fluid">
            <div className="container">
              <h2 className="container-child">
                <img src="https://static.tvmaze.com/images/tvm-header-logo.png" alt="tvmaze" />
              </h2>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default NavBar;
