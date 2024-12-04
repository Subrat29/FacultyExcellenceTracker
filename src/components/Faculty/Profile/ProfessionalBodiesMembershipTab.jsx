import React, { useState } from 'react';
import { Edit2, Trash2, Plus, X, Check, Calendar, Building2, UserCircle2, Award } from 'lucide-react';

function ProfessionalBodiesMembershipTab() {
    const [memberships, setMemberships] = useState([
        {
            "id": 1,
            "year": "2022",
            "organization": "Systems Society of India",
            "membership": "Life Member",
            "membershipId": "SSI_LM33409",
        },
        {
            "id": 2,
            "year": "2020",
            "organization": "Institution of Communication Engineers and Communication Technologists (ICEIT)",
            "membership": "Elected Fellow and Life Senior Member",
            "membershipId": "# SM 20 00 570L",
        }
    ]);

    const [editingMembership, setEditingMembership] = useState(null);
    const [newMembership, setNewMembership] = useState(null);

    const handleEdit = (membership) => {
        setEditingMembership({...membership});
    };

    const handleDelete = (id) => {
        setMemberships(memberships.filter(membership => membership.id !== id));
    };

    const handleSaveEdit = () => {
        if (editingMembership && Object.values(editingMembership).every(val => val !== "")) {
            setMemberships(memberships.map(membership => 
                membership.id === editingMembership.id ? editingMembership : membership
            ));
            setEditingMembership(null);
        }
    };

    const handleAddNew = () => {
        setNewMembership({
            id: Date.now(),
            year: "",
            organization: "",
            membership: "",
            membershipId: "",
        });
    };

    const handleSaveNew = () => {
        if (newMembership && 
            newMembership.year && 
            newMembership.organization && 
            newMembership.membership
        ) {
            setMemberships([...memberships, newMembership]);
            setNewMembership(null);
        } else {
            alert("Please fill in at least year, organization, and membership type");
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
                        <Building2 />, 
                        "text-red-600", 
                        membership.organization, 
                        (e) => setEditingMembership({...membership, organization: e.target.value}), 
                        "Organization"
                    )}
                    {renderInputWithIcon(
                        <Award />, 
                        "text-purple-600", 
                        membership.membership, 
                        (e) => setEditingMembership({...membership, membership: e.target.value}), 
                        "Membership Type"
                    )}
                    {renderInputWithIcon(
                        <UserCircle2 />, 
                        "text-green-600", 
                        membership.membershipId, 
                        (e) => setEditingMembership({...membership, membershipId: e.target.value}), 
                        "Membership ID"
                    )}
                </div>
            );
        }

        return (
            <div className="flex-grow">
                <h3 className="text-xl font-semibold">{membership.organization}</h3>
                <div className="flex items-center text-gray-600 mt-1">
                    <Award size={16} className="mr-2 text-purple-600" />
                    <span>{membership.membership}</span>
                </div>
                {membership.membershipId && (
                    <div className="flex items-center text-gray-700 mt-1">
                        <UserCircle2 size={16} className="mr-2 text-green-600" />
                        <span>ID: {membership.membershipId}</span>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Membership In Professional Bodies</h2>
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
                            <Building2 />, 
                            "text-red-600", 
                            newMembership.organization, 
                            (e) => setNewMembership({...newMembership, organization: e.target.value}), 
                            "Organization"
                        )}
                        {renderInputWithIcon(
                            <Award />, 
                            "text-purple-600", 
                            newMembership.membership, 
                            (e) => setNewMembership({...newMembership, membership: e.target.value}), 
                            "Membership Type"
                        )}
                        {renderInputWithIcon(
                            <UserCircle2 />, 
                            "text-green-600", 
                            newMembership.membershipId, 
                            (e) => setNewMembership({...newMembership, membershipId: e.target.value}), 
                            "Membership ID"
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

            {memberships.map((membership) => (
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

export default ProfessionalBodiesMembershipTab;