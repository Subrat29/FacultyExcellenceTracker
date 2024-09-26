import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register necessary components with Chart.js
ChartJS.register(
  CategoryScale,    // Register category scale
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardContent = () => {
  const data = {
    labels: ['Faculty 1', 'Faculty 2', 'Faculty 3'], // Sample data labels
    datasets: [
      {
        label: 'Performance Score',
        data: [90, 85, 75], // Sample performance scores
        backgroundColor: ['#4CAF50', '#2196F3', '#FF9800'],
      },
    ],
  };

  return (
    <div className="p-6 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Faculty Performance Overview</h2>
      <Bar data={data} />
    </div>
  );
};

export default DashboardContent;
