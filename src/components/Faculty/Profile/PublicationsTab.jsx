import React, { useState } from 'react';
import {
    FileText,
    Newspaper,
    BookOpen,
    Filter,
    Edit2,
    Trash2,
    Plus,
    X,
    Check,
    BookmarkPlus,
    Users,
    Calendar,
    FileSpreadsheet,
    Link2
} from 'lucide-react';

function PublicationsTab() {
    const [publications, setPublications] = useState([
        {
            "id": 1,
            "title": "DOA Estimation using Planar Sparse Fractal Array",
            "authors": "Goel K.; Agrawal M.; Kar S.",
            "type": "Conference Paper",
            "publication": "IEEE Workshop on Statistical Signal Processing Proceedings",
            "volume": "2023-July",
            "year": "2023",
            "pages": "468-472",
            "doi": "10.1063/5.0224450",
            "citations": 11,
        },
        {
            "id": 2,
            "title": "Computational-sampling-moiré-based on-machine alignment for freeform optics",
            "authors": "Mishra V.; Dubey N.; Singh M.P.; Kumar R.; Kar S.; Jha S.; Mayer L.D.; Kim D.; Khan G.S.",
            "type": "Article",
            "publication": "Optics Letters",
            "volume": "48",
            "year": "2023",
            "pages": "1934-1937",
            "doi": "10.1063/5.0224450",
            "citations": 22,
        }
    ]);

    const [filteredPublications, setFilteredPublications] = useState(publications);
    const [activeFilter, setActiveFilter] = useState('all');
    const [editingPublication, setEditingPublication] = useState(null);
    const [newPublication, setNewPublication] = useState(null);

    const publicationTypes = [
        { key: 'all', label: 'All', icon: <FileText /> },
        { key: 'Article', label: 'Article', icon: <Newspaper /> },
        { key: 'Conference Paper', label: 'Conference Paper', icon: <BookOpen /> },
        { key: 'Journal Article', label: 'Journal Article', icon: <FileSpreadsheet /> },
        { key: 'Book Chapter', label: 'Book Chapter', icon: <BookmarkPlus /> },
        { key: 'Review', label: 'Review', icon: <Filter /> },
        { key: 'Editorial', label: 'Editorial', icon: <Edit2 /> }
    ];

    const handleFilter = (type) => {
        setActiveFilter(type);
        if (type === 'all') {
            setFilteredPublications(publications);
        } else {
            setFilteredPublications(
                publications.filter(pub => pub.type === type)
            );
        }
    };

    const handleEdit = (publication) => {
        setEditingPublication({ ...publication });
    };

    const handleDelete = (id) => {
        const updatedPublications = publications.filter(pub => pub.id !== id);
        setPublications(updatedPublications);
        setFilteredPublications(
            activeFilter === 'all'
                ? updatedPublications
                : updatedPublications.filter(pub => pub.type === activeFilter)
        );
    };

    const handleSaveEdit = () => {
        if (editingPublication && Object.values(editingPublication).every(val => val !== "")) {
            const updatedPublications = publications.map(pub =>
                pub.id === editingPublication.id ? editingPublication : pub
            );
            setPublications(updatedPublications);
            setFilteredPublications(
                activeFilter === 'all'
                    ? updatedPublications
                    : updatedPublications.filter(pub => pub.type === activeFilter)
            );
            setEditingPublication(null);
        }
    };

    const handleAddNew = () => {
        setNewPublication({
            id: Date.now(),
            title: "",
            authors: "",
            type: "",
            publication: "",
            volume: "",
            year: "",
            pages: "",
            doi: "",
            citations: 0
        });
    };

    const handleNewPublicationChange = (field, value) => {
        setNewPublication((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSaveNew = () => {
        const requiredFields = ['title', 'authors', 'type', 'year'];
        const isValid = requiredFields.every((field) => newPublication[field]?.trim());
        if (isValid) {
            const updatedPublications = [...publications, { ...newPublication, citations: 0 }];
            setPublications(updatedPublications);
            setFilteredPublications(
                activeFilter === 'all'
                    ? updatedPublications
                    : updatedPublications.filter((pub) => pub.type === activeFilter)
            );
            setNewPublication(null);
        } else {
            alert("Please fill in all required fields.");
        }
    };

    // Rendering newPublication fields
    const renderNewPublicationFields = () => (
        <div className="flex-grow grid grid-cols-2 gap-3">
            {renderInputWithIcon(
                <FileText />,
                "text-blue-600",
                newPublication.title,
                (e) => handleNewPublicationChange("title", e.target.value),
                "Publication Title (required)"
            )}
            {renderInputWithIcon(
                <Users />,
                "text-green-600",
                newPublication.authors,
                (e) => handleNewPublicationChange("authors", e.target.value),
                "Authors (required)"
            )}
            {renderInputWithIcon(
                <Filter />,
                "text-purple-600",
                newPublication.type,
                (e) => handleNewPublicationChange("type", e.target.value),
                "Publication Type (required)"
            )}
            {renderInputWithIcon(
                <Newspaper />,
                "text-red-600",
                newPublication.publication,
                (e) => handleNewPublicationChange("publication", e.target.value),
                "Publication Name"
            )}
            {renderInputWithIcon(
                <Calendar />,
                "text-orange-600",
                newPublication.year,
                (e) => handleNewPublicationChange("year", e.target.value),
                "Year (required)"
            )}
            {renderInputWithIcon(
                <Link2 />,
                "text-blue-400",
                newPublication.doi,
                (e) => handleNewPublicationChange("doi", e.target.value),
                "DOI"
            )}
        </div>
    );

    const renderInputWithIcon = (icon, color, value, onChange, placeholder) => (
        <div className="flex items-center border rounded">
            <span className={`pl-2 ${color}`}>{React.cloneElement(icon, { size: 18 })}</span>
            <input
                className="p-1 pl-2 w-full rounded outline-none"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );

    const renderPublicationContent = (publication, isEditing) => {
        if (isEditing) {
            return (
                <div className="flex-grow grid grid-cols-2 gap-3">
                    {renderInputWithIcon(
                        <FileText />,
                        "text-blue-600",
                        publication.title,
                        (e) => setEditingPublication({ ...publication, title: e.target.value }),
                        "Publication Title"
                    )}
                    {renderInputWithIcon(
                        <Users />,
                        "text-green-600",
                        publication.authors,
                        (e) => setEditingPublication({ ...publication, authors: e.target.value }),
                        "Authors"
                    )}
                    {renderInputWithIcon(
                        <Filter />,
                        "text-purple-600",
                        publication.type,
                        (e) => setEditingPublication({ ...publication, type: e.target.value }),
                        "Publication Type"
                    )}
                    {renderInputWithIcon(
                        <Newspaper />,
                        "text-red-600",
                        publication.publication,
                        (e) => setEditingPublication({ ...publication, publication: e.target.value }),
                        "Publication Name"
                    )}
                    {renderInputWithIcon(
                        <Calendar />,
                        "text-orange-600",
                        publication.year,
                        (e) => setEditingPublication({ ...publication, year: e.target.value }),
                        "Year"
                    )}
                    {renderInputWithIcon(
                        <Link2 />,
                        "text-blue-400",
                        publication.doi,
                        (e) => setEditingPublication({ ...publication, doi: e.target.value }),
                        "DOI"
                    )}
                </div>
            );
        }

        return (
            <div className="flex-grow">
                <h3 className="text-lg font-semibold">{publication.title}</h3>
                <div className="flex items-center text-gray-600 mt-1">
                    <Users size={16} className="mr-2 text-green-600" />
                    <span>{publication.authors}</span>
                </div>
                <div className="flex items-center text-gray-700 mt-1">
                    <Filter size={16} className="mr-2 text-purple-600" />
                    <span>{publication.type}</span>
                </div>
                {publication.publication && (
                    <div className="flex items-center text-gray-600 mt-1">
                        <Newspaper size={16} className="mr-2 text-red-600" />
                        <span>{publication.publication}</span>
                    </div>
                )}
                <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Calendar size={14} className="mr-2 text-orange-600" />
                    <span>{publication.year}</span>
                </div>
                {publication.doi && (
                    <div className="flex items-center text-sm text-blue-500 mt-1">
                        <Link2 size={14} className="mr-2 text-blue-600" />
                        <a
                            href={`https://doi.org/${publication.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-blue-700"
                        >
                            {publication.doi}
                        </a>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Publications</h2>
                <button
                    onClick={handleAddNew}
                    className="text-green-600 hover:bg-green-100 p-2 rounded-full"
                >
                    <Plus />
                </button>
            </div>

            <div className="flex overflow-x-auto space-x-2 mb-4 pb-2 border-b">
                {publicationTypes.map((type) => (
                    <button
                        key={type.key}
                        onClick={() => handleFilter(type.key)}
                        className={`
                            flex items-center px-3 py-2 rounded-full text-sm 
                            ${activeFilter === type.key
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }
                        `}
                    >
                        {React.cloneElement(type.icon, {
                            size: 16,
                            className: 'mr-2'
                        })}
                        {type.label}
                    </button>
                ))}
            </div>

            <p className="text-gray-600 mb-4">
                Total Publications: {publications.length}
            </p>

            {newPublication && (
                <div className="flex items-center mb-4 pb-4 border-b bg-green-50 p-4 rounded">
                    {renderNewPublicationFields()}
                    <div className="flex ml-4">
                        <button
                            onClick={handleSaveNew}
                            className="text-green-600 hover:bg-green-100 p-2 rounded-full mr-2"
                        >
                            <Check />
                        </button>
                        <button
                            onClick={() => setNewPublication(null)}
                            className="text-red-600 hover:bg-red-100 p-2 rounded-full"
                        >
                            <X />
                        </button>
                    </div>
                </div>
            )}


            {filteredPublications.map((publication) => (
                <div
                    key={publication.id}
                    className="flex items-center mb-4 pb-4 border-b"
                >
                    {editingPublication && editingPublication.id === publication.id ? (
                        <>
                            {renderPublicationContent(editingPublication, true)}
                            <div className="flex ml-4">
                                <button
                                    onClick={handleSaveEdit}
                                    className="text-green-600 hover:bg-green-100 p-2 rounded-full mr-2"
                                >
                                    <Check />
                                </button>
                                <button
                                    onClick={() => setEditingPublication(null)}
                                    className="text-red-600 hover:bg-red-100 p-2 rounded-full"
                                >
                                    <X />
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            {renderPublicationContent(publication, false)}
                            <div className="flex ml-4">
                                <button
                                    onClick={() => handleEdit(publication)}
                                    className="text-blue-600 hover:bg-blue-100 p-2 rounded-full mr-2"
                                >
                                    <Edit2 />
                                </button>
                                <button
                                    onClick={() => handleDelete(publication.id)}
                                    className="text-red-600 hover:bg-red-100 p-2 rounded-full"
                                >
                                    <Trash2 />
                                </button>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default PublicationsTab;