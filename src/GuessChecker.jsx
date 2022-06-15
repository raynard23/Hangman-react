import React from "react";
import { useState } from "react";
import Search from "./Search";
import ShowGuess from "./ShowGuess";

const GuessChecker = ({ count }) => {
  return (
    <div>
      <span>{count} Tries Left</span>
    </div>
  );
};

export default GuessChecker;
