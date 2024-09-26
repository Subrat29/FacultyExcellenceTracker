import React, { useState, useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';

// GlobalFilter component for search functionality
const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span className="mb-4 block">
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
    </span>
  );
};

const PastAppraisalHistory = () => {
  const data = useMemo(
    () => [
      {
        submissionDate: '10-Sep-2023',
        score: 82,
        aiSuggestion: 'Not Ready for Promotion – Improvement needed in teaching evaluations and leadership roles.',
        adminReview: 'Needs to improve teaching methods. Encouraged to take leadership roles in departmental projects.',
        finalAction: 'Promotion Denied. Attend teaching workshops.',
        pdfLink: '#',
      },
      {
        submissionDate: '15-Mar-2024',
        score: 88,
        aiSuggestion: 'Promotion Ready – Good overall performance. Slight improvement required in grant applications.',
        adminReview: 'Good progress in teaching. Apply for more research grants to strengthen research portfolio.',
        finalAction: 'Promotion Denied. Work on grant applications.',
        pdfLink: '#',
      },
      {
        submissionDate: '20-Oct-2024',
        score: 92,
        aiSuggestion: 'Promotion Ready – Excellent performance. Keep up the good work.',
        adminReview: 'Excellent teaching evaluations. Keep up the good work.',
        finalAction: 'Promotion Approved.',
        pdfLink: '#',
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Submission Date',
        accessor: 'submissionDate', // accessor is the key in the data
      },
      {
        Header: 'AI Performance Score',
        accessor: 'score',
      },
      {
        Header: 'AI Suggestion',
        accessor: 'aiSuggestion',
      },
      {
        Header: 'Admin Review',
        accessor: 'adminReview',
      },
      {
        Header: 'Final Action by Admin',
        accessor: 'finalAction',
      },
      {
        Header: 'Download PDF',
        accessor: 'pdfLink',
        Cell: ({ cell: { value } }) => (
          <a href={value} className="text-blue-500 hover:underline">Download PDF</a>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { sortBy: [{ id: 'submissionDate', desc: true }] }, // Sort by date by default
    },
    useGlobalFilter, // For search
    useSortBy // For sorting
  );

  const { globalFilter } = state;

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Past Appraisal History</h2>

      {/* Search bar */}
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

      {/* Table */}
      <table {...getTableProps()} className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-100">
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="border p-2 text-left font-medium cursor-pointer"
                >
                  {column.render('Header')}
                  {/* Add a sort indicator */}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-50">
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="border p-2">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PastAppraisalHistory;
