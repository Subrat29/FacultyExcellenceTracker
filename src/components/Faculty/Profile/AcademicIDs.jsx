import React, { useState } from 'react';
import { PencilIcon, ImportIcon, RefreshCcwIcon, X } from 'lucide-react';

function AcademicIDs() {
    const [academicIds, setAcademicIds] = useState([
        { label: "Employee Id", value: "234283" },
        { label: "Orcid Id", value: "0000-0002-2845-5598", importable: true },
        { label: "Scopus Id", value: "7202157363", importable: true },
        { label: "Researcher Id", value: "M-2912-2014" },
        { label: "Google Scholar Id", value: "NxV3pDYAAAAJ" },
    ]);

    const [isEditing, setIsEditing] = useState(false);

    const handleToggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleValueChange = (index, newValue) => {
        const newAcademicIds = [...academicIds];
        newAcademicIds[index].value = newValue;
        setAcademicIds(newAcademicIds);
    };

    const handleImport = (index) => {
        // Placeholder for import functionality
        alert(`Importing publications for ${academicIds[index].label}`);
    };

    const handleUpdate = (index) => {
        // Placeholder for update functionality
        alert(`Updating publications for ${academicIds[index].label}`);
    };

    return (
        <div className="w-full max-w-full p-4 sm:p-6">
            <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Academic IDs</h2>
                    <button
                        onClick={handleToggleEdit}
                        className={`px-3 py-1 rounded-md transition-colors duration-300 ${isEditing
                                ? 'bg-green-500 text-white hover:bg-green-600'
                                : 'bg-blue-500 text-white hover:bg-blue-600'
                            }`}
                    >
                        {isEditing ? 'Save' : 'Edit'}
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {academicIds.map((id, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-4 rounded-lg shadow-sm"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-gray-600 font-medium">{id.label}</span>
                                <div className="flex items-center space-x-2">
                                    {id.importable && (
                                        <>
                                            <button
                                                onClick={() => handleImport(index)}
                                                className="text-blue-500 hover:text-blue-600"
                                                title="Import Publications"
                                            >
                                                <ImportIcon size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleUpdate(index)}
                                                className="text-green-500 hover:text-green-600"
                                                title="Update Publications"
                                            >
                                                <RefreshCcwIcon size={18} />
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>

                            {isEditing ? (
                                <input
                                    type="text"
                                    value={id.value}
                                    onChange={(e) => handleValueChange(index, e.target.value)}
                                    className="w-full border border-blue-300 rounded px-2 py-1 text-gray-800"
                                />
                            ) : (
                                <a
                                    href={
                                        id.label === "Orcid Id" ? `https://orcid.org/${id.value}` :
                                            id.label === "Scopus Id" ? `https://www.scopus.com/authid/detail.uri?authorId=${id.value}` :
                                                id.label === "Researcher Id" ? `https://www.researcherid.com/rid/${id.value}` :
                                                    id.label === "Google Scholar Id" ? `https://scholar.google.com/citations?user=${id.value}` :
                                                        '#'
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 font-semibold block truncate hover:underline hover:text-blue-800"
                                >
                                    {id.value}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AcademicIDs;