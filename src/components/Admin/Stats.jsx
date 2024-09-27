import React, { useMemo } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import { useTable, useSortBy } from 'react-table';

// Register necessary components with Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Stats = () => {
    // Sample Faculty Data
    const facultyData = [
        { name: 'Dr. Alice', rank: 1, performanceScore: 95, points: 1200, badges: ['Star Faculty', 'Top Researcher'] },
        { name: 'Dr. Bob', rank: 2, performanceScore: 90, points: 1100, badges: ['Top Educator'] },
        { name: 'Dr. Charlie', rank: 3, performanceScore: 88, points: 1050, badges: ['Star Faculty'] },
    ];

    // React Table for Faculty Leaderboard
    const columns = useMemo(() => [
        { Header: 'Rank', accessor: 'rank' },
        { Header: 'Faculty Name', accessor: 'name' },
        { Header: 'Performance Score', accessor: 'performanceScore' },
        { Header: 'Points', accessor: 'points' },
        { Header: 'Badges', accessor: 'badges', Cell: ({ value }) => value.join(', ') },
    ], []);

    const data = useMemo(() => facultyData, []);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
        { columns, data },
        useSortBy
    );

    // Bar Chart for Performance Overview
    const barChartData = {
        labels: facultyData.map(faculty => faculty.name),
        datasets: [
            {
                label: 'Performance Score',
                data: facultyData.map(faculty => faculty.performanceScore),
                backgroundColor: ['#4CAF50', '#2196F3', '#FF9800'],
            },
        ],
    };

    // Pie Chart for Badges Distribution
    const badgeCount = facultyData.reduce((acc, faculty) => {
        faculty.badges.forEach(badge => {
            acc[badge] = (acc[badge] || 0) + 1;
        });
        return acc;
    }, {});

    const pieChartData = {
        labels: Object.keys(badgeCount),
        datasets: [
            {
                label: 'Badges Distribution',
                data: Object.values(badgeCount),
                backgroundColor: ['#4CAF50', '#2196F3', '#FF9800', '#9C27B0'],
            },
        ],
    };

    return (
        <div className="p-6 bg-white shadow-md rounded">
            <h2 className="text-2xl font-bold mb-4">Faculty Leaderboard</h2>

            {/* Faculty Leaderboard */}
            <div className="mb-6">
                <table {...getTableProps()} className="min-w-full border-collapse border border-gray-200 mb-4">
                    <thead className="bg-gray-100">
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        className="border border-gray-300 p-2 text-left cursor-pointer"
                                    >
                                        {column.render('Header')}
                                        <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} className="hover:bg-gray-100">
                                    {row.cells.map(cell => (
                                        <td {...cell.getCellProps()} className="border border-gray-300 p-2">
                                            {cell.render('Cell')}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Bar Chart for Faculty Performance Overview */}
            <div className="mb-6" style={{ height: '300px' }}>
                <h3 className="text-xl font-bold mb-2">Faculty Performance Overview</h3>
                <Bar
                    data={barChartData}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false
                    }}
                />
            </div>

            {/* Pie Chart for Badges Distribution */}
            <div className="mb-6" style={{ height: '300px' }}>
                <h3 className="text-xl font-bold mb-2">Badges Distribution</h3>
                <Pie
                    data={pieChartData}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false
                    }}
                />
            </div>
        </div>
    );
};

export default Stats;
