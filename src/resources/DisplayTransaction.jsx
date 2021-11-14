import React from "react";
import "../App.css";
import DeleteIcon from "@mui/icons-material/Delete";

function DisplayTransaction({ transaction, deleteTransaction }) {
  const color = transaction.amount >= 0 ? "Green" : "Red";

  return (
    <div
      className="display-items"
      style={{ background: `${color}`, color: "#fff" }}
    >
      <div>
        <h5>{transaction.text}</h5>
      </div>
      <div>
        <h5>{transaction.amount}</h5>
      </div>
      <div>
        <button
          className="delete-button"
          onClick={() => deleteTransaction(transaction.id)}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default DisplayTransaction;
