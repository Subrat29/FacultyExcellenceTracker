import React, { useState } from 'react';
import { Edit2, Trash2, Plus, X, Check, DollarSign, Clock, Users, Building2, CheckCircle2 } from 'lucide-react';

function ResearchProjectsTab() {
    const [researchProjects, setResearchProjects] = useState([
        {
            "id": 1,
            "title": "Rapid Diagnostic Solutions to Conduct Antimicrobial Resistance (under IITD Grand Challenge Project)",
            "fundingAgency": "IRD Grand Challenge",
            "status": "Ongoing",
            "team": "Co-PI: Prof. Subrat Kar (EE), along with Shalini Gupta (ChemEngg), R.K. Elangovan (DBEB), Neetu Singh (CBME), S.K. Khare (Chemistry), Shilpi Sharma (DBEB), Deepti Gupta (Textile Tech), and Vivek Perumal (KSBS) as PI",
            "budget": "INR 510,00,000",
            "duration": "2018 - 2023",
        },
        {
            "id": 2,
            "title": "Development of an Engine Control Unit for Combustion Engines",
            "fundingAgency": "IRD DLS1234",
            "status": "Ongoing",
            "team": "Prof. M.R. Ravi, Co-PI: Prof. Subrat Kar",
            "budget": "INR 3,85,000",
            "duration": "2016 - 2020",
        }
    ]);

    const [editingProject, setEditingProject] = useState(null);
    const [newProject, setNewProject] = useState(null);

    const handleEdit = (project) => {
        setEditingProject({...project});
    };

    const handleDelete = (id) => {
        setResearchProjects(researchProjects.filter(project => project.id !== id));
    };

    const handleSaveEdit = () => {
        if (editingProject && Object.values(editingProject).every(val => val !== "")) {
            setResearchProjects(researchProjects.map(project => 
                project.id === editingProject.id ? editingProject : project
            ));
            setEditingProject(null);
        }
    };

    const handleAddNew = () => {
        setNewProject({
            id: Date.now(),
            title: "",
            fundingAgency: "",
            status: "",
            team: "",
            budget: "",
            duration: ""
        });
    };

    const handleSaveNew = () => {
        if (newProject && 
            newProject.title && 
            newProject.fundingAgency && 
            newProject.status && 
            newProject.team && 
            newProject.budget && 
            newProject.duration
        ) {
            setResearchProjects([...researchProjects, newProject]);
            setNewProject(null);
        } else {
            alert("Please fill in all fields");
        }
    };

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

    const renderProjectContent = (project, isEditing) => {
        if (isEditing) {
            return (
                <div className="flex-grow grid grid-cols-2 gap-3">
                    <div className="col-span-2">
                        <input 
                            className="w-full border p-1 rounded"
                            value={project.title}
                            onChange={(e) => setEditingProject({...project, title: e.target.value})}
                            placeholder="Project Title"
                        />
                    </div>
                    {renderInputWithIcon(
                        <Building2 />, 
                        "text-red-600", 
                        project.fundingAgency, 
                        (e) => setEditingProject({...project, fundingAgency: e.target.value}), 
                        "Funding Agency"
                    )}
                    {renderInputWithIcon(
                        <CheckCircle2 />, 
                        "text-green-600", 
                        project.status, 
                        (e) => setEditingProject({...project, status: e.target.value}), 
                        "Status"
                    )}
                    {renderInputWithIcon(
                        <Users />, 
                        "text-blue-600", 
                        project.team, 
                        (e) => setEditingProject({...project, team: e.target.value}), 
                        "Team"
                    )}
                    {renderInputWithIcon(
                        <DollarSign />, 
                        "text-purple-600", 
                        project.budget, 
                        (e) => setEditingProject({...project, budget: e.target.value}), 
                        "Budget"
                    )}
                    {renderInputWithIcon(
                        <Clock />, 
                        "text-orange-600", 
                        project.duration, 
                        (e) => setEditingProject({...project, duration: e.target.value}), 
                        "Duration"
                    )}
                </div>
            );
        }

        return (
            <div className="flex-grow">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <div className="flex items-center text-gray-600 mt-1">
                    <Building2 size={16} className="mr-2 text-red-600" />
                    <span>{project.fundingAgency}</span>
                </div>
                <div className="flex items-center text-gray-700 mt-1">
                    <Users size={16} className="mr-2 text-blue-600" />
                    <span>{project.team}</span>
                </div>
                <div className="flex items-center text-gray-600 mt-1">
                    <DollarSign size={16} className="mr-2 text-purple-600" />
                    <span>{project.budget}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Clock size={14} className="mr-2 text-orange-600" />
                    <span>{project.duration}</span>
                </div>
                <div className="flex items-center text-gray-600 mt-1">
                    <CheckCircle2 size={16} className="mr-2 text-green-600" />
                    <span>{project.status}</span>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Research Projects</h2>
                <button 
                    onClick={handleAddNew} 
                    className="text-green-600 hover:bg-green-100 p-2 rounded-full"
                >
                    <Plus />
                </button>
            </div>

            {newProject && (
                <div className="flex items-center mb-4 pb-4 border-b bg-green-50 p-4 rounded">
                    <div className="flex-grow grid grid-cols-2 gap-3">
                        <div className="col-span-2">
                            <input 
                                className="w-full border p-1 rounded"
                                value={newProject.title}
                                onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                                placeholder="Project Title"
                            />
                        </div>
                        {renderInputWithIcon(
                            <Building2 />, 
                            "text-red-600", 
                            newProject.fundingAgency, 
                            (e) => setNewProject({...newProject, fundingAgency: e.target.value}), 
                            "Funding Agency"
                        )}
                        {renderInputWithIcon(
                            <CheckCircle2 />, 
                            "text-green-600", 
                            newProject.status, 
                            (e) => setNewProject({...newProject, status: e.target.value}), 
                            "Status"
                        )}
                        {renderInputWithIcon(
                            <Users />, 
                            "text-blue-600", 
                            newProject.team, 
                            (e) => setNewProject({...newProject, team: e.target.value}), 
                            "Team"
                        )}
                        {renderInputWithIcon(
                            <DollarSign />, 
                            "text-purple-600", 
                            newProject.budget, 
                            (e) => setNewProject({...newProject, budget: e.target.value}), 
                            "Budget"
                        )}
                        {renderInputWithIcon(
                            <Clock />, 
                            "text-orange-600", 
                            newProject.duration, 
                            (e) => setNewProject({...newProject, duration: e.target.value}), 
                            "Duration"
                        )}
                    </div>
                    <div className="flex ml-4">
                        <button 
                            onClick={handleSaveNew} 
                            className="text-green-600 hover:bg-green-100 p-2 rounded-full mr-2"
                        >
                            <Check />
                        </button>
                        <button 
                            onClick={() => setNewProject(null)} 
                            className="text-red-600 hover:bg-red-100 p-2 rounded-full"
                        >
                            <X />
                        </button>
                    </div>
                </div>
            )}

            {researchProjects.map((project) => (
                <div 
                    key={project.id} 
                    className="flex items-center mb-4 pb-4 border-b"
                >
                    <div className="w-20 mr-4 text-right">
                        <div className="flex items-center justify-end">
                            <Clock size={14} className="mr-1 text-orange-600" />
                            <p className="text-sm text-gray-500 font-semibold">{project.duration.split('-')[1]}</p>
                        </div>
                        <div className="flex items-center justify-end">
                            <CheckCircle2 size={14} className="mr-1 text-green-600" />
                            <p className="text-xs text-gray-400">{project.status}</p>
                        </div>
                    </div>

                    {editingProject && editingProject.id === project.id ? (
                        <>
                            {renderProjectContent(editingProject, true)}
                            <div className="flex ml-4">
                                <button 
                                    onClick={handleSaveEdit} 
                                    className="text-green-600 hover:bg-green-100 p-2 rounded-full mr-2"
                                >
                                    <Check />
                                </button>
                                <button 
                                    onClick={() => setEditingProject(null)} 
                                    className="text-red-600 hover:bg-red-100 p-2 rounded-full"
                                >
                                    <X />
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            {renderProjectContent(project, false)}
                            <div className="flex ml-4">
                                <button 
                                    onClick={() => handleEdit(project)} 
                                    className="text-blue-600 hover:bg-blue-100 p-2 rounded-full mr-2"
                                >
                                    <Edit2 />
                                </button>
                                <button 
                                    onClick={() => handleDelete(project.id)} 
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

export default ResearchProjectsTab;