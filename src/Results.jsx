import React from "react";

const Results = ({ isWinner }) => {
  const restartGame = () => {
    window.location.reload();
  };

  if (isWinner) {
    return (
      <div>
        <h1 className="has-background-success">{"you won"}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="has-background">{"GameOver"}</h1>
      </div>
    );
  }
};

export default Results;
