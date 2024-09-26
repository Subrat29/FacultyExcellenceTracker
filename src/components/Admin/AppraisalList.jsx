import React, { useMemo, useState } from 'react';
import { useTable, useSortBy } from 'react-table';
import { FaDownload, FaCheck, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AppraisalList = () => {
  const data = useMemo(
    () => [
      {
        employeeCode: 'EMP001',
        facultyName: 'Dr. John Doe',
        department: 'Computer Science',
        performanceScore: 95,
        recommendation: 'Approved for promotion',
        submissionDate: '2024-09-01',
        status: 'Reviewed',
        pdfLink: '/pdfs/EMP001.pdf',
        adminReview: '',
        finalAction: 'Approved',
      },
      {
        employeeCode: 'EMP002',
        facultyName: 'Dr. Jane Smith',
        department: 'Mathematics',
        performanceScore: 85,
        recommendation: 'Needs improvement in Research',
        submissionDate: '2024-09-05',
        status: 'Pending',
        pdfLink: '/pdfs/EMP002.pdf',
        adminReview: '',
        finalAction: '',
      },
      {
        employeeCode: 'EMP003',
        facultyName: 'Dr. Alice Johnson',
        department: 'Physics',
        performanceScore: 75,
        recommendation: 'Needs improvement in Teaching',
        submissionDate: '2024-09-10',
        status: 'Pending',
        pdfLink: '/pdfs/EMP003.pdf',
        adminReview: '',
        finalAction: '',
      }
      // Add more data as needed
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Employee Code',
        accessor: 'employeeCode',
      },
      {
        Header: 'Faculty Name',
        accessor: 'facultyName',
      },
      {
        Header: 'Department',
        accessor: 'department',
      },
      {
        Header: 'AI Performance Score',
        accessor: 'performanceScore',
      },
      {
        Header: 'AI Recommendation',
        accessor: 'recommendation',
      },
      {
        Header: 'Submission Date',
        accessor: 'submissionDate',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'PDF',
        accessor: 'pdfLink',
        Cell: ({ value }) => (
          <a href={value} target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 flex items-center space-x-1">
              <FaDownload />
              <span>Download</span>
            </button>
          </a>
        ),
      },
      // {
      //   Header: 'Admin Review',
      //   accessor: 'adminReview', // New accessor for admin review.
      //   Cell: ({ row, value }) => (
      //     <Link to='/admin-dashboard/review'>Review Submission</Link>
      //   ),
      // },
      {
        Header: 'Admin Review',
        accessor: 'adminReview',
        Cell: ({ row }) => (
          <textarea
            value={reviews[row.original.employeeCode] || ''} // Get the review from the state.
            placeholder="Enter review..."
            className="border rounded p-2 w-full"
            onChange={(e) => handleReviewChange(row.original.employeeCode, e.target.value)} // Handle change event.
          />
        ),
      },
      {
        Header: 'Final Action',
        accessor: 'finalAction',
        Cell: ({ row }) => (
          <div className="space-x-2">
            <button
              className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 flex items-center space-x-1"
              onClick={() => handleFinalAction(row.original.employeeCode, 'Approved')}
            >
              <FaCheck />
              <span>Approve</span>
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 flex items-center space-x-1"
              onClick={() => handleFinalAction(row.original.employeeCode, 'Rejected')}
            >
              <FaTimes />
              <span>Reject</span>
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const handleFinalAction = (employeeCode, action) => {
    alert(`Employee ${employeeCode} has been ${action}.`);
    // Add logic here to handle approval or rejection in the backend
  };

// Define the state to store the reviews.
const [reviews, setReviews] = useState(() =>
  data.reduce((acc, faculty) => {
    acc[faculty.employeeCode] = faculty.adminReview || ''; // Initialize with existing data or empty string.
    return acc;
  }, {})
);

// Function to handle review changes.
const handleReviewChange = (employeeCode, review) => {
  // Update the local state with the new review.
  setReviews((prevReviews) => ({
    ...prevReviews,
    [employeeCode]: review, // Update review for specific employee.
  }));
};

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Faculty Appraisals</h2>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table {...getTableProps()} className="min-w-full bg-white">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-100 border-b">
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="text-left px-4 py-2 text-gray-600 font-medium"
                  >
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="border-b hover:bg-gray-50">
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="px-4 py-2">
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppraisalList;
