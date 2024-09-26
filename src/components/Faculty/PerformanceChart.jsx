import React from 'react';
import { Line } from 'react-chartjs-2';

const PerformanceChart = () => {
  // Sample data for faculty performance over time
  const data = {
    labels: ['2019', '2020', '2021', '2022', '2023'], // Years
    datasets: [
      {
        label: 'Research',
        data: [75, 85, 90, 88, 92],
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        fill: true,
      },
      {
        label: 'Teaching',
        data: [80, 78, 85, 82, 90],
        borderColor: '#2196F3',
        backgroundColor: 'rgba(33, 150, 243, 0.2)',
        fill: true,
      },
      {
        label: 'Service',
        data: [60, 65, 70, 75, 80],
        borderColor: '#FF9800',
        backgroundColor: 'rgba(255, 152, 0, 0.2)',
        fill: true,
      },
      {
        label: 'Collaboration',
        data: [70, 75, 72, 80, 85],
        borderColor: '#9C27B0',
        backgroundColor: 'rgba(156, 39, 176, 0.2)',
        fill: true,
      },
      {
        label: 'Engagement',
        data: [60, 62, 65, 68, 70],
        borderColor: '#FFC107',
        backgroundColor: 'rgba(255, 193, 7, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Allows the chart to resize based on the container
  };

  // Table Data (represents the same performance over time in a tabular format)
  const tableData = [
    { year: '2019', research: 75, teaching: 80, service: 60, collaboration: 70, engagement: 60 },
    { year: '2020', research: 85, teaching: 78, service: 65, collaboration: 75, engagement: 62 },
    { year: '2021', research: 90, teaching: 85, service: 70, collaboration: 72, engagement: 65 },
    { year: '2022', research: 88, teaching: 82, service: 75, collaboration: 80, engagement: 68 },
    { year: '2023', research: 92, teaching: 90, service: 80, collaboration: 85, engagement: 70 },
  ];

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Faculty Performance Over Time</h2>

      {/* Performance Line Chart */}
      <div className="mb-6" style={{ height: '400px' }}>
        <Line data={data} options={options} />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center mb-4">
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Yearly Overview
        </button>
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Department Comparison
        </button>
      </div>

      {/* Table for Detailed Analysis */}
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 p-2">Year</th>
              <th className="border border-gray-300 p-2">Research</th>
              <th className="border border-gray-300 p-2">Teaching</th>
              <th className="border border-gray-300 p-2">Service</th>
              <th className="border border-gray-300 p-2">Collaboration</th>
              <th className="border border-gray-300 p-2">Engagement</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="border border-gray-300 p-2">{row.year}</td>
                <td className="border border-gray-300 p-2">{row.research}</td>
                <td className="border border-gray-300 p-2">{row.teaching}</td>
                <td className="border border-gray-300 p-2">{row.service}</td>
                <td className="border border-gray-300 p-2">{row.collaboration}</td>
                <td className="border border-gray-300 p-2">{row.engagement}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PerformanceChart;
