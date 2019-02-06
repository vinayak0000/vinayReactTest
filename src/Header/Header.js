import React from "react";

import "./Header.css";

export class Header extends React.Component {
  render() {
    return (
      <div id="navbar">
        <nav
          className="navbar navbar-default navbar-static-top"
          role="navigation"
        >
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">
              Insurance Portal
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <a href="/home">Home</a>
              </li>

              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  User <b className="caret" />
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <a href="/add">Add</a>
                  </li>
                  <li>
                    <a href="/modify">Modify</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/claim">Claim</a>
              </li>
              <li>
                <a href="/insPay">Insurance Payer</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
