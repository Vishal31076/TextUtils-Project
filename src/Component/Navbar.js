import PropTypes from "prop-types";

import React from "react";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <>
        <nav
          className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}  //3rd
        >
          <div className="container-fluid">
            {/* <Link className="navbar-brand" to="/">
              {props.title}
            </Link> */}
            <a className="navbar-brand" href="#">
              {props.title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link> */}
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About Us
                  </Link>
                </li> */}
              </ul>

                <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}> {/* 4th */}

                  <input
                    className="form-check-input" onClick={props.toggleMode}
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Enable {props.mode} mode
                  </label>

                </div>
              
            </div>
          </div>
        </nav>
      </>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string,
};

// Navbar.defaultProps = {
//   title: "Set Title Here",
//   home: "Home",
// };
