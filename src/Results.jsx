import React from "react";

const Results = ({ isWinner }) => {
  if (isWinner) {
    return <h1 className="has-background-success">{"you won"}</h1>;
  } else {
    return <h1 className="has-background-lost">{"loser sucka"}</h1>;
  }
};

export default Results;
