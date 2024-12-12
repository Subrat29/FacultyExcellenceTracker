import React, { useMemo, useState } from 'react';
import { useTable, useSortBy } from 'react-table';
import { FaDownload, FaCheck, FaTimes } from 'react-icons/fa';
import { FcFeedback } from 'react-icons/fc';

const AppraisalList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentReview, setCurrentReview] = useState('');
  const [currentEmployee, setCurrentEmployee] = useState(null);

  const data = useMemo(
    () => [
      {
        id: 'EMP001',
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
        id: 'EMP002',
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
        id: 'EMP003',
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
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Employee Code',
        accessor: 'employeeCode',
        mobile: true,
      },
      {
        Header: 'Faculty Name',
        accessor: 'facultyName',
        mobile: true,
      },
      {
        Header: 'Department',
        accessor: 'department',
        mobile: true,
      },
      {
        Header: 'Appraisal Score',
        accessor: 'performanceScore',
        mobile: false,
      },
      {
        Header: 'Promotion Recommendation',
        accessor: 'recommendation',
        mobile: false,
      },
      {
        Header: 'Submission Date',
        accessor: 'submissionDate',
        mobile: false,
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
        mobile: true,
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
        mobile: true,
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
        mobile: true,
      },
      {
        Header: 'Final Action',
        accessor: 'finalAction',
        Cell: ({ row }) => (
          <div className="flex space-x-2">
            <button
              className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 flex items-center space-x-1 transition-all"
              onClick={() =>
                handleFinalAction(row.original.employeeCode, 'Approved')
              }
            >
              <FaCheck />
              <span>Approve</span>
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 flex items-center space-x-1 transition-all"
              onClick={() =>
                handleFinalAction(row.original.employeeCode, 'Rejected')
              }
            >
              <FaTimes />
              <span>Reject</span>
            </button>
          </div>
        ),
        mobile: true,
      },
    ],
    []
  );

  const openModal = (employee) => {
    setCurrentEmployee(employee);
    setCurrentReview(employee.adminReview || '');
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentEmployee(null);
    setCurrentReview('');
  };

  const saveReview = () => {
    alert(`Review for ${currentEmployee.facultyName}: ${currentReview}`);
    closeModal();
  };

  const handleFinalAction = (employeeCode, action) => {
    alert(`Employee ${employeeCode} has been ${action}.`);
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        initialState: {
          hiddenColumns:
            window.innerWidth < 768
              ? columns
                  .filter((col) => col.mobile === false)
                  .map((col) => col.accessor)
              : [],
        },
      },
      useSortBy
    );

  return (
    <div className="p-4 sm:p-6 bg-gradient-to-b from-blue-100 to-blue-200 min-h-screen">
      <h2 className="text-2xl mt-12 md:mt-0 sm:text-3xl font-bold mb-4 text-center text-blue-600">
        Faculty Appraisals
      </h2>
      <div className="bg-white shadow-xl rounded-lg overflow-hidden p-4 sm:p-6">
        {/* Responsive table wrapper with scroll */}
        <div className="overflow-x-auto">
          <table
            {...getTableProps()}
            className="w-full bg-white rounded-lg shadow-lg"
          >
            <thead className="bg-blue-500 text-white">
              {headerGroups.map((headerGroup) => (
                <tr
                  {...headerGroup.getHeaderGroupProps()}
                  key={headerGroup.getHeaderGroupProps().key}
                >
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={column.getHeaderProps().key}
                      className="text-left px-2 sm:px-4 py-2 sm:py-3 text-sm sm:text-lg font-semibold tracking-wider"
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
                  <tr
                    {...row.getRowProps()}
                    key={row.original.id}
                    className="border-b hover:bg-gray-50 transition duration-150"
                  >
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        key={cell.getCellProps().key}
                        className="px-2 sm:px-4 py-2 sm:py-3 text-gray-700 text-xs sm:text-base"
                      >
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

      {modalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
            <h3 className="text-lg sm:text-xl font-bold mb-4">
              Admin Review for {currentEmployee?.facultyName}
            </h3>
            <textarea
              value={currentReview}
              onChange={(e) => setCurrentReview(e.target.value)}
              className="w-full h-24 sm:h-32 border rounded p-2"
            />
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-3 sm:px-4 py-2 rounded hover:bg-gray-600 text-sm sm:text-base"
              >
                Cancel
              </button>
              <button
                onClick={saveReview}
                className="bg-blue-500 text-white px-3 sm:px-4 py-2 rounded hover:bg-blue-600 text-sm sm:text-base"
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
