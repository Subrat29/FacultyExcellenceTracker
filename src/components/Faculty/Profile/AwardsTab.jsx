import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, X, Award, Calendar, Building2 } from 'lucide-react';

function AwardsTab() {
    const [honours, setHonours] = useState([
        {
            "year": "2021",
            "title": "IETE B V Baliga Award",
            "description": "For outstanding contribution in the field of Electronics and Telecommunication with emphasis on R & D and industrial development during the past 10 years.",
            "organization": "IETE"
        },
        {
            "year": "2020",
            "title": "Pandit Deendayal Upadhyay Telecom Skill Excellence Award",
            "description": "Awarded on 8 Sep 2020.",
            "organization": "Department of Telecom (DoT), Government of India"
        }
    ]);

    const [editingIndex, setEditingIndex] = useState(null);
    const [newHonour, setNewHonour] = useState({
        year: '',
        title: '',
        description: '',
        organization: ''
    });

    const handleAddNew = () => {
        setEditingIndex(-1);
    };

    const handleEdit = (index) => {
        setEditingIndex(index);
    };

    const handleSave = (index) => {
        if (index === -1) {
            setHonours([...honours, newHonour]);
        } else {
            const updatedHonours = [...honours];
            updatedHonours[index] = { ...honours[index] }; // Ensure deep copy
        }
        setNewHonour({ year: '', title: '', description: '', organization: '' });
        setEditingIndex(null);
    };

    const handleCancel = () => {
        setEditingIndex(null);
        setNewHonour({ year: '', title: '', description: '', organization: '' });
    };

    const handleDelete = (index) => {
        const updatedHonours = honours.filter((_, i) => i !== index);
        setHonours(updatedHonours);
    };

    const handleInputChange = (e, field) => {
        if (editingIndex === -1) {
            setNewHonour({
                ...newHonour,
                [field]: e.target.value
            });
        } else {
            const updatedHonours = [...honours];
            updatedHonours[editingIndex] = {
                ...updatedHonours[editingIndex],
                [field]: e.target.value
            };
            setHonours(updatedHonours);
        }
    };

    return (
        <div className="bg-gradient-to-br from-white to-blue-50 shadow-lg rounded-xl p-6 mx-auto">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-3">
                    <Award className="h-8 w-8 text-blue-600" strokeWidth={2} />
                    <h2 className="text-3xl font-bold text-gray-800">Honours and Awards</h2>
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
                                value={newHonour.year}
                                onChange={(e) => handleInputChange(e, 'year')}
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
                                value={newHonour.organization}
                                onChange={(e) => handleInputChange(e, 'organization')}
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
                                    value={honour.year}
                                    onChange={(e) => handleInputChange(e, 'year')}
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
                                    value={honour.organization}
                                    onChange={(e) => handleInputChange(e, 'organization')}
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
                                    <h3 className="text-xl font-bold text-gray-800 mb-1">{honour.title}</h3>
                                    <div className="flex items-center space-x-2 mb-1">
                                        <Building2 className="h-4 w-4 text-gray-500" />
                                        <p className="text-gray-600">{honour.organization}</p>
                                    </div>
                                    {honour.description && (
                                        <p className="text-gray-700 mt-2 italic">{honour.description}</p>
                                    )}
                                    <div className="flex items-center space-x-2 mt-2">
                                        <Calendar className="h-4 w-4 text-gray-500" />
                                        <p className="text-sm text-gray-500">{honour.year}</p>
                                    </div>
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