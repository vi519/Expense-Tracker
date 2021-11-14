import React from "react";
import "../App.css";
import { useState } from "react";

function Balance({ transactions }) {
  const [balance, setBalance] = useState(0);

  let amount = transactions.map((transaction) => {
    return transaction.amount;
  });

  console.log("Value of amount", amount);

  let total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);

  return (
    <div>
      <h2 className="balance">Balance:₹{total}</h2>
    </div>
  );
}

export default Balance;
