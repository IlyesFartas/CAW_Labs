import React, { useState } from "react";
import "../styles/AddTransaction.css";

const AddTransaction = ({ onAdd }) => {
  const [transactionName, setTransactionName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!transactionName || !amount || !date || !category || !type) return;

    onAdd({
      id: Date.now(),
      transactionName,
      amount: parseFloat(amount),
      date,
      category,
      type,
    });

    setTransactionName("");
    setAmount("");
    setDate("");
    setCategory("");
    setType("");
  };

  return (
    <div className="add-transaction">
      <h3>Add Transaction</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Transaction Name"
          value={transactionName}
          onChange={(e) => setTransactionName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount (DZD)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Category</option>
          <option value="Groceries">Groceries</option>
          <option value="Transportation">Transportation</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <div className="type-buttons">
          <button
            type="button"
            className={type === "Income" ? "active income" : ""}
            onClick={() => setType("Income")}
          >
            Income
          </button>
          <button
            type="button"
            className={type === "Expense" ? "active expense" : ""}
            onClick={() => setType("Expense")}
          >
            Expense
          </button>
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
