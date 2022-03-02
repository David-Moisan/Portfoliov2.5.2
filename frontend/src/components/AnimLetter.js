import React from "react";

/**
 * AnimLetter
 * @param {string} letter 
 * @returns une span qui est animée
 */
export default function AnimLetter({ letter }) {
  return <span className="animation__letter">{letter}</span>;
}
