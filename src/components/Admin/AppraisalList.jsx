import React, { useMemo, useState } from 'react';
import { useTable, useSortBy } from 'react-table';
import { FaDownload, FaCheck, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FcFeedback } from 'react-icons/fc';

const AppraisalList = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [currentReview, setCurrentReview] = useState('');
  const [currentEmployee, setCurrentEmployee] = useState(null);

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
        Cell: ({ value }) => (
          <span
            className={`px-2 py-1 rounded-full text-sm font-bold ${
              value === 'Pending'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-green-100 text-green-800'
            }`}
          >
            {value}
          </span>
        ),
      },
      {
        Header: 'PDF',
        accessor: 'pdfLink',
        Cell: ({ value }) => (
          <a href={value} target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 flex items-center space-x-1 transition-all">
              <FaDownload />
              <span>Download</span>
            </button>
          </a>
        ),
      },
      {
        Header: 'Admin Feedback',
        accessor: 'adminFeedback',
        Cell: ({ row }) => (
          <button
            onClick={() => openModal(row.original)}
            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 flex items-center space-x-1 transition-all"
          >
            <FcFeedback className="h-6 w-6" />
            <span>Feedback</span>
          </button>
        ),
      },
      {
        Header: 'Final Action',
        accessor: 'finalAction',
        Cell: ({ row }) => (
          <div className="flex space-x-2">
            <button
              className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 flex items-center space-x-1 transition-all"
              onClick={() => handleFinalAction(row.original.employeeCode, 'Approved')}
            >
              <FaCheck />
              <span>Approve</span>
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 flex items-center space-x-1 transition-all"
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

  const openModal = (employee)=>{
    setCurrentEmployee(employee);
    setCurrentReview(employee.adminReview || '')
    setModalOpen(true)
  }

  const closeModal = ()=>{
    setModalOpen(false);
    setCurrentEmployee(null);
    setCurrentReview('');
  }

  const saveReview = () => {
    alert(`Review for ${currentEmployee.facultyName}: ${currentReview}`);
    // Update the review logic (e.g., send to backend)
    closeModal();
  };

  const handleFinalAction = (employeeCode, action) => {
    alert(`Employee ${employeeCode} has been ${action}.`);
    // Add logic here to handle approval or rejection in the backend
  };

  const [reviews, setReviews] = useState(() =>
    data.reduce((acc, faculty) => {
      acc[faculty.employeeCode] = faculty.adminReview || '';
      return acc;
    }, {})
  );

  const handleReviewChange = (employeeCode, review) => {
    setReviews((prevReviews) => ({
      ...prevReviews,
      [employeeCode]: review,
    }));
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    { columns, data },
    useSortBy
  );

  return (
    <div className="p-6 bg-gradient-to-b from-blue- to-blue-200 min-h-screen">
      <h2 className="text-3xl font-bold mb-4 text-center text--600">Faculty Appraisals</h2>
      <div className="bg-white shadow-xl rounded-lg overflow-hidden p-6">
        <table {...getTableProps()} className="min-w-full bg-white rounded-lg shadow-lg">
          <thead className="bg-blue-500 text-white">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="text-left px-4 py-3 text-lg font-semibold tracking-wider"
                  >
                    {column.render('Header')}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
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
                <tr {...row.getRowProps()} className="border-b hover:bg-gray-50 transition duration-150">
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="px-4 py-3 text-gray-700">
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-bold mb-4">Admin Review for {currentEmployee?.facultyName}</h3>
            <textarea
              value={currentReview}
              onChange={(e) => setCurrentReview(e.target.value)}
              className="w-full h-32 border rounded p-2"
            />
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={saveReview}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppraisalList;
