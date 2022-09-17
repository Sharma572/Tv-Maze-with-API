import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar py-3 ">
        <div id="navbar" className="container-fluid">
          <a className="navbar-brand" href="#">
          <img
                src="https://static.tvmaze.com/images/tvm-header-logo.png"
                alt="tvmaze"
                height={50}
              />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
