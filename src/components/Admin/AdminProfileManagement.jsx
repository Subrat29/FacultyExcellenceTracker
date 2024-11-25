import React, { useState } from "react";

// Heatmap colors based on activity intensity (simulated data)
// const activityData = [
//   { day: "Mon", level: 1 },
//   { day: "Tue", level: 3 },
//   { day: "Wed", level: 0 },
//   { day: "Thu", level: 2 },
//   { day: "Fri", level: 4 },
//   { day: "Sat", level: 2 },
//   { day: "Sun", level: 1 },
// ];

const ProfileManagement = () => {
  const [experienceList, setExperienceList] = useState([
    { id: 1, experience: "Assistant Professor, ABC University (2018-2020)" },
    { id: 2, experience: "Lecturer, XYZ Institute (2015-2018)" },
  ]);
  const [fdpList, setFdpList] = useState([
    { id: 1, fdp: "AI & Machine Learning Workshop, 2021" },
    { id: 2, fdp: "Faculty Development Program on Data Science, 2022" },
  ]);
  const [conferenceList, setConferenceList] = useState([
    { id: 1, conference: "International Conference on AI, 2023" },
    { id: 2, conference: "National Seminar on Cloud Computing, 2021" },
  ]);
  const [journalList, setJournalList] = useState([
    { id: 1, journal: "Journal of Computer Science, 2020" },
    { id: 2, journal: "International Journal of AI Research, 2022" },
  ]);
  const [patentList, setPatentList] = useState([
    { id: 1, patent: "Patent on AI-driven Education Platform, 2022" },
  ]);
  const [awardList, setAwardList] = useState([
    { id: 1, award: "Best Research Paper Award, 2021" },
    { id: 2, award: "Distinguished Professor Award, 2023" },
  ]);
  const [extraCurricularList, setExtraCurricularList] = useState([
    { id: 1, activity: "Member, University Sports Committee" },
    { id: 2, activity: "Volunteer, Community Teaching Program" },
  ]);

  const addNewEntry = (list, setList) => {
    setList([...list, { id: list.length + 1, value: "" }]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Sidebar: Profile Info */}
        <div className="flex">
          <div className="w-1/3 bg-gray-100 p-4">
            <div className="flex items-center mb-6">
              <img
                src="https://via.placeholder.com/100"
                alt="Profile"
                className="w-24 h-24 rounded-full border border-gray-300 mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">Dr. John Doe</h3>
                <p className="text-gray-600">Professor, Computer Science</p>
                <p className="text-gray-500">Rank: 5</p>
              </div>
            </div>

            <button className="w-full bg-blue-500 text-white py-2 rounded-lg mb-6">
              Edit Profile
            </button>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-700">
                Professional Details
              </h4>
              <p className="text-gray-600">Institute: ABC University</p>
              <p className="text-gray-600">Department: Computer Science</p>
              <p className="text-gray-600">Date of Joining: Jan 2020</p>
              <p className="text-gray-600">Employee Code: XYZ123</p>
            </div>

            <div className="mt-4">
              <button className="w-full bg-red-500 text-white py-2 rounded-lg">
                Logout
              </button>
            </div>
          </div>

          {/* Main Content: Profile Details */}
          <div className="w-2/3 p-6">
            <h2 className="text-2xl font-bold mb-4">Profile Overview</h2>

            {/* Additional Details: Experience, Journals, etc. */}
            <form>
              {/* Experience Section */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Experience</h4>
                {experienceList.map((exp, index) => (
                  <input
                    key={index}
                    type="text"
                    value={exp.experience}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                  />
                ))}
              </div>

              {/* FDP / Seminars / Workshops Section */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">
                  FDP / Seminars / Workshops
                </h4>
                {fdpList.map((fdp, index) => (
                  <input
                    key={index}
                    type="text"
                    value={fdp.fdp}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                  />
                ))}
              </div>

              {/* Conference Section */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Conferences</h4>
                {conferenceList.map((conf, index) => (
                  <input
                    key={index}
                    type="text"
                    value={conf.conference}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                  />
                ))}
              </div>

              {/* Journals Section */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Journals</h4>
                {journalList.map((jour, index) => (
                  <input
                    key={index}
                    type="text"
                    value={jour.journal}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                  />
                ))}
              </div>

              {/* Patents Section */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Patents</h4>
                {patentList.map((pat, index) => (
                  <input
                    key={index}
                    type="text"
                    value={pat.patent}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                  />
                ))}
              </div>

              {/* Awards Section */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Awards</h4>
                {awardList.map((awd, index) => (
                  <input
                    key={index}
                    type="text"
                    value={awd.award}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                  />
                ))}
              </div>

              {/* Extracurricular Section */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">
                  Extracurricular Activities
                </h4>
                {extraCurricularList.map((act, index) => (
                  <input
                    key={index}
                    type="text"
                    value={act.activity}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                  />
                ))}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileManagement;
