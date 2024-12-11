import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';

const AppraisalForm = () => {
  const [formStep, setFormStep] = useState(0);
  const nextStep = () => setFormStep((prev) => prev + 1);
  const prevStep = () => setFormStep((prev) => prev - 1);

  const [subjects, setSubjects] = useState(["Subject 1"]);

  const questions = [
    'Did you find the teacher well prepared to teach you?',
    'Was there clarity in presentation (considerable language, voice, and board writing)?',
    'Was the teacher regular and punctual in taking classes?',
    'Were the presentations interesting to you?',
    'Did you find the teacher enthusiastic in teaching the subject?',
    'Was the teacher fair and impartial in awarding grades/marks?',
    'Did the teacher give real-life examples while teaching to improve relevance?',
    'Did the teacher encourage you to ask questions?',
    'Were you satisfied with the way the teacher provided answers to the questions posed by the students?',
    'Did the teacher give you references for further study and encourage you to study more?',
    'Was the quality of tutorials interesting?',
    'Were the tutorials logically arranged from simple to the difficult?',
    'Were the tutorials sufficiently challenging to your intellectual competence?',
  ];


  // Function to add a new subject
  const addSubject = () => {
    const nextSubjectNumber = subjects.length + 1;
    setSubjects([...subjects, `Subject ${nextSubjectNumber}`]);
  };

  const steps = [
    {
      title:'Faculty Appraisal',
      content: (
        <div className="p-8 bg-gray-200">
        <h1 className="text-2xl font-bold mb-4 text-center">Summary of Faculty Appraisal</h1>
        <div className="bg-white p-6 rounded shadow-md">
          <form className="space-y-6">
            {/* Academic Year and Faculty Details */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Academic Year:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter academic year"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Name of the Faculty Member:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md "
                  placeholder="Enter name"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Designation:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter designation"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Department:</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter department"
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium">Date of Joining the Present Post:</label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
  
            {/* Evaluation Parameters */}
            <div>
              <h2 className="text-lg font-semibold">Evaluation Parameters</h2>
              <table className="w-full border-collapse border border-gray-400 mt-4">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-400 px-4 py-2">S. No.</th>
                    <th className="border border-gray-400 px-4 py-2">Evaluation Parameter</th>
                    <th className="border border-gray-400 px-4 py-2">Raw Score (Out of 100)</th>
                    <th className="border border-gray-400 px-4 py-2">Weight</th>
                    <th className="border border-gray-400 px-4 py-2">Weighted Score</th>
                  </tr>
                </thead>
                <tbody>
                  {[{ id: 1, param: 'Teaching Excellence and Student Engagement', weight: 0.25 },
                    { id: 2, param: 'Research Impact and Innovation', weight: 0.35 },
                    { id: 3, param: 'Leadership and Administrative Work', weight: 0.10 },
                    { id: 4, param: 'Skill Development and Training', weight: 0.30 },
                    { id: 5, param: 'Community Service and Extra Activities', weight: 0.30 },
                    { id: 6, param: 'Student Feedback', weight: 0.30 },
                    { id: 7, param: 'Performance in University Exams', weight: 0.30 },
                    { id: 8, param: 'Performance in University Exams', weight: 0.30 },
                    { id: 9, param: 'Peer Feedback', weight: 0.30 },
                    ]
                    .map(({ id, param, weight }) => (
                      <tr key={id}>
                        <td className="border border-gray-400 px-4 py-2 text-center">{id}</td>
                        <td className="border border-gray-400 px-4 py-2">{param}</td>
                        <td className="border border-gray-400 px-4 py-2">
                          <input
                            type="number"
                            className="w-full px-2 py-1 border rounded-md"
                            placeholder="Enter score"
                          />
                        </td>
                        <td className="border border-gray-400 px-4 py-2 text-center">{weight}</td>
                        <td className="border border-gray-400 px-4 py-2">
                          <input
                            type="number"
                            className="w-full px-2 py-1 border rounded-md"
                            placeholder="Calculated"
                            readOnly
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
  
            {/* Composite Performance Index */}
            <div className="mt-4">
              <label className="block font-medium">Composite Performance Index (CPI):</label>
              <input
                type="number"
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
                placeholder="Out of 100"
                readOnly
              />
            </div>
  
            {/* Remarks Section */}
            <div>
              <h2 className="text-lg font-semibold">Remarks of the Director</h2>
              <div>
                <label className="block font-medium ">
                  (a) Does the faculty member need counseling/training?
                </label>
                <div className="flex items-center gap-4">
                  <label>
                    <input type="radio" name="counseling" value="yes" className="mr-2" />
                    Yes
                  </label>
                  <label>
                    <input type="radio" name="counseling" value="no" className="mr-2" />
                    No
                  </label>
                </div>
              </div>
              <div>
                <label className="block font-medium">
                  (b) Does the faculty member need to be commended for good work?
                </label>
                <div className="flex items-center gap-4">
                  <label>
                    <input type="radio" name="commend" value="yes" className="mr-2" />
                    Yes
                  </label>
                  <label>
                    <input type="radio" name="commend" value="no" className="mr-2" />
                    No
                  </label>
                </div>
              </div>
            </div>
  
            {/* Remarks of the Appraisee */}
            <div>
            <h2 className="text-lg font-semibold">Remarks of the Appraisee</h2>
              <label className="block font-medium">
                Do you accept that CPI reflects your true performance?
              </label>
              <div className="flex items-center gap-4">
                <label>
                  <input type="radio" name="cpiAcceptance" value="yes" className="mr-2" />
                  Yes
                </label>
                <label>
                  <input type="radio" name="cpiAcceptance" value="no" className="mr-2" />
                  No
                </label>
              </div>
            </div>
  
            <div className="flex justify-between items-center">
              <label className="block font-medium">Date:</label>
              <input
                type="date"
                className="px-4 py-2 border rounded-md focus:outline-none"
              />
            </div>
  
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        </div>
      ),
    },
    {
      title: 'Self Appraisal by Faculty',
      content: (
        <div className='p-8 bg-gray-200'>
          <h2 className="text-2xl font-bold mb-2 text-center">SELF APPRAISAL BY THE FACULTY</h2>
          <h4 className="font-semibold mb-2 text-center">(To be completed by individual faculty : subject wise)</h4>
          <h4 className="font-semibold text-center">Fill in the data or tick boxes as appropriate (Use separate sheet for each subject)</h4>
              <div className="bg-white mt-8 p-6 rounded-md shadow-md w-full max-w-4xl">
                {/* Header Section */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block mb-1 font-medium">Date:</label>
                    <input
                      type="date"
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Academic Year:</label>
                    <input
                      type="text"
                      placeholder="Enter Academic Year"
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>

                {/* Details Table */}
                <div className="border border-gray-300">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="border border-gray-300 px-2 py-2 text-center">
                          Name
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-center">
                          Department
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-2">
                          <input
                            type="text"
                            placeholder="Enter Name"
                            className="w-full px-2 py-2 border-none rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                          />
                        </td>
                        <td className="border border-gray-300 px-2 py-1">
                          <input
                            type="text"
                            placeholder="Enter Department"
                            className="w-full px-2 py-2 border-none rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table className="w-full mt-2 text-sm text-left">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="border border-gray-300 px-2 py-1 text-center">
                          Subject
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-center">
                          Allocated Load
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-2">
                          <input
                            type="text"
                            placeholder="Enter Subject"
                            className="w-full px-2 py-2 border-none rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                          />
                        </td>
                        <td className="border border-gray-300 px-2 py-2">
                          <div className="flex gap-2">
                            <input
                              type="text"
                              placeholder="L"
                              className="w-1/3 px-2 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <input
                              type="text"
                              placeholder="T"
                              className="w-1/3 border px-2 py-2 border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <input
                              type="text"
                              placeholder="P"
                              className="w-1/3 border px-2 py-2 border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table className="w-full mt-2 text-sm text-left">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="border border-gray-300 px-2 py-2 text-center">
                          No. of Lectures
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-center">
                          No. of Tutorials
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-2">
                          <div className="flex gap-2">
                            <input
                              type="text"
                              placeholder="Scheduled"
                              className="w-1/2 px-2 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <input
                              type="text"
                              placeholder="Taken"
                              className="w-1/2 px-2 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                          </div>
                        </td>
                        <td className="border border-gray-300 px-2 py-1">
                          <div className="flex gap-2">
                            <input
                              type="text"
                              placeholder="Scheduled"
                              className="w-1/2 px-2 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <input
                              type="text"
                              placeholder="Taken"
                              className="w-1/2 border px-2 py-2 border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table className="w-full mt-2 text-sm text-left">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="border border-gray-300 px-2 py-2 text-center">
                          No. of Students
                        </th>
                        <th className="border border-gray-300 px-2 py-2 text-center">
                          Average Attendance (%)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-2">
                          <input
                            type="text"
                            placeholder="Enter Number"
                            className="w-full px-2 py-2 border-none rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                          />
                        </td>
                        <td className="border border-gray-300 px-2 py-2">
                          <input
                            type="text"
                            placeholder="Enter Attendance %"
                            className="w-full px-2 py-2 border-none rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Questions Section */}
                <div className="mt-6">
                  {/* <h2 className="font-bold mb-2 text-lg">Please respond to the following questions:</h2> */}
                  <table className="w-full text-sm border border-gray-300">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="border text-base border-gray-300 px-2 py-1">
                        Please respond to the following questions:
                        </th>
                        <th className="border text-base border-gray-300 px-2 py-1 text-center">
                          Yes
                        </th>
                        <th className="border text-base border-gray-300 px-2 py-1 text-center">
                          No
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        "Are you teaching the subject for the first time?",
                        "Did you use any 'Audio Visual Aids' in the class?",
                        "Did you take extra class for weak students?",
                        "Did you give more than five class tutorials ?",
                        "Did you discuss the evaluation results with the students in the class ?",
                        "Did you use any 'Audio Visual Aids' in the class ?",
                        "Did you dictate 'notes' to students for more than 25 % of time ?",
                        "Did your give the students a question bank relating to your subject ?",
                        "Did you prepare course file / lesson plan for the subject ?",
                        "Did you take more than 90 % of the allotted classes as per schedule ?",
                        "Were the students interactive in the class and felt free to ask questions ?",
                        "Were you satisfied with the way you have taught the subject ?",
                        "Did you take extra class for weak students ?"
                      ].map((question, index) => (
                        <tr key={index}>
                          <td className="border text-base border-gray-300 px-2 py-2">
                            {question}
                          </td>
                          <td className="border border-gray-300 px-2 py-1 text-center">
                            <input type="radio" className='w-4 h-4' name={`question-${index}`} />
                          </td>
                          <td className="border border-gray-300 px-2 py-1 text-center">
                            <input type="radio" className='w-4 h-4' name={`question-${index}`} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                  {/* Comments Section */}
                  <div className="mt-6">
                    <label className="font-semibold text-base mb-1 block">
                      Your Comments and Suggestions:
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Enter your comments here"
                      className="w-full border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-6 flex justify-end">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                      Submit
                    </button>
                  </div>
              </div>
          </div>
      ),
    },
    {
      title: 'Research & Publications',
      content: (
        <div className="p-8 bg-gray-200">
          <h4 className="text-xl font-bold mb-8 text-center">Contribution to Research & Consultancy</h4>
            
          <form className='bg-white p-8 rounded-lg'>
            {/* Header Section */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1 font-medium">Name of the faculty Member:</label>
                <input
                  type="text"
                  placeholder='Enter the faculty name '
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Academic Year:</label>
                <input
                  type="text"
                  placeholder="Enter Academic Year"
                  className="w-full p-2 border rounded-md "
                />
              </div>
          </div>

            <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2">S. No.</th>
                  <th className="border border-gray-300 p-2">Activities</th>
                  <th className="border border-gray-300 p-2">To be filled by faculty</th>
                  <th className="border border-gray-300 p-2">Max. Marks</th>
                  <th className="border border-gray-300 p-2">Score (To be awarded by HOD)</th>
                  <th className="border border-gray-300 p-2">Reason</th>
                </tr>
              </thead>
              <tbody>
                {/* Section A: Academic */}
                <tr className="bg-gray-100">
                  <td colSpan="6" className="border border-gray-300 font-bold p-2">
                    A. Teaching Excellence and Student Engagement
                  </td>
                </tr>
                {[
                  "Quality of preparedness for teaching (ICT tools, course planning, etc.)",
                  "Effective syllabus coverage with innovative teaching methods",
                  "Preparation and use of lab manuals",
                  "Design and incorporation of value-added student modules",
                  "Student guidance, counseling, and fostering creativity",
                  "Development and use of online resources (PPTs, e-content, MOOCs)",
                  "Troubleshooting/technical help, etc.",
                ].map((activity, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 p-2">{index + 1}</td>
                    <td className="border border-gray-300 p-2">{activity}</td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        placeholder='Enter score'
                        className="w-full border border-gray-300 rounded p-1"
                      />
                    </td>
                    <td className="border border-gray-300 p-2">10</td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        placeholder='Enter score'
                        className="w-full border border-gray-300 rounded p-1"
                      />
                    </td>
                    <td className="border border-gray-300 p-2">
                    <textarea rows={1} className="w-full border  border-gray-300 rounded p-1">

                    </textarea>
                    </td>
                  </tr>
                ))}

                {/* Section B: Research and Consultancy Related Activities */}
                <tr>
                  <td colSpan={2}></td>
                  <td colSpan="1" className="border border-gray-300 font-bold p-2">
                  Total Score (Faculty)
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded p-1"
                    />
                  </td>
                  <td colSpan="1" className="border border-gray-300 font-bold p-2">
                  Total Score (HOD)
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded p-1"
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}></td>
                  <td colSpan="1" className="border border-gray-300 font-bold p-2">
                      Benchmark
                  </td>
                  <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded p-1"
                      />
                    </td>
                </tr>
                <tr>
                  <td colSpan="5" className="border border-gray-300 font-bold p-2">
                    Relative Percentage Achievement (Total Score/Benchmark) * 100
                  </td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded p-1"
                      />
                    </td>
                </tr>


                <tr className="bg-gray-100">
                  <td colSpan="6" className="border border-gray-300 font-bold p-2">
                    B. Research Impact and Innovation
                  </td>
                </tr>
                {[
                  "Publication in referred journals with impact factor ≥ 2",
                  "Publication in referred journals with impact factor < 2",
                  "Publication in referred journals with paid publishers",
                  "Books published with international publishers",
                  "Research project submitted with sanction",
                  "Research project undertaken",
                  "Technology transfer/patents filed and granted",
                  "Ph.D. guidance: Completed",
                  "Ph.D. guidance: Ongoing",
                ].map((activity, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 p-2">{index + 1}</td>
                    <td className="border border-gray-300 p-2">{activity}</td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        placeholder='Enter score'
                        className="w-full border border-gray-300 rounded p-1"
                      />
                    </td>
                    <td className="border border-gray-300 p-2">15</td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        placeholder='Enter score'
                        className="w-full border border-gray-300 rounded p-1"
                      />
                    </td>
                    <td className="border border-gray-300 p-2">
                    <textarea rows={1} className="w-full border  border-gray-300 rounded p-1">

                    </textarea>
                    </td>
                  </tr>
                ))}

                <tr>
                  <td colSpan={2}></td>
                  <td colSpan="1" className="border border-gray-300 font-bold p-2">
                  Total Score (Faculty)
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded p-1"
                    />
                  </td>
                  <td colSpan="1" className="border border-gray-300 font-bold p-2">
                  Total Score (HOD)
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded p-1"
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}></td>
                  <td colSpan="1" className="border border-gray-300 font-bold p-2">
                      Benchmark
                  </td>
                  <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded p-1"
                      />
                    </td>
                </tr>
                <tr>
                  <td colSpan="5" className="border  border-gray-300 font-bold p-2">
                    Relative Percentage Achievement (Total Score/Benchmark) * 100
                  </td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded p-1"
                      />
                    </td>
                </tr>

                {/* Add similar sections for Administration, Competence Building Efforts, and Extension Services */}
                <tr className="bg-gray-100">
                  <td colSpan="6" className="border border-gray-300 font-bold p-2">
                    C. Leadership and Administrative Work
                  </td>
                </tr>

                {[
                  "Leadership roles (HOD, Dean, Coordinator, Warden)",
                  "Organizing departmental or institutional events (seminars, conferences, etc.)",
                  "Policy planning, monitoring, and evaluation activities",
                  "Preparation and submission of project proposals for funding",
                  "Assistance in the admission process",
                  "Development, update, and maintenance of institutional MIS",
                  "Planning and implementation of staff development activities",
                  "Organizing and supervising industrial visits/tours"
                ].map((activity,index)=>(
                  <tr key={index}>
                    <td className="border border-gray-300 p-2">{index + 1}</td>
                    <td className="border border-gray-300 p-2">{activity}</td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        placeholder='Enter score'
                        className="w-full border border-gray-300 rounded p-1"
                      />
                    </td>
                    <td className="border border-gray-300 p-2">15</td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        placeholder='Enter score'
                        className="w-full border border-gray-300 rounded p-1"
                      />
                    </td>
                    <td className="border border-gray-300 p-2">
                    <textarea rows={1} className="w-full border  border-gray-300 rounded p-1">

                    </textarea>
                    </td>
                  </tr>
                ))}

                <tr>
                  <td colSpan={2}></td>
                  <td colSpan="1" className="border border-gray-300 font-bold p-2">
                  Total Score (Faculty)
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded p-1"
                    />
                  </td>
                  <td colSpan="1" className="border border-gray-300 font-bold p-2">
                  Total Score (HOD)
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded p-1"
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}></td>
                  <td colSpan="1" className="border border-gray-300 font-bold p-2">
                      Benchmark
                  </td>
                  <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded p-1"
                      />
                    </td>
                </tr>
                <tr>
                  <td colSpan="5" className="border  border-gray-300 font-bold p-2">
                    Relative Percentage Achievement (Total Score/Benchmark) * 100
                  </td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded p-1"
                      />
                    </td>
                </tr>
                <tr className="bg-gray-100">
                  <td colSpan="6" className="border border-gray-300 font-bold p-2">
                  D.Skill Development and Training
                  </td>
                </tr>

                {[
                  "Participation in FDPs, Refresher Courses, or STTPs",
                  "Attending workshops, seminars, or conferences",
                  "Organizing workshops, seminars, or conferences",
                  "Pursuing and acquiring higher qualifications (Ph.D., certifications)"
                ].map((activity,index)=>(
                  <tr key={index}>
                    <td className="border border-gray-300 p-2">{index + 1}</td>
                    <td className="border border-gray-300 p-2">{activity}</td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        placeholder='Enter score'
                        className="w-full border border-gray-300 rounded p-1"
                      />
                    </td>
                    <td className="border border-gray-300 p-2">15</td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        placeholder='Enter score'
                        className="w-full border border-gray-300 rounded p-1"
                      />
                    </td>
                    <td className="border border-gray-300 p-2">
                    <textarea rows={1} className="w-full border  border-gray-300 rounded p-1">

                    </textarea>
                    </td>
                  </tr>
                ))}

                
                <tr>
                  <td colSpan={2}></td>
                  <td colSpan="1" className="border border-gray-300 font-bold p-2">
                  Total Score (Faculty)
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded p-1"
                    />
                  </td>
                  <td colSpan="1" className="border border-gray-300 font-bold p-2">
                  Total Score (HOD)
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded p-1"
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}></td>
                  <td colSpan="1" className="border border-gray-300 font-bold p-2">
                      Benchmark
                  </td>
                  <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded p-1"
                      />
                    </td>
                </tr>
                <tr>
                  <td colSpan="5" className="border  border-gray-300 font-bold p-2">
                    Relative Percentage Achievement (Total Score/Benchmark) * 100
                  </td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded p-1"
                      />
                    </td>
                </tr>

                <tr className="bg-gray-100">
                  <td colSpan="6" className="border border-gray-300 font-bold p-2">
                  E.Community Service and Extra Activities
                  </td>
                </tr>

                {[
                  "Participation in community services (NSS, NCC, etc.)",
                  "Providing R&D support and consultancy to industry",
                  "Providing non-formal education to benefit the community",
                  "Promotion of entrepreneurship and job creation",
                  "Technical support in socially relevant areas"
                ].map((activity,index)=>(
                  <tr key={index}>
                    <td className="border border-gray-300 p-2">{index + 1}</td>
                    <td className="border border-gray-300 p-2">{activity}</td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        placeholder='Enter score'
                        className="w-full border border-gray-300 rounded p-1"
                      />
                    </td>
                    <td className="border border-gray-300 p-2">15</td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        placeholder='Enter score'
                        className="w-full border border-gray-300 rounded p-1"
                      />
                    </td>
                    <td className="border border-gray-300 p-2">
                    <textarea rows={1} className="w-full border  border-gray-300 rounded p-1">

                    </textarea>
                    </td>
                  </tr>
                ))}

                
                <tr>
                  <td colSpan={2}></td>
                  <td colSpan="1" className="border border-gray-300 font-bold p-2">
                  Total Score (Faculty)
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded p-1"
                    />
                  </td>
                  <td colSpan="1" className="border border-gray-300 font-bold p-2">
                  Total Score (HOD)
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded p-1"
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}></td>
                  <td colSpan="1" className="border border-gray-300 font-bold p-2">
                      Benchmark
                  </td>
                  <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded p-1"
                      />
                    </td>
                </tr>
                <tr>
                  <td colSpan="5" className="border  border-gray-300 font-bold p-2">
                    Relative Percentage Achievement (Total Score/Benchmark) * 100
                  </td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded p-1"
                      />
                    </td>
                </tr>

                <h1 className='font-bold text-lg p-2'>Note</h1>
                <tr>
                  <td  className='pl-2' colSpan={6}>
                    1. The highest marks scored by any faculty in each sub-head will be taken as the BENCH MARK. Individual faculty score will be accordingly converted in terms of percentage.
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      ),
    },
    {
      title: 'APPRAISAL BY HOD/Director',
      content: (
        <div className="p-8 bg-gray-200">
        <h4 className="text-xl font-bold mb-6 text-center">APPRAISAL BY HOD/Director</h4>
        <div className="bg-white p-6 rounded shadow-md">
          <form className="space-y-6">
            {/* Academic Year and Faculty Details */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Academic Year:</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter academic year"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Name of the Faculty Member:</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter name"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Designation:</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter designation"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Department:</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter department"
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium">Date of Joining the Present Post:</label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
  
            {/* Evaluation Parameters */}
            <div>
              <h2 className="text-lg font-semibold">A. Performance Assessment</h2>
              <table className="w-full border-collapse border border-gray-400 mt-4">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-400 px-4 py-2">S. No.</th>
                    <th className="border border-gray-400 px-4 py-2">Evaluation Parameter</th>
                    <th className="border border-gray-400 px-4 py-2">Raw Score on 5 point scale</th>
                    <th className="border border-gray-400 px-4 py-2">Weight of Experiences</th>
                    <th className="border border-gray-400 px-4 py-2">Weighted Score</th>
                  </tr>
                </thead>
                <tbody>
                  {[{ id: 1, param: 'Academic', weight: 0.25 },
                    { id: 2, param: 'Performance in university exams (Part III)', weight: 0.35 },
                    { id: 3, param: 'Administration', weight: 0.10 },
                    { id: 4, param: 'Competence Building Effort', weight: 0.30 },
                    { id: 4, param: 'Extension Services', weight: 0.30 }]
                    .map(({ id, param, weight }) => (
                      <tr key={id}>
                        <td className="border border-gray-400 px-4 py-2 text-center">{id}</td>
                        <td className="border border-gray-400 px-4 py-2">{param}</td>
                        <td className="border border-gray-400 px-4 py-2">
                          <input
                            type="number"
                            className="w-full px-2 py-1 border rounded-md"
                            placeholder="Enter score"
                          />
                        </td>
                        <td className="border border-gray-400 px-4 py-2 text-center">{weight}</td>
                        <td className="border border-gray-400 px-4 py-2">
                          <input
                            type="number"
                            className="w-full px-2 py-1 border rounded-md"
                            placeholder="Calculated"
                            readOnly
                          />
                        </td>
                      </tr>
                      
                    ))}
                    <tr>
                <td colSpan={3}></td>
                <td colSpan={1} className='border border-gray-400 text-center'>Total out of 100</td>
                <td className='border p-3 border-gray-400'>
                  <input type="text" className='border p-2 rounded-md ' />
                </td>
            </tr>
                </tbody>
              </table>
            </div>

            <div>
            <h2 className="text-lg font-semibold">B. Personal Attributes</h2>
              <table className="w-full border-collapse border border-gray-400 mt-4">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-400 px-4 py-2">S. No.</th>
                    <th className="border border-gray-400 px-4 py-2">Attributes</th>
                    <th className="border border-gray-400 px-4 py-2">Appraisal on 5 point scale</th>
                    <th className="border border-gray-400 px-4 py-2">Suggestions for improvement, if needed</th>
                  </tr>
                </thead>
                <tbody>
                  {[{ id: 1, param: 'Academic', weight: 0.25 },
                    { id: 2, param: 'Performance in university exams (Part III)', weight: 0.35 },
                    { id: 3, param: 'Administration', weight: 0.10 },
                    { id: 4, param: 'Competence Building Effort', weight: 0.30 },
                    { id: 4, param: 'Extension Services', weight: 0.30 }]
                    .map(({ id, param, weight }) => (
                      <tr key={id}>
                        <td className="border border-gray-400 px-4 py-2 text-center">{id}</td>
                        <td className="border border-gray-400 px-4 py-2">{param}</td>
                        <td className="border border-gray-400 px-4 py-2">
                          <input
                            type="number"
                            className="w-full px-2 py-1 border rounded-md"
                            placeholder="Enter score"
                          />
                        </td>
                        <td className="border border-gray-400 px-4 py-2 text-center">{weight}</td>
                        
                      </tr>  
                  ))}

                <tr>
                  
                  <td colSpan={1} className='border border-gray-400 text-center'>Total of B</td>
                  <td className='border p-3 border-gray-400'>
                    <input type="text" className='border w-full p-2 rounded-md ' />
                  </td>
                  <td colSpan={1} className='border border-gray-400 text-center'>Out of 5</td>
                  <td className='border p-3 border-gray-400'>
                    <input type="text" className='border w-full p-2 rounded-md ' />
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        </div>
      ),
    },
    {
      title: 'Awards & Recognitions',
      content: (
      <div className="p-8 bg-gray-200">
      <h4 className="text-xl font-bold mb-8 text-center">ACADEMIC PERFORMANCE</h4>

      <form className="bg-white p-8 rounded-lg">
        {/* Header Section */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1 font-medium">Name of the faculty Member:</label>
            <input
              type="text"
              placeholder="Enter the faculty name"
              className="w-full px-2 py-2 border rounded-md "
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Academic Year:</label>
            <input
              type="text"
              placeholder="Enter Academic Year"
              className="w-full px-2 py-2 border rounded-md"
            />
          </div>
        </div>

        <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">S. No.</th>
              <th className="border border-gray-300 p-2">Performance Parameters</th>
              <th className="border border-gray-300 p-2">Bench Mark</th>
              <th className="border border-gray-300 p-2">Present Data</th>
              <th className="border border-gray-300 p-2">Raw Score on 5 Point scale</th>
              <th className="border border-gray-300 p-2">Weight</th>
              <th className="border border-gray-300 p-2">Weighted Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2"></td>
              <td className="border border-gray-300 p-2">
                Clear Pass Percentage
                
                  {subjects.map((subject, index) => (
                    <input
                    key={`presentData-${index}`}
                    type="text"
                    placeholder={subject}
                    className="w-full border p-2 mb-1"
                  />
                  ))}
                
              </td>
              <td className="border border-gray-300 p-2">
                {subjects.map((subject, index) => (
                  <input
                    key={`benchmark-${index}`}
                    type="text"
                    placeholder={subject}
                    className="w-full border p-2 mb-1"
                  />
                ))}
              </td>
              <td className="border border-gray-300 p-2">
                {subjects.map((subject, index) => (
                  <input
                    key={`presentData-${index}`}
                    type="text"
                    placeholder={subject}
                    className="w-full border p-2 mb-1"
                  />
                ))}
              </td>
              <td className="border border-gray-300 p-2">
                {subjects.map((subject, index) => (
                  <input
                    key={`rawScore-${index}`}
                    type="text"
                    placeholder={subject}
                    className="w-full border p-2 mb-1"
                  />
                ))}
              </td>
              <td className="border text-center border-gray-300 p-2">0.40</td>
              <td className="border border-gray-300 p-2">
                {subjects.map((subject, index) => (
                  <input
                    key={`weightedScore-${index}`}
                    type="text"
                    placeholder={subject}
                    className="w-full border p-2 mb-1"
                  />
                ))}
                {/* Add Subject Button */}
                <td>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={addSubject}
                    className=" bg-blue-500 text-white px-2 py-1 hover:bg-blue-600"
                  >
                   Add subject
                  </button>
                </div>
                </td>
              </td>
            </tr>

            <tr>
              <td className="border border-gray-300 p-2">1</td>
              <td className="border border-gray-300 p-2">
                Clear Pass Percentage
                <ul>
                  {subjects.map((subject, index) => (
                    <input
                    key={`presentData-${index}`}
                    type="text"
                    placeholder={subject}
                    className="w-full border p-2 mb-1"
                  />
                  ))}
                </ul>
              </td>
              <td className="border border-gray-300 p-2">
                {subjects.map((subject, index) => (
                  <input
                    key={`benchmark-${index}`}
                    type="text"
                    placeholder={subject}
                    className="w-full border p-2 mb-1"
                  />
                ))}
              </td>
              <td className="border border-gray-300 p-2">
                {subjects.map((subject, index) => (
                  <input
                    key={`presentData-${index}`}
                    type="text"
                    placeholder={subject}
                    className="w-full border p-2 mb-1"
                  />
                ))}
              </td>
              <td className="border border-gray-300 p-2">
                {subjects.map((subject, index) => (
                  <input
                    key={`rawScore-${index}`}
                    type="text"
                    placeholder={subject}
                    className="w-full border p-2 mb-1"
                  />
                ))}
              </td>
              <td className="border text-center border-gray-300 p-2">0.40</td>
              <td className="border border-gray-300 p-2">
                {subjects.map((subject, index) => (
                  <input
                    key={`weightedScore-${index}`}
                    type="text"
                    placeholder={subject}
                    className="w-full border p-2 mb-1"
                  />
                ))}
                {/* Add Subject Button */}
                <td>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={addSubject}
                    className=" bg-blue-500 text-white px-2 py-1 hover:bg-blue-600"
                  >
                   Add subject
                  </button>
                </div>
                </td>
              </td>
            </tr>


            <tr>
              <td className="border border-gray-300 p-2">1</td>
              <td className="border border-gray-300 p-2">
                Clear Pass Percentage
                <ul>
                  {subjects.map((subject, index) => (
                    <input
                    key={`presentData-${index}`}
                    type="text"
                    placeholder={subject}
                    className="w-full border p-2 mb-1"
                  />
                  ))}
                </ul>
              </td>
              <td className="border border-gray-300 p-2">
                {subjects.map((subject, index) => (
                  <input
                    key={`benchmark-${index}`}
                    type="text"
                    placeholder={subject}
                    className="w-full border p-2 mb-1"
                  />
                ))}
              </td>
              <td className="border border-gray-300 p-2">
                {subjects.map((subject, index) => (
                  <input
                    key={`presentData-${index}`}
                    type="text"
                    placeholder={subject}
                    className="w-full border p-2 mb-1"
                  />
                ))}
              </td>
              <td className="border border-gray-300 p-2">
                {subjects.map((subject, index) => (
                  <input
                    key={`rawScore-${index}`}
                    type="text"
                    placeholder={subject}
                    className="w-full border p-2 mb-1"
                  />
                ))}
              </td>
              <td className="border text-center border-gray-300 p-2">0.40</td>
              <td className="border border-gray-300 p-2">
                {subjects.map((subject, index) => (
                  <input
                    key={`weightedScore-${index}`}
                    type="text"
                    placeholder={subject}
                    className="w-full border p-2 mb-1"
                  />
                ))}
                {/* Add Subject Button */}
                <td>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={addSubject}
                    className=" bg-blue-500 text-white px-2 py-1 hover:bg-blue-600"
                  >
                   Add subject
                  </button>
                </div>
                </td>
              </td>
            </tr>
            <tr >
              <td colSpan={5}></td>
              <td className='border p-3'>Total</td>
              <td className='border p-3'>
                <input type="text" className='border p-2' />
              </td>
            </tr>
            <tr>
              <td colSpan={4}></td>
              <td colSpan={2} className='border text-center'>Total out of 100</td>
              <td className='border p-3'>
                <input type="text" className='border p-2' />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      </div>
      
      
        
      ),
    },
    {
      title: 'Training & Workshops ', 
      content: (
        <div className="p-8 bg-gray-200">
        <h4 className="text-xl font-bold mb-7 text-center">PEER EVALUATION REPORT</h4>
        <div className="bg-white p-6 rounded shadow-md">
          <form className="space-y-6">
            {/* Academic Year and Faculty Details */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Academic Year</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter academic year"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Name of the Faculty Member</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md "
                  placeholder="Enter name"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">No. of Peer Group Members</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md "
                  placeholder="Enter peer Group of Members"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Department</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md "
                  placeholder="Enter department"
                />
              </div>
            </div>

            <div>
              <table className='w-full border-collapse border border-gray-400 mt-4'>
                <thead>
                  <tr className='bg-gray-300'>
                    <th className='border border-gray-400 px-4 py-2'>S. No</th>
                    <th className='border border-gray-400 px-4 py-2'>Attributes</th>
                    <th className='border border-gray-400 px-4 py-2'>Raw Score on 5 point scale</th>
                    <th className='border border-gray-400 px-4 py-2'>Weight</th>
                    <th className='border border-gray-400 px-4 py-2'>Weighted Score</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {id:1,param:"Interpersonal Relations",weight:0.15},
                    {id:2,param:"Empathy with colleagues",weight:0.15},
                    {id:3,param:"Team Players",weight:0.15},
                    {id:4,param:"Commitment to teaching & academic discipline",weight:0.15},
                    {id:5,param:"Innovation & Creatively",weight:0.15},
                  ].map(({id,param,weight})=>(
                    <tr key={id}>
                      <td className='border border-gray-400 px-4 py-2'>{id}</td>
                      <td className='border border-gray-400 px-4 py-2'>{param}</td>
                      <td className="border border-gray-400 px-4 py-2">
                          <input
                            type="number"
                            className="w-full px-2 py-1 border rounded-md"
                            placeholder="Enter score"
                          />
                      </td>
                      <td className='border border-gray-400 px-4 py-2'>{weight}</td>
                      <td className="border border-gray-400 px-4 py-2">
                          <input
                            type="number"
                            className="w-full px-2 py-1 border rounded-md"
                            placeholder="Enter score"
                          />
                      </td>
                    </tr>
                    
                  ))}
                              <tr >
              <td colSpan={3}></td>
              <td className='border border-gray-400  px-4 py-2'>Total</td>
              <td className='border border-gray-400 px-4 py-2'>
                <input type="text" className='border rounded-md p-2' />
              </td>
            </tr>
            <tr>
              <td colSpan={2}></td>
              <td colSpan={2} className='border text-center border-gray-400 px-4 py-2'>Total out of 100</td>
              <td className='border border-gray-400 px-4 py-2 p-3'>
                <input type="text" className='border rounded-md p-2' />
              </td>
            </tr>
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        </div>
      )
    },

    {
      title: 'Student Feedback Form',
      content: (

      <div className="p-6 bg-gray-100">
      <h1 className="text-2xl text-center font-bold mb-8">Student Feedback Form</h1>

      <div className="mb-6">
        <h2 className="text-lg mb-2 font-semibold">Part A</h2>
        <div className="mb-4">
          <label className="block font-medium">(i) What has been your attendance in the class?</label>
          <div>
            <label><input type="checkbox" value="less60" /> Less than 60%</label>
            <label className="ml-4"><input type="checkbox" value="60-70" /> Between 60-70%</label>
            <label className="ml-4"><input type="checkbox" value="70-80" /> Between 70-80%</label>
            <label className="ml-4"><input type="checkbox" value="more" /> More</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block font-medium">(ii) Why was your attendance lower than 90%?</label>
          <textarea className="w-full border rounded p-2" rows="3"></textarea>
        </div>
        <div className="mb-4">
          <label className="block font-medium">(iii) What should college authorities do to improve student attendance?</label>
          <textarea className="w-full border rounded p-2" rows="3"></textarea>
        </div>
        <div className="mb-4">
          <label className="block font-medium">
            (iv) Did you find the tutorials given to you useful? If not, why did it become necessary to copy others?
          </label>
          <textarea className="w-full border rounded p-2" rows="3"></textarea>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Part B</h2>
        <table className="table-auto w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Question</th>
              <th className="border border-gray-300 px-4 py-2">Mostly (5)</th>
              <th className="border border-gray-300 px-4 py-2">Quite Often (4)</th>
              <th className="border border-gray-300 px-4 py-2">At Times (3)</th>
              <th className="border border-gray-300 px-4 py-2">Hardly (2)</th>
              <th className="border border-gray-300 px-4 py-2">Never (1)</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{question}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <input type="radio" name={`question-${index}`} value="5" />
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <input type="radio" name={`question-${index}`} value="4" />
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <input type="radio" name={`question-${index}`} value="3" />
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <input type="radio" name={`question-${index}`} value="2" />
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <input type="radio" name={`question-${index}`} value="1" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      )
    }
  ];

  const progressPercentage = Math.round(((formStep + 1) / steps.length) * 100);

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Self-Appraisal Form Submission</h2>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full mb-6">
        <div
          className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full"
          style={{ width: `${progressPercentage}%` }}
        >
          {progressPercentage}%
        </div>
      </div>

      {/* Step Titles */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-2 border-b-4 cursor-pointer transition-all duration-300 ${
                formStep === index ? 'border-blue-500 text-blue-500' : 'border-gray-300 text-gray-500'
              }`}
              onClick={() => setFormStep(index)}
            >
              {step.title}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <form>
        <div className="transition-all duration-300">{steps[formStep].content}</div>

        <div className="flex justify-between mt-4">
          {/* Previous Button */}
          <button
            type="button"
            className={`p-2 rounded flex items-center space-x-2 ${
              formStep === 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600 transition-all'
            }`}
            onClick={prevStep}
            disabled={formStep === 0}
          >
            <FaArrowLeft />
            <span>Previous</span>
          </button>

          {/* Next/Submit Button */}
          <button
            type="button"
            className={`p-2 rounded flex items-center space-x-2 ${
              formStep === steps.length - 1
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white transition-all`}
            onClick={
              formStep === steps.length - 1
                ? () => alert('Form Submitted!')
                : nextStep
            }
          >
            {formStep === steps.length - 1 ? (
              <>
                <FaCheck />
                <span>Submit</span>
              </>
            ) : (
              <>
                <span>Next</span>
                <FaArrowRight />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppraisalForm;
