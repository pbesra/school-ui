import React, { useState, useEffect, useCallback } from "react";
import { Box, Grid } from "@mui/material";

const Input = ({ children }) => {
    return <input {...children} />
}
const StudentForm = ({ type, getPersonalDetails }) => {
    const identity = type ?? "StudentForm";
    const [gender, setGender] = useState("Male");
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
                    setGender(value);
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
            gender,
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
        gender,
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

            <Grid container>
                <Grid item xs={4}>
                    <label for={`${identity}_gender`}>Name initial:</label>
                    <select
                        style={{ margin: 4 }}
                        id={`${identity}_gender`}
                        defaultValue={"Male"}
                        onChange={(e) => {
                            onChangePersonDetails(e);
                        }}
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>

                    </select>
                </Grid>
                <Grid item xs={4}>
                <label for={`${identity}_firstName`}>First name:</label>
                <input
                    style={{ margin: 4 }}
                    id={`${identity}_firstName`}
                    onChange={(e) => {
                        onChangePersonDetails(e);
                    }}
                    placeholder="First name"
                />
                </Grid>
                <Grid item xs={4}>
                <label for={`${identity}_middleName`}>Middle name:</label>
                <input
                    style={{ margin: 4 }}
                    id={`${identity}_middleName`}
                    onChange={(e) => {
                        onChangePersonDetails(e);
                    }}
                    placeholder="Middle name"
                />
                </Grid>
                <Grid item xs={4}>
                <label for={`${identity}_lastName`}>Last name:</label>
                <input
                    style={{ margin: 4 }}
                    id={`${identity}_lastName`}
                    onChange={(e) => {
                        onChangePersonDetails(e);
                    }}
                    placeholder="Last name"
                />
                </Grid>
                <Grid item xs={4}>
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
                </Grid>
                <Grid item xs={4}>
                    <label for={`${identity}_contactNumber`}>Last name:</label>
                    <input
                        style={{ margin: 4 }}
                        id={`${identity}_contactNumber`}
                        onChange={(e) => {
                            onChangePersonDetails(e);
                        }}
                        placeholder="Contact number"
                    />
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{display:'flex', flexDirection:'column', width:200, border:'1px solid red'}}>
                        <label style={{textAlign:'left'}} for={`${identity}_email`}>Last name:</label>
                            <input
                                
                                id={`${identity}_email`}
                                type="email"
                                onChange={(e) => {
                                    onChangePersonDetails(e);
                                }}
                                placeholder="Email"
                            />
                    </Box>
                        
                </Grid>
                <Grid item xs={4}>
                <Box sx={{display:'flex', flexDirection:'column', width:200, border:'1px solid red'}}>
                <label style={{textAlign:'left'}} for={`${identity}_fatherName`}>Father's name:</label>
                    <input
                        
                        id={`${identity}_fatherName`}
                        onChange={(e) => {
                            onChangePersonDetails(e);
                        }}
                        placeholder="Father's name"
                    />
                </Box>
                    
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{display:'flex', flexDirection:'column', width:200, border:'1px solid red'}}>
                        <label style={{textAlign:'left'}} for={`${identity}_motherName`}>Mother's name:</label>
                        <input
                            
                            id={`${identity}_motherName`}
                            onChange={(e) => {
                                onChangePersonDetails(e);
                            }}
                            placeholder="Mother's name"
                        />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{display:'flex', flexDirection:'column', width:200, border:'1px solid red'}}>
                        <label style={{textAlign:'left'}} for={`${identity}_parentContactNumber`}>Parent contact number:</label>
                        <input
                            id={`${identity}_parentContactNumber`}
                            onChange={(e) => {
                                onChangePersonDetails(e);
                            }}
                            placeholder="Parent contact number"
                        />
                    </Box>
                    
                </Grid>
            </Grid>
            
        </>
    );
};
export default StudentForm;
