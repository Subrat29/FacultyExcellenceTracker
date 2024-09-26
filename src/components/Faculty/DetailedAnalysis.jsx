import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
} from 'chart.js';

import { Pie, Radar, Bar } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
);

const DetailedAnalysisWithCharts = () => {
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const radarChartRef = useRef(null);

  useEffect(() => {
    return () => {
      if (barChartRef.current) barChartRef.current.destroy();
      if (pieChartRef.current) pieChartRef.current.destroy();
      if (radarChartRef.current) radarChartRef.current.destroy();
    };
  }, []);

  const performanceMetrics = [5, 78, 2, 1, 1, 2, 85];
  const labels = ['Research Publications', 'Teaching Evaluations', 'Conferences', 'Leadership Roles', 'Grants', 'Mentorship', 'Overall AI Score'];

  const barData = {
    labels,
    datasets: [
      {
        label: 'Performance Metrics',
        data: performanceMetrics,
        backgroundColor: '#4CAF50',
      },
    ],
  };

  const pieData = {
    labels: ['On Track', 'Below Benchmark', 'Low Participation', 'Potential Growth', 'Needs Improvement', 'Meeting Expectations'],
    datasets: [
      {
        data: [1, 1, 1, 1, 1, 2],
        backgroundColor: ['#4CAF50', '#FF9800', '#F44336', '#9C27B0', '#2196F3', '#FFC107'],
      },
    ],
  };

  const radarData = {
    labels,
    datasets: [
      {
        label: 'Faculty Performance Overview',
        data: performanceMetrics,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  // Table Data
  const analysisData = [
    {
      metric: 'Research Publications',
      currentPerformance: '5 in the past year',
      aiAnalysis: 'On track',
      improvementAreas: 'None',
      suggestedActions: 'Continue publishing',
    },
    {
      metric: 'Teaching Evaluations',
      currentPerformance: '78% average',
      aiAnalysis: 'Below benchmark',
      improvementAreas: 'Teaching Methodology',
      suggestedActions: "Attend 'Effective Teaching Techniques' workshop",
    },
    {
      metric: 'Conference Participation',
      currentPerformance: '2 attended',
      aiAnalysis: 'Low participation',
      improvementAreas: 'More participation needed',
      suggestedActions: 'Participate in 1-2 conferences in the next 6 months',
    },
    {
      metric: 'Leadership Roles',
      currentPerformance: '1 project lead',
      aiAnalysis: 'Potential for growth',
      improvementAreas: 'Take more leadership roles',
      suggestedActions: "Enroll in 'Leadership in Academia' training",
    },
    {
      metric: 'Grant Applications',
      currentPerformance: '1 submitted, none awarded',
      aiAnalysis: 'Needs improvement',
      improvementAreas: 'Research grant writing',
      suggestedActions: 'Join Grant Writing Bootcamp',
    },
    {
      metric: 'Mentorship Given',
      currentPerformance: '2 mentees',
      aiAnalysis: 'Meeting expectations',
      improvementAreas: 'None',
      suggestedActions: 'Continue mentorship activities',
    },
    {
      metric: 'Overall AI Score',
      currentPerformance: '85',
      aiAnalysis: 'Eligible for promotion',
      improvementAreas: '-',
      suggestedActions: 'Prepare for the next promotion cycle',
    },
  ];

  const chartOptions = {
    maintainAspectRatio: true, // Maintains the aspect ratio but allows size adjustment
    responsive: true, // Make the chart responsive to window resizing
    aspectRatio: 2 // Adjusts the size of the chart, lesser values make the chart smaller
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Detailed Promotion Criteria Analysis</h2>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead className="bg-yellow-300">
            <tr>
              <th className="border border-gray-300 p-2">Metric</th>
              <th className="border border-gray-300 p-2">Current Performance</th>
              <th className="border border-gray-300 p-2">AI Analysis</th>
              <th className="border border-gray-300 p-2">Improvement Areas</th>
              <th className="border border-gray-300 p-2">Suggested Actions</th>
            </tr>
          </thead>
          <tbody>
            {analysisData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="border border-gray-300 p-2">{item.metric}</td>
                <td className="border border-gray-300 p-2">{item.currentPerformance}</td>
                <td className="border border-gray-300 p-2">{item.aiAnalysis}</td>
                <td className="border border-gray-300 p-2">{item.improvementAreas}</td>
                <td className="border border-gray-300 p-2">{item.suggestedActions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white p-4 rounded shadow mb-4">
        <h3 className="text-xl font-bold mb-4">Visual Performance Metrics</h3>
        <div style={{ maxWidth: '600px', margin: 'auto' }}>
          <h4 className="text-lg font-semibold mb-2">Performance Metrics Overview (Bar Chart)</h4>
          <Bar ref={barChartRef} data={barData} options={chartOptions} />
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow mb-4">
        <div style={{ maxWidth: '500px', margin: 'auto' }}>
          <h4 className="text-lg font-semibold mb-2">AI Analysis Breakdown (Pie Chart)</h4>
          <Pie ref={pieChartRef} data={pieData} options={chartOptions} />
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow mb-4">
        <div style={{ maxWidth: '600px', margin: 'auto' }}>
          <h4 className="text-lg font-semibold mb-2">Faculty Performance Overview (Radar Chart)</h4>
          <Radar ref={radarChartRef} data={radarData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default DetailedAnalysisWithCharts;
