import React, { useState } from "react";
import {
    Edit, Save, X, Plus, Trash2, CheckCircle2, Building2, Pencil,
    Briefcase, Building, Calendar, Award, ChevronRight
} from "lucide-react";

function ExperienceTab() {
    const [experiences, setExperiences] = useState([
        {
            position: "Professor (HAG)",
            institution: "Indian Institute of Technology Delhi",
            department: "Electrical Engineering",
            startDate: "2014-01-01",
            endDate: "Present",
            currentlyWorking: true,
            description: "Senior academic role with research and administrative responsibilities",
        },
        {
            position: "Professor",
            institution: "Indian Institute of Technology Delhi",
            department: "Electrical Engineering",
            startDate: "2005-01-01",
            endDate: "2014-12-31",
            currentlyWorking: false,
            description: "Academic position focused on teaching and research",
        },
    ]);

    const [editedRecordIndex, setEditedRecordIndex] = useState(null);
    const [editedExperience, setEditedExperience] = useState({});
    const [addingNew, setAddingNew] = useState(false);

    const handleEditToggle = (index) => {
        if (editedRecordIndex === index) {
            setEditedRecordIndex(null);
        } else {
            setEditedRecordIndex(index);
            setEditedExperience({ ...experiences[index] });
        }
    };

    const handleInputChange = (field, value) => {
        const updatedExperience = { ...editedExperience };
        updatedExperience[field] = value;

        if (field === "currentlyWorking") {
            updatedExperience.endDate = value ? "Present" : "";
        }

        setEditedExperience(updatedExperience);
    };

    const handleSave = (index) => {
        const updatedExperiences = [...experiences];
        updatedExperiences[index] = { ...editedExperience };
        setExperiences(updatedExperiences);
        setEditedRecordIndex(null);
    };

    const handleAddExperience = () => {
        setAddingNew(true);
        setEditedExperience({
            position: "",
            institution: "",
            department: "",
            startDate: "",
            endDate: "",
            currentlyWorking: false,
            description: "",
        });
    };

    const handleSaveNew = () => {
        setExperiences([...experiences, editedExperience]);
        setAddingNew(false);
        setEditedExperience({});
    };

    const handleCancel = () => {
        setEditedRecordIndex(null);
        setAddingNew(false);
        setEditedExperience({});
    };

    const handleRemoveExperience = (index) => {
        const updatedExperiences = experiences.filter((_, i) => i !== index);
        setExperiences(updatedExperiences);
    };

    const formatDate = (dateString) => {
        if (!dateString) return "";
        if (dateString === "Present") return dateString;
        return new Date(dateString).toLocaleDateString("en-US", { month: "short", year: "numeric" });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex justify-between items-center bg-gray-100 p-4">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                        <Award className="mr-3 text-blue-600" size={28} />
                        Professional Experience
                    </h2>
                    <button
                        onClick={handleAddExperience}
                        className="text-green-600 hover:bg-green-100 p-2 rounded-full transition duration-300"
                    >
                        <Plus size={24} />
                    </button>
                </div>

                <div className="p-6">
                    {experiences.map((exp, index) => (
                        <div key={index} className="mb-6 pb-6 border-b">
                            {editedRecordIndex === index ? (
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 w-full md:w-1/2">
                                        <Briefcase size={20} className="text-gray-500" />
                                        <input
                                            type="text"
                                            value={editedExperience.position}
                                            onChange={(e) => handleInputChange("position", e.target.value)}
                                            className="w-full border rounded px-2 py-1"
                                            placeholder="Position"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2 w-full md:w-1/2">
                                        <Building size={20} className="text-gray-500" />
                                        <input
                                            type="text"
                                            value={editedExperience.institution}
                                            onChange={(e) => handleInputChange("institution", e.target.value)}
                                            className="w-full border rounded px-2 py-1"
                                            placeholder="Institution"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2 w-full md:w-1/2">
                                        <ChevronRight size={20} className="text-gray-500" />
                                        <input
                                            type="text"
                                            value={editedExperience.department}
                                            onChange={(e) => handleInputChange("department", e.target.value)}
                                            className="w-full border rounded px-2 py-1"
                                            placeholder="Department"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2 w-full md:w-1/2">
                                        <Calendar size={20} className="text-gray-500" />
                                        <input
                                            type="date"
                                            value={editedExperience.startDate}
                                            onChange={(e) => handleInputChange("startDate", e.target.value)}
                                            className="w-full border rounded px-2 py-1"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2 w-full md:w-1/2">
                                        <Calendar size={20} className="text-gray-500" />
                                        <input
                                            type="date"
                                            value={editedExperience.currentlyWorking ? "" : editedExperience.endDate}
                                            onChange={(e) => handleInputChange("endDate", e.target.value)}
                                            disabled={editedExperience.currentlyWorking}
                                            className={`w-full border rounded px-2 py-1 ${editedExperience.currentlyWorking ? "bg-gray-100 text-gray-500" : ""
                                                }`}
                                        />
                                    </div>
                                    <div className="flex items-center gap-2 w-full md:w-1/2">
                                        <input
                                            type="checkbox"
                                            checked={editedExperience.currentlyWorking}
                                            onChange={(e) => handleInputChange("currentlyWorking", e.target.checked)}
                                            className="mr-2"
                                        />
                                        <label className="text-sm text-gray-600">
                                            Currently Working
                                        </label>
                                    </div>
                                    <div className="flex gap-4 mt-4">
                                        <button
                                            onClick={() => handleSave(index)}
                                            className="text-blue-600 hover:bg-blue-100 p-2 rounded transition duration-300"
                                        >
                                            <Save size={20} />
                                        </button>
                                        <button
                                            onClick={handleCancel}
                                            className="text-red-600 hover:bg-red-100 p-2 rounded transition duration-300"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex bg-white shadow-sm rounded-lg p-4 mb-4 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                    {/* Date Column */}
                                    <div className="w-1/4 pr-4 border-r border-gray-200 flex flex-col items-end">
                                        <div className="flex items-center text-gray-600 mb-2">
                                            <Calendar size={16} className="mr-2 text-gray-500" />
                                            <span className="font-medium">{formatDate(exp.startDate)}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <Calendar size={16} className="mr-2 text-gray-500" />
                                            <span className="font-medium">{formatDate(exp.endDate)}</span>
                                        </div>
                                    </div>

                                    {/* Experience Details Column */}
                                    <div className="w-3/4 pl-4 flex justify-between items-center">
                                        <div>
                                            <div className="flex items-center mb-1">
                                                <Briefcase size={16} className="mr-2 text-blue-500" />
                                                <h3 className="text-lg font-bold text-gray-800">{exp.position}</h3>
                                            </div>
                                            <div className="flex items-center mb-1">
                                                <Building2 size={16} className="mr-2 text-green-500" />
                                                <p className="text-gray-700">{exp.institution}</p>
                                            </div>
                                            <p className="text-sm text-gray-500">{exp.department}</p>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => handleEditToggle(index)}
                                                className="text-blue-600 hover:bg-blue-100 p-2 rounded-full transition-colors"
                                                aria-label="Edit Experience"
                                            >
                                                <Pencil size={20} />
                                            </button>
                                            <button
                                                onClick={() => handleRemoveExperience(index)}
                                                className="text-red-600 hover:bg-red-100 p-2 rounded-full transition-colors"
                                                aria-label="Remove Experience"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    {addingNew && (
                        <div className="mb-6 pb-6 border-b">
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 w-full md:w-1/2">
                                    <Briefcase size={20} className="text-gray-500" />
                                    <input
                                        type="text"
                                        value={editedExperience.position}
                                        onChange={(e) => handleInputChange("position", e.target.value)}
                                        className="w-full border rounded px-2 py-1"
                                        placeholder="Position"
                                    />
                                </div>
                                <div className="flex items-center gap-2 w-full md:w-1/2">
                                    <Building size={20} className="text-gray-500" />
                                    <input
                                        type="text"
                                        value={editedExperience.institution}
                                        onChange={(e) => handleInputChange("institution", e.target.value)}
                                        className="w-full border rounded px-2 py-1"
                                        placeholder="Institution"
                                    />
                                </div>
                                <div className="flex items-center gap-2 w-full md:w-1/2">
                                    <ChevronRight size={20} className="text-gray-500" />
                                    <input
                                        type="text"
                                        value={editedExperience.department}
                                        onChange={(e) => handleInputChange("department", e.target.value)}
                                        className="w-full border rounded px-2 py-1"
                                        placeholder="Department"
                                    />
                                </div>
                                <div className="flex items-center gap-2 w-full md:w-1/2">
                                    <Calendar size={20} className="text-gray-500" />
                                    <input
                                        type="date"
                                        value={editedExperience.startDate}
                                        onChange={(e) => handleInputChange("startDate", e.target.value)}
                                        className="w-full border rounded px-2 py-1"
                                    />
                                </div>
                                <div className="flex items-center gap-2 w-full md:w-1/2">
                                    <Calendar size={20} className="text-gray-500" />
                                    <input
                                        type="date"
                                        value={editedExperience.currentlyWorking ? "" : editedExperience.endDate}
                                        onChange={(e) => handleInputChange("endDate", e.target.value)}
                                        disabled={editedExperience.currentlyWorking}
                                        className={`w-full border rounded px-2 py-1 ${editedExperience.currentlyWorking ? "bg-gray-100 text-gray-500" : ""
                                            }`}
                                    />
                                </div>
                                <div className="flex items-center gap-2 w-full md:w-1/2">
                                    <input
                                        type="checkbox"
                                        checked={editedExperience.currentlyWorking}
                                        onChange={(e) => handleInputChange("currentlyWorking", e.target.checked)}
                                        className="mr-2"
                                    />
                                    <label className="text-sm text-gray-600">Currently Working</label>
                                </div>
                                <div className="flex items-center gap-2 w-full">
                                    <textarea
                                        value={editedExperience.description}
                                        onChange={(e) => handleInputChange("description", e.target.value)}
                                        className="w-full border rounded px-2 py-1"
                                        placeholder="Job Description"
                                        rows="3"
                                    />
                                </div>
                                <div className="flex gap-4 mt-4">
                                    <button
                                        onClick={handleSaveNew}
                                        className="text-green-600 hover:bg-green-100 p-2 rounded transition duration-300"
                                    >
                                        <Save size={20} />
                                    </button>
                                    <button
                                        onClick={handleCancel}
                                        className="text-red-600 hover:bg-red-100 p-2 rounded transition duration-300"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default ExperienceTab;
