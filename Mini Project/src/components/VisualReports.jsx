import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const VisualReports = ({ transactions }) => {
  const categories = transactions
    .filter((t) => t.type === "Expense")
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  const months = transactions.reduce((acc, t) => {
    const month = new Date(t.date).toLocaleString("default", { month: "short" });
    acc[month] = acc[month] || { income: 0, expense: 0 };
    acc[month][t.type.toLowerCase()] += t.amount;
    return acc;
  }, {});

  const pieData = {
    labels: Object.keys(categories),
    datasets: [
      {
        label: "Expenses by Category",
        data: Object.values(categories),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
        hoverOffset: 4,
      },
    ],
  };

  const barData = {
    labels: Object.keys(months),
    datasets: [
      {
        label: "Income",
        data: Object.values(months).map((m) => m.income),
        backgroundColor: "#4CAF50",
      },
      {
        label: "Expenses",
        data: Object.values(months).map((m) => m.expense),
        backgroundColor: "#FF6384",
      },
    ],
  };

  return (
    <div className="visual-reports">
      <h3>Visual Reports</h3>
      <div className="chart-container">
        <Pie data={pieData} />
      </div>
      <div className="chart-container">
        <Bar data={barData} />
      </div>
    </div>
  );
};

export default VisualReports;
