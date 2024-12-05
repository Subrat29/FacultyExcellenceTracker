import React, { useState } from 'react';
import { Edit2, Trash2, Plus, X, Check, Calendar, Users, BookUser } from 'lucide-react';

function CommitteeMembershipTab() {
    const [committeeMemberships, setCommitteeMemberships] = useState([
        {
            "id": 1,
            "year": "2020",
            "committee": "Bureau of Indian Standards (MHD17 and LITD11)",
            "role": "Member",
        },
        {
            "id": 2,
            "year": "2020",
            "committee": "Telecom Engg Centre (DCCS1 and NGN14)",
            "role": "Member",
        }
    ]);

    const [editingMembership, setEditingMembership] = useState(null);
    const [newMembership, setNewMembership] = useState(null);

    const handleEdit = (membership) => {
        setEditingMembership({...membership});
    };

    const handleDelete = (id) => {
        setCommitteeMemberships(committeeMemberships.filter(membership => membership.id !== id));
    };

    const handleSaveEdit = () => {
        if (editingMembership && Object.values(editingMembership).every(val => val !== "")) {
            setCommitteeMemberships(committeeMemberships.map(membership => 
                membership.id === editingMembership.id ? editingMembership : membership
            ));
            setEditingMembership(null);
        }
    };

    const handleAddNew = () => {
        setNewMembership({
            id: Date.now(),
            year: "",
            committee: "",
            role: ""
        });
    };

    const handleSaveNew = () => {
        if (newMembership && 
            newMembership.year && 
            newMembership.committee && 
            newMembership.role
        ) {
            setCommitteeMemberships([...committeeMemberships, newMembership]);
            setNewMembership(null);
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

    const renderMembershipContent = (membership, isEditing) => {
        if (isEditing) {
            return (
                <div className="flex-grow grid grid-cols-2 gap-3">
                    {renderInputWithIcon(
                        <Calendar />, 
                        "text-blue-600", 
                        membership.year, 
                        (e) => setEditingMembership({...membership, year: e.target.value}), 
                        "Year"
                    )}
                    {renderInputWithIcon(
                        <Users />, 
                        "text-purple-600", 
                        membership.committee, 
                        (e) => setEditingMembership({...membership, committee: e.target.value}), 
                        "Committee"
                    )}
                    {renderInputWithIcon(
                        <BookUser />, 
                        "text-green-600", 
                        membership.role, 
                        (e) => setEditingMembership({...membership, role: e.target.value}), 
                        "Role"
                    )}
                </div>
            );
        }

        return (
            <div className="flex-grow">
                <p className="text-xl font-semibold">{membership.committee}</p>
                <div className="flex items-center text-gray-600 mt-1">
                    <BookUser size={16} className="mr-2 text-green-600" />
                    <span>{membership.role}</span>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Membership In Committees</h2>
                <button 
                    onClick={handleAddNew} 
                    className="text-green-600 hover:bg-green-100 p-2 rounded-full"
                >
                    <Plus />
                </button>
            </div>

            {newMembership && (
                <div className="flex items-center mb-4 pb-4 border-b bg-green-50 p-4 rounded">
                    <div className="flex-grow grid grid-cols-2 gap-3">
                        {renderInputWithIcon(
                            <Calendar />, 
                            "text-blue-600", 
                            newMembership.year, 
                            (e) => setNewMembership({...newMembership, year: e.target.value}), 
                            "Year"
                        )}
                        {renderInputWithIcon(
                            <Users />, 
                            "text-purple-600", 
                            newMembership.committee, 
                            (e) => setNewMembership({...newMembership, committee: e.target.value}), 
                            "Committee"
                        )}
                        {renderInputWithIcon(
                            <BookUser />, 
                            "text-green-600", 
                            newMembership.role, 
                            (e) => setNewMembership({...newMembership, role: e.target.value}), 
                            "Role"
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
                            onClick={() => setNewMembership(null)} 
                            className="text-red-600 hover:bg-red-100 p-2 rounded-full"
                        >
                            <X />
                        </button>
                    </div>
                </div>
            )}

            {committeeMemberships.map((membership) => (
                <div 
                    key={membership.id} 
                    className="flex items-center mb-4 pb-4 border-b"
                >
                    <div className="w-20 mr-4 text-right">
                        <div className="flex items-center justify-end">
                            <Calendar size={14} className="mr-1 text-blue-600" />
                            <p className="text-sm text-gray-500 font-semibold">{membership.year}</p>
                        </div>
                    </div>

                    {editingMembership && editingMembership.id === membership.id ? (
                        <>
                            {renderMembershipContent(editingMembership, true)}
                            <div className="flex ml-4">
                                <button 
                                    onClick={handleSaveEdit} 
                                    className="text-green-600 hover:bg-green-100 p-2 rounded-full mr-2"
                                >
                                    <Check />
                                </button>
                                <button 
                                    onClick={() => setEditingMembership(null)} 
                                    className="text-red-600 hover:bg-red-100 p-2 rounded-full"
                                >
                                    <X />
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            {renderMembershipContent(membership, false)}
                            <div className="flex ml-4">
                                <button 
                                    onClick={() => handleEdit(membership)} 
                                    className="text-blue-600 hover:bg-blue-100 p-2 rounded-full mr-2"
                                >
                                    <Edit2 />
                                </button>
                                <button 
                                    onClick={() => handleDelete(membership.id)} 
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

export default CommitteeMembershipTab;