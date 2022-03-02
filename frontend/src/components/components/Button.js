import React from "react";
import { Link } from "react-router-dom";

/**
 * Button
 * @param {string} route
 * @param {string} text 
 * @returns un boutton avec une route et un text en props
 */
export default function Button({ route, text }) {
  return (
    <Link className="button" type="button" to={route}>
      {text}
    </Link>
  );
}
