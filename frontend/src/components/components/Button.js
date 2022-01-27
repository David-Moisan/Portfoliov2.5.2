import React from "react";
import { Link } from "react-router-dom";

export default function Button({ route, text }) {
  return (
    <Link className="button" type="button" to={route}>
      {text}
    </Link>
  );
}
