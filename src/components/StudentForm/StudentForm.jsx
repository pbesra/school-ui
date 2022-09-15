import React, { useState, useEffect, useCallback } from "react";
const Input = ({ children }) => {
    return <input {...children} />
}
const StudentForm = ({ type, getPersonalDetails }) => {
    const identity = type ?? "first";
    const [nameInitial, setNameInitial] = useState("");
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [motherName, setMotherName] = useState("");
    const [parentContactNumber, setParentContactNumber] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState('');
    const onChangePersonDetails = useCallback(
        (e) => {
            const value = e.target.value;
            switch (e.currentTarget.id) {
                case `${identity}_nameInitial`:
                    setNameInitial(value);
                    break;
                case `${identity}_firstName`:
                    setFirstName(value);
                    break;

                case `${identity}_lastName`:
                    setLastName(value);
                    break;
                case `${identity}_middleName`:
                    setMiddleName(value);
                    break;

                case `${identity}_contactNumber`:
                    setContactNumber(value);
                    break;
                case `${identity}_email`:
                    setEmail(value);
                    break;
                case `${identity}_fatherName`:
                    setFatherName(value);
                    break;
                case `${identity}_motherName`:
                    setMotherName(value);
                    break;
                case `${identity}_parentContactNumber`:
                    setParentContactNumber(value);
                    break;
                case `${identity}_dateOfBirth`:
                    setDateOfBirth(value);
                    break;
                default:
                    break;
            }
        },
        [type]
    );


    useEffect(() => {
        getPersonalDetails?.({
            nameInitial,
            firstName,
            middleName,
            lastName,
            contactNumber,
            email,
            fatherName,
            motherName,
            parentContactNumber,
            dateOfBirth,
        });
    }, [
        nameInitial,
        firstName,
        middleName,
        lastName,
        contactNumber,
        email,
        fatherName,
        motherName,
        parentContactNumber,
        dateOfBirth,
    ]);
    return (
        <>
            
            <div style={{display:'flex', flexDirection:'row'}}>
                <label for={`${identity}_nameInitial`}>Name initial:</label>
                <select
                    style={{ margin: 4 }}
                    id={`${identity}_nameInitial`}
                    onChange={(e) => {
                        onChangePersonDetails(e);
                    }}
                >
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="">None</option>
                </select>
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
                <label for={`${identity}_firstName`}>First name:</label>
                <input
                    style={{ margin: 4 }}
                    id={`${identity}_firstName`}
                    onChange={(e) => {
                        onChangePersonDetails(e);
                    }}
                    placeholder="First name"
                />
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
                <label for={`${identity}_middleName`}>Middle name:</label>
                <input
                    style={{ margin: 4 }}
                    id={`${identity}_middleName`}
                    onChange={(e) => {
                        onChangePersonDetails(e);
                    }}
                    placeholder="Middle name"
                />
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
                <label for={`${identity}_lastName`}>Last name:</label>
                <input
                    style={{ margin: 4 }}
                    id={`${identity}_lastName`}
                    onChange={(e) => {
                        onChangePersonDetails(e);
                    }}
                    placeholder="Last name"
                />
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
                <label for={`${identity}_dateOfBirth`}>Last name:</label>
                <input
                    style={{ margin: 4 }}
                    id={`${identity}_dateOfBirth`}
                    onChange={(e) => {
                        onChangePersonDetails(e);
                    }}
                    type='date'
                    placeholder="Last name"
                />
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
                <label for={`${identity}_contactNumber`}>Last name:</label>
                <input
                    style={{ margin: 4 }}
                    id={`${identity}_contactNumber`}
                    onChange={(e) => {
                        onChangePersonDetails(e);
                    }}
                    placeholder="Contact number"
                />
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
                <label for={`${identity}_email`}>Last name:</label>
                <input
                    style={{ margin: 4 }}
                    id={`${identity}_email`}
                    type="email"
                    onChange={(e) => {
                        onChangePersonDetails(e);
                    }}
                    placeholder="Email"
                />
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
                <label for={`${identity}_fatherName`}>Father's name:</label>
                <input
                    style={{ margin: 4 }}
                    id={`${identity}_fatherName`}
                    onChange={(e) => {
                        onChangePersonDetails(e);
                    }}
                    placeholder="Father's name"
                />
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
                <label for={`${identity}_motherName`}>Mother's name:</label>
                <input
                    style={{ margin: 4, marginLeft: 20 }}
                    id={`${identity}_motherName`}
                    onChange={(e) => {
                        onChangePersonDetails(e);
                    }}
                    placeholder="Mother's name"
                />
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
                <label for={`${identity}_parentContactNumber`}>Parent contact number:</label>
                <input
                    style={{ margin: 4, marginLeft: 20 }}
                    id={`${identity}_parentContactNumber`}
                    onChange={(e) => {
                        onChangePersonDetails(e);
                    }}
                    placeholder="Parent contact number"
                />
            </div>
        </>
    );
};
export default StudentForm;
