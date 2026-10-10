import React from "react";

function History() {
  return (
    <div className="page">
      <h1>Conversion History</h1>
      <p>Your recent conversions will appear here.</p>

      <div className="history-box">
        <div className="history-item">
          <span>100 cm</span>
          <b>→</b>
          <span>1 m</span>
        </div>

        <div className="history-item">
          <span>5 kg</span>
          <b>→</b>
          <span>5000 g</span>
        </div>

        <div className="history-item">
          <span>60 min</span>
          <b>→</b>
          <span>1 hour</span>
        </div>
      </div>
    </div>
  );
}

export default History;