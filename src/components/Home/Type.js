import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        wrapperClassName: "black",
        strings: [
          "Software & application developer...",
          "DevOps...",
          "Information systems...",
          "Pentester...",
          "Ethical hacker...",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
