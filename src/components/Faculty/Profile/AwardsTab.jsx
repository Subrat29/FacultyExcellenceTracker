import React, { useState, useEffect } from 'react';
import {
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Award,
  Calendar,
  Building2,
} from 'lucide-react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import axiosInstance from '../../../services/admin';
import consoleTerminal from '../../../utils/consoleTerminal';

function AwardsTab() {
  const faculty_id = useSelector((state) => state.auth.user._id);
  const [honours, setHonours] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newHonour, setNewHonour] = useState({
    date: '',
    title: '',
    description: '',
    awarding_body: '',
    url: '',
  });

  // Fetch honours data from the backend on component mount
  useEffect(() => {
    axios;
    axiosInstance
      .get(`/v1/faculty/awards/fetch/${faculty_id}`)
      .then((response) => {
        setHonours(response.data.data); // Assuming response.data is an array of awards
      })

      .catch((error) => {
        console.error('Error fetching awards:', error);
      });
  }, []);

  const handleAddNew = () => {
    setEditingIndex(-1);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleSave = (index) => {
    if (index === -1) {
      // Add new award
      consoleTerminal('newHonour', newHonour);
      //   axiosInstance
      //     .post('/v1/faculty/awards/update', newHonour)
      //     .then((response) => {
      //       setHonours([...honours, response.data.data]); // Add the new award to the state
      //     })
      //     .catch((error) => {
      //       console.error('Error adding award:', error);
      //     });
    } else {
      // Update existing award
      consoleTerminal('honours', honours);
      //   const updatedHonour = honours[index];
      //   axios
      //     .put(`/v1/faculty/update`, updatedHonour)
      //     .then((response) => {
      //       const updatedHonours = [...honours];
      //       updatedHonours[index] = response.data; // Update the award in the state
      //       setHonours(updatedHonours);
      //     })
      //     .catch((error) => {
      //       console.error('Error updating award:', error);
      //     });
    }

    setNewHonour({
      date: '',
      title: '',
      description: '',
      awarding_body: '',
      url: '',
    });
    setEditingIndex(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setNewHonour({
      date: '',
      title: '',
      description: '',
      awarding_body: '',
      url: '',
    });
  };

  const handleDelete = (index) => {
    const awardId = honours[index]._id;
    const updatedHonours = honours.filter((_, i) => i !== index);
    setHonours(updatedHonours);
    consoleTerminal('updatedHonours', updatedHonours);
    // axios
    //   .delete(`/api/awards/${awardId}`)
    //   .then(() => {
    //   })
    //   .catch((error) => {
    //     console.error('Error deleting award:', error);
    //   });
  };

  const handleInputChange = (e, field) => {
    if (editingIndex === -1) {
      setNewHonour({
        ...newHonour,
        [field]: e.target.value,
      });
    } else {
      const updatedHonours = [...honours];
      updatedHonours[editingIndex] = {
        ...updatedHonours[editingIndex],
        [field]: e.target.value,
      };
      setHonours(updatedHonours);
    }
  };

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 shadow-lg rounded-xl p-6 mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-3">
          <Award className="h-8 w-8 text-blue-600" strokeWidth={2} />
          <h2 className="text-3xl font-bold text-gray-800">
            Honours and Awards
          </h2>
        </div>
        <button
          onClick={handleAddNew}
          className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition transform hover:scale-110"
          title="Add New Award"
        >
          <Plus className="h-6 w-6" />
        </button>
      </div>

      {editingIndex === -1 && (
        <div className="bg-white border-2 border-blue-100 rounded-lg p-5 mb-4 shadow-sm">
          <div className="space-y-4">
            <div className="flex space-x-3 items-center">
              <Calendar className="h-5 w-5 text-blue-500" />
              <input
                type="text"
                placeholder="Year"
                value={newHonour.date}
                onChange={(e) => handleInputChange(e, 'date')}
                className="flex-grow p-2 border rounded-md focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>
            <div className="flex space-x-3 items-center">
              <Award className="h-5 w-5 text-blue-500" />
              <input
                type="text"
                placeholder="Award Title"
                value={newHonour.title}
                onChange={(e) => handleInputChange(e, 'title')}
                className="flex-grow p-2 border rounded-md focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>
            <div className="flex space-x-3 items-center">
              <Building2 className="h-5 w-5 text-blue-500" />
              <input
                type="text"
                placeholder="Organization"
                value={newHonour.awarding_body}
                onChange={(e) => handleInputChange(e, 'awarding_body')}
                className="flex-grow p-2 border rounded-md focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>
            <div className="flex space-x-3 items-start">
              <Award className="h-5 w-5 text-blue-500 mt-2" />
              <textarea
                placeholder="Description"
                value={newHonour.description}
                onChange={(e) => handleInputChange(e, 'description')}
                className="flex-grow p-2 border rounded-md focus:ring-2 focus:ring-blue-200 transition min-h-[100px]"
              />
            </div>
            <div className="flex space-x-3 items-center">
              <Building2 className="h-5 w-5 text-blue-500 mt-2" />
              <input
                type="text"
                placeholder="url"
                value={newHonour.url}
                onChange={(e) => handleInputChange(e, 'url')}
                className="flex-grow p-2 border rounded-md focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => handleSave(-1)}
                className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
              >
                <Save className="mr-2 h-4 w-4" /> Save
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                <X className="mr-2 h-4 w-4" /> Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {honours.map((honour, index) => (
        <div
          key={index}
          className="bg-white border-2 border-blue-100 rounded-lg p-5 mb-4 relative shadow-sm hover:shadow-md transition max-w-4xl"
        >
          {editingIndex === index ? (
            <div className="space-y-4">
              <div className="flex space-x-3 items-center">
                <Calendar className="h-5 w-5 text-blue-500" />
                <input
                  type="text"
                  value={honour.date}
                  onChange={(e) => handleInputChange(e, 'date')}
                  className="flex-grow p-2 border rounded-md focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
              <div className="flex space-x-3 items-center">
                <Award className="h-5 w-5 text-blue-500" />
                <input
                  type="text"
                  value={honour.title}
                  onChange={(e) => handleInputChange(e, 'title')}
                  className="flex-grow p-2 border rounded-md focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
              <div className="flex space-x-3 items-center">
                <Building2 className="h-5 w-5 text-blue-500" />
                <input
                  type="text"
                  value={honour.awarding_body}
                  onChange={(e) => handleInputChange(e, 'awarding_body')}
                  className="flex-grow p-2 border rounded-md focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
              <div className="flex space-x-3 items-start">
                <Award className="h-5 w-5 text-blue-500 mt-2" />
                <textarea
                  value={honour.description}
                  onChange={(e) => handleInputChange(e, 'description')}
                  className="flex-grow p-2 border rounded-md focus:ring-2 focus:ring-blue-200 transition min-h-[100px]"
                />
              </div>
              <div className="flex space-x-3 items-center">
                <Building2 className="h-5 w-5 text-blue-500 mt-2" />
                <input
                  type="text"
                  value={honour.url}
                  onChange={(e) => handleInputChange(e, 'url')}
                  className="flex-grow p-2 border rounded-md focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => handleSave(index)}
                  className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                >
                  <Save className="mr-2 h-4 w-4" /> Save
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                >
                  <X className="mr-2 h-4 w-4" /> Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="absolute top-2 right-2 flex space-x-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="text-blue-500 hover:bg-blue-50 p-1 rounded-full transition"
                  title="Edit"
                >
                  <Edit className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-500 hover:bg-red-50 p-1 rounded-full transition"
                  title="Delete"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {honour.title}
                  </h3>
                  <div className="flex items-center space-x-2 mb-1">
                    <Building2 className="h-4 w-4 text-gray-500" />
                    <p className="text-gray-600">{honour.awarding_body}</p>
                  </div>
                  {honour.description && (
                    <p className="text-gray-700 mt-2 italic">
                      {honour.description}
                    </p>
                  )}
                  <div className="flex items-center space-x-2 mt-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <p className="text-sm text-gray-500">{honour.date}</p>
                  </div>
                  {honour.url && honour.url !== 'N/A' && (
                    <p className="text-blue-600 mt-2">
                      <a
                        href={honour.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {honour.url}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default AwardsTab;
