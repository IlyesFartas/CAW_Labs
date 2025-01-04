import React, { useState } from "react";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import VisualReports from "./components/VisualReports";
import "./styles/App.css";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const totalIncome = transactions
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="app">
      <header className="header">
        <h1 className="app-title">Masrofi</h1>
      </header>

      <div className="stats">
        <div className="stat-item income">
          <h3>Income</h3>
          <p>{`+ ${totalIncome} DZD`}</p>
        </div>
        <div className="stat-item expense">
          <h3>Expense</h3>
          <p>{`- ${totalExpense} DZD`}</p>
        </div>
        <div className="stat-item balance">
          <h3>Balance</h3>
          <p>{`${balance} DZD`}</p>
        </div>
      </div>

      <div className="main-content">
        <div className="transactions">
          <AddTransaction onAdd={addTransaction} />
          <TransactionList
            transactions={transactions}
            deleteTransaction={deleteTransaction}
          />
        </div>
        <div className="reports">
          <VisualReports transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default App;
