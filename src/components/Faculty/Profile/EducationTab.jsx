import React, { useState } from 'react';
import { GraduationCap, BookOpen, Building2, Calendar, Plus, Pencil, Trash2, X, Save } from 'lucide-react';

function EducationTab() {
    const [educations, setEducations] = useState([
        {
            "degree": "Ph.D.",
            "institution": "IISc Bangalore",
            "subject": "Electrical Communication Engg",
            "passing_year": "1991",
        },
        {
            "degree": "M.Tech.",
            "institution": "IIT Bombay",
            "subject": "Electrical Engg",
            "passing_year": "1986",
        }
    ]);

    const [editingId, setEditingId] = useState(null);
    const [newEntry, setNewEntry] = useState(null);

    const handleEdit = (index) => {
        setEditingId(index);
        setNewEntry(null);
    };

    const handleDelete = (index) => {
        const updatedEducations = educations.filter((_, i) => i !== index);
        setEducations(updatedEducations);
    };

    const handleAddNew = () => {
        setNewEntry({
            degree: '',
            institution: '',
            subject: '',
            passing_year: ''
        });
        setEditingId(null);
    };

    const handleCancel = () => {
        setEditingId(null);
        setNewEntry(null);
    };

    const handleSave = () => {
        if (newEntry) {
            setEducations([...educations, newEntry]);
            setNewEntry(null);
        } else if (editingId !== null) {
            const updatedEducations = educations.map((edu, index) => 
                index === editingId ? { ...edu, ...editedEducation } : edu
            );
            setEducations(updatedEducations);
            setEditingId(null);
        }
    };

    const [editedEducation, setEditedEducation] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (newEntry) {
            setNewEntry(prev => ({ ...prev, [name]: value }));
        } else {
            setEditedEducation(prev => ({ ...prev, [name]: value }));
        }
    };

    return (
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Education Qualifications</h2>
                <button 
                    onClick={handleAddNew}
                    className="text-green-500 hover:text-green-700"
                >
                    <Plus className="h-6 w-6" />
                </button>
            </div>
            <div className="space-y-4">
                {[...educations, newEntry].filter(Boolean).map((edu, index) => (
                    <div 
                        key={index} 
                        className="flex items-center border rounded-lg p-4 relative group hover:shadow-md transition-shadow"
                    >
                        {/* Year Column */}
                        <div className="w-24 mr-4 text-right flex items-center justify-end">
                            <Calendar className="mr-2 text-gray-500" size={20} />
                            {editingId === index || (newEntry && index === educations.length) ? (
                                <input
                                    type="text"
                                    name="passing_year"
                                    placeholder="Year"
                                    value={newEntry ? newEntry.passing_year : editedEducation.passing_year || edu.passing_year}
                                    onChange={handleInputChange}
                                    className="w-full text-right rounded-md border-gray-300"
                                />
                            ) : (
                                <span className="font-semibold text-gray-600">{edu.passing_year}</span>
                            )}
                        </div>

                        {/* Vertical Separator */}
                        <div className="w-px h-full bg-gray-300 mx-4"></div>

                        {/* Details Column */}
                        <div className="flex-grow">
                            {editingId === index || (newEntry && index === educations.length) ? (
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="flex items-center">
                                        <GraduationCap className="mr-2 text-gray-500" size={20} />
                                        <input
                                            type="text"
                                            name="degree"
                                            placeholder="Degree"
                                            value={newEntry ? newEntry.degree : editedEducation.degree || edu.degree}
                                            onChange={handleInputChange}
                                            className="w-full rounded-md border-gray-300"
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <BookOpen className="mr-2 text-gray-500" size={20} />
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Subject"
                                            value={newEntry ? newEntry.subject : editedEducation.subject || edu.subject}
                                            onChange={handleInputChange}
                                            className="w-full rounded-md border-gray-300"
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <Building2 className="mr-2 text-gray-500" size={20} />
                                        <input
                                            type="text"
                                            name="institution"
                                            placeholder="Institution"
                                            value={newEntry ? newEntry.institution : editedEducation.institution || edu.institution}
                                            onChange={handleInputChange}
                                            className="w-full rounded-md border-gray-300"
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center space-x-4">
                                    <GraduationCap className="text-gray-500" size={20} />
                                    <div>
                                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                                        <p className="text-gray-600 flex items-center">
                                            <BookOpen className="mr-2 text-gray-500" size={16} />
                                            {edu.subject}
                                        </p>
                                        <p className="text-sm text-gray-500 flex items-center">
                                            <Building2 className="mr-2 text-gray-500" size={16} />
                                            {edu.institution}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Action Buttons */}
                        {editingId === index || (newEntry && index === educations.length) ? (
                            <div className="flex space-x-2 ml-4">
                                <button onClick={handleCancel} className="text-gray-500 hover:text-gray-700">
                                    <X className="h-5 w-5" />
                                </button>
                                <button onClick={handleSave} className="text-green-500 hover:text-green-700">
                                    <Save className="h-5 w-5" />
                                </button>
                            </div>
                        ) : (
                            <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button 
                                    onClick={() => handleEdit(index)}
                                    className="text-blue-500 hover:text-blue-700"
                                >
                                    <Pencil className="h-4 w-4" />
                                </button>
                                <button 
                                    onClick={() => handleDelete(index)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EducationTab;