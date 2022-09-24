import React, { useState, useEffect, useCallback, memo } from "react";
import { Box, Checkbox, Grid, IconButton, TextField } from "@mui/material";
import Address from "../Address/Address";
import FlexGridItem from "../FlexGridItem/FlexGridItem";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { v4 as uuidv4 } from 'uuid';
import DeleteIcon from '@mui/icons-material/Delete';
import RequiredAsterisk from "../RequiredAsterisk/RequiredAsterisk";
import '../../public/css/main.css';


const StudentForm = ({
    type,
    setStudentData,
}) => {
    console.log('########### StudentForm #############');
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
    const [contacts, setContacts] = useState([]);
    const [parentEmail, setParentEmail] = useState("");
    const [permanentAddress, setPermanentAddress] = useState();
    const [currentAddress, setCurrentAddress] = useState();
    const [isPermanentEqualCurrent, setIsPermanentEqualCurrent] = useState(false);
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
                case `${identity}_parentEmail`:
                    setParentEmail(value);
                    break;
                default:
                    break;
            }
        },
        []
    );
    const getProcessedContactList = () => {
        let updatedContacts = contacts.map((obj) => {
            return { label: obj.label, parentContactNumber: obj.parentContactNumber };
        });
        return [
            { parentContactNumber: parentContactNumber, label: 'main' },
            ...updatedContacts
        ];
    };

    useEffect(() => {
        setStudentData?.({
            gender,
            firstName,
            middleName,
            lastName,
            contactNumber,
            email,
            dateOfBirth,
            addressList: [permanentAddress, currentAddress],
            parents: {
                fatherName,
                motherName,
                parentEmail,
                parentContactNumberList: getProcessedContactList(),
            },
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
        contacts,
        parentEmail,
        currentAddress,
        permanentAddress,
        setStudentData,
        
    ]);

    const onClickAddContact = () => {
        let tempContacts = [];
        if (contacts?.length < 2) {
            let nextlabelName = contacts.length === 1 ? 'Contact number 2' : 'Contact number 1';
            if (contacts.length === 0) {
                nextlabelName = 'Contact number 1';
            } else {
                nextlabelName = contacts[0].label === 'Contact number 2'
                    ? 'Contact number 1' : 'Contact number 2';
            }
            const obj = { id: uuidv4(), label: nextlabelName, isEdit: false };
            tempContacts = [...contacts, obj];
            setContacts(tempContacts);
        }

    };
    const onClickRemoveContact = (id) => {
        console.log(id, contacts);
        let tempContacts = contacts.filter((x) => {
            const obj = x;
            if (obj.id !== id) {
                return obj;
            }
        });
        setContacts(tempContacts);

    };
    const onDoubleClickLabel = (id) => {
        const tempContacts = contacts.map((obj) => {
            let item = obj;
            if (obj.id === id && !obj.isEdit) {
                item.isEdit = true;
            }
            return item;
        });
        setContacts(tempContacts);
    }
    const onKeyDownLabel =(event, id) => {
        if (event.key === 'Enter') {
            const tempContacts = contacts.map((obj) => {
                let item = obj;
                if (obj.id === id && obj.isEdit) {
                    item.isEdit = false;
                    item.label = event.target.value;
                    // item.isNumber=/^\+?(0|[1-9]\d*)$/.test(event.target.value);
                }
                return item;
            });
            setContacts(tempContacts);
        }
    }
    
    const onChangeParentContact = (event, id) => {
        console.log(event.target.value, id);
        const isNumber = /^\+?(0|[1-9]\d*)$/.test(event.target.value);
        const tempContacts = contacts.map((obj) => {
            let item = obj;
            if (obj.id === id) {
                item.parentContactNumber = isNumber ? event.target.value : null;
                item.isParentContactNumber = isNumber;
            }
            return item;
        });
        setContacts(tempContacts);
    }
    const onChangeAddress = (event) => {
        setIsPermanentEqualCurrent(event.target.checked);
    };
    return (
        <>

            <Box
                sx={
                    {
                        marginLeft: 16,
                        marginRight: 16,
                        marginTop:6,
                        width: '600px',
                    }}>

                <Grid container spacing={1}>
                    <Grid item xs={3} md={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                            <label
                                style={{ textAlign: 'left', color: '#666666' }}
                                >
                                Gender
                                <RequiredAsterisk />
                            </label>
                            <select required>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            <FlexGridItem>

                            </FlexGridItem>
                        </Box>
                    </Grid>
                    <Grid item xs={3} md={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                            <label
                                style={{ textAlign: 'left', color: '#666666' }}
                                >
                                First name
                                <RequiredAsterisk />
                            </label>
                            <input
                                required
                                id={`${identity}_firstName`}
                                onChange={(e) => {
                                    onChangePersonDetails(e);
                                }}
                                placeholder="First name"
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={3} md={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                            <label
                                style={{ textAlign: 'left', color: '#666666' }}
                               >
                                Middle name
                            </label>
                            <input
                                id={`${identity}_middleName`}
                                onChange={(e) => {
                                    onChangePersonDetails(e);
                                }}
                                placeholder="Middle name"
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={3} md={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <label
                                style={{ textAlign: 'left', color: '#666666' }}
                                >
                                Last name
                                <RequiredAsterisk />
                            </label>
                            <input
                                required
                                id={`${identity}_lastName`}
                                onChange={(e) => {
                                    onChangePersonDetails(e);
                                }}
                                placeholder="Last name"
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={3} md={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <label
                                style={{ textAlign: 'left', color: '#666666' }}
                                >
                                Date of birth
                                <RequiredAsterisk />
                            </label>
                            <input
                                required
                                id={`${identity}_dateOfBirth`}
                                onChange={(e) => {
                                    onChangePersonDetails(e);
                                }}
                                type='date'
                                placeholder="Last name"
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={3} md={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <label
                                style={{ textAlign: 'left', color: '#666666' }}
                                >
                                Contact
                            </label>
                            <input
                                id={`${identity}_contactNumber`}
                                onChange={(e) => {
                                    onChangePersonDetails(e);
                                }}
                                placeholder="Contact number"
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={3} md={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <label
                                style={{ textAlign: 'left', color: '#666666' }}
                               >
                                Email
                            </label>
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
                    <Grid item xs={3} md={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <label
                                style={{ textAlign: 'left', color: '#666666' }}
                               >
                                Father's name
                                <RequiredAsterisk />
                            </label>
                            <input
                                required
                                id={`${identity}_fatherName`}
                                onChange={(e) => {
                                    onChangePersonDetails(e);
                                }}
                                placeholder="Father's name"
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={3} md={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <label
                                style={{ textAlign: 'left', color: '#666666' }}
                               >
                                Mother's name
                                <RequiredAsterisk />
                            </label>
                            <input
                                required
                                id={`${identity}_motherName`}
                                onChange={(e) => {
                                    onChangePersonDetails(e);
                                }}
                                placeholder="Mother's name"
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={3} md={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <label
                                style={{ textAlign: 'left', color: '#666666' }}
                               >
                                Parent email
                            </label>
                            <input
                                required
                                id={`${identity}_parentEmail`}
                                onChange={(e) => {
                                    onChangePersonDetails(e);
                                }}
                                placeholder="Parent email"
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Box display='flex' sx={{ justifyContent: 'flex-start', alignItems: 'center', marginTop:2, }}>
                    <Box
                        onClick={onClickAddContact}
                        disabled={contacts.length >= 2}
                        sx={{ cursor:'pointer', alignItems:'center', display:'flex', }}
                    >
                        <AddCircleIcon sx={{ color: contacts.length >= 2 ? '#C4C4C4' : '#1976d2' }} />
                        <span style={{ fontSize: 13 }}>Add contact</span>
                    </Box>
                </Box>
                <Grid container spacing={1}>
                    <Grid item xs={3} md={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{ display: 'flex',  alignItems:'center'}}>

                                <label style={{ textAlign: 'left', color: '#666666' }}
                                  >
                                    Parent contact number
                                    <RequiredAsterisk />
                                </label>

                            </Box>
                            <Box sx={{ display: 'flex',  alignItems:'center', marginTop:1,}}>
                                <input

                                    required
                                    id={`${identity}_parentContactNumber`}
                                    onChange={(e) => {
                                        onChangePersonDetails(e);
                                    }}
                                    placeholder="Parent contact number"
                                />
                            </Box>
                        </Box>
                    </Grid>
                    {
                        contacts.map((obj, index) => (
                            <Grid item xs={3} md={4} key={`i_${index}`}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <IconButton
                                            onClick={() => onClickRemoveContact(obj.id)}
                                            disableFocusRipple={true}
                                            disableRipple={true}
                                        >
                                            <DeleteIcon sx={{ width: 14, height: 15 }} />

                                        </IconButton>
                                        {
                                            obj.isEdit ? (
                                                
                                                    <TextField
                                                        placeholder={obj.label}
                                                        onKeyDown={(e) => onKeyDownLabel(e, obj.id)}
                                                        variant="standard"
                                                        sx={{ width: 140, backgroundColor: '#57CFFF', height: 25 }}
                                                        InputProps={{

                                                            disableUnderline: true,
                                                        }}
                                                        id={`labelInput_${obj.id}`}
                                                        
                                                    />
                                                

                                            ) : (

                                                <label

                                                    title={obj.label}
                                                    onDoubleClick={() => onDoubleClickLabel(obj.id)}
                                                    style={{
                                                        color: '#666666',
                                                        textAlign: 'left',
                                                        textOverflow: 'ellipsis',
                                                        overflow: 'hidden',
                                                        maxWidth: '140px',
                                                        whiteSpace: 'nowrap',


                                                    }}>
                                                    {
                                                        obj.label
                                                    }

                                                </label>


                                            )
                                        }
                                    </Box>
                                    <Box>
                                        <input
                                            id={`contactInput_${obj.id}`}
                                            onChange={(e) => {
                                                onChangeParentContact(e, obj.id);
                                            }}
                                            placeholder="Parent contact number"
                                        />
                                        <div style={{ fontSize: 9 }}><i>*Edit label by double clicking on it and hit enter</i></div>
                                    </Box>
                                </Box>
                            </Grid>

                        ))
                    }
                </Grid>

                <Box sx={{ display: 'flex', flexDirection: 'column', marginTop:3}}>
                    <Box sx={{ display: 'flex',  alignItems:'center', marginTop:1,}}>
                        <Checkbox sx={{height:10, width:10}} value={isPermanentEqualCurrent} onChange={onChangeAddress} />
                        <span style={{ color: '#666666', marginLeft:6}}>If permanent address is same as current address.</span></Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', marginTop:2}}>
                        <Address
                            getAddress={setPermanentAddress}
                            label='Address(Permanent)'
                            type='permanent'
                            isAddressDisabled={false}
                            isRequired={true}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', }}>
                        <Address
                            defaultValues={isPermanentEqualCurrent ? permanentAddress : null}
                            getAddress={setCurrentAddress}
                            label='Address(Current)'
                            type='current'
                            isAddressDisabled={isPermanentEqualCurrent}
                            isRequired={false}
                        />
                    </Box>
                </Box>

            </Box>

        </>
    );
};
export default StudentForm;
