import React from "react";
import { Link } from "react-router-dom";
import useCursorHandler from "../hooks/useCursorHandler";
import Menu from "./Menu";

export default function Navbar() {
  const cursorHandlers = useCursorHandler();

  return (
    <menu className="navbar">
      <div className="navbar__top">
        <Link
          to="/"
          className="navbar__link--home"
          title="Home"
          {...cursorHandlers}
        >
          <img
            rel="preload"
            src="/static/source/logo__minSize.png"
            alt="logo"
            className="navbar__logo"
          />
          <span>David</span>
        </Link>
        <span>Web developer</span>
      </div>
      <Menu />
      <ul className="navbar__social">
        <li className="navbar__social--item">
          <a
            href="https://github.com/David-Moisan"
            target="_blank"
            className="navbar__link--social"
          >
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </li>
        <li className="navbar__social--item">
          <a
            href="https://www.linkedin.com/in/david-moisan-6251331a5/"
            target="_blank"
            className="navbar__link--social"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </menu>
  );
}
