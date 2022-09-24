import React, { useEffect, useState, useCallback, memo } from "react"
import Address from "../Address/Address";
import { Box, Grid } from "@mui/material";
import FlexGridItem from "../FlexGridItem/FlexGridItem";
import RequiredAsterisk from "../RequiredAsterisk/RequiredAsterisk";

const UserBasicForm = ({
    isValid, 
    type, 
    label, 
    getUserBasicDetails, 
    addressType, 
    addressLabel,
    isAddressRequired 
}) => {
    console.log('########### UserBasicForm #############');
    const identity = type ?? "UserBasicForm";
    const [gender, setGender] = useState('Male');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [address, setAddress] = useState();

    const onChangeDetails = useCallback((e) => {
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
            case `${identity}_contactNumber`:
                setContactNumber(value);
                break;
            case `${identity}_email`:
                setEmail(value);
                break;
            default:
                break;
        }
    }, [identity]);
    useEffect(() => {
        getUserBasicDetails(
            {
                gender,
                firstName,
                lastName,
                email,
                contactNumber,
                address,
            }
        );
    }, [
        gender, 
        firstName,
        lastName, 
        email, 
        contactNumber, 
        address
    ]);
    return (
        <>
            {isValid &&
                <>
                    <Box sx={{ display: 'flex', flexDirection: 'row', width: 600, marginLeft: 16, marginRight: 16 }}>
                        <Grid container spacing={0.5}>
                            <FlexGridItem>
                                <label 
                                    style={{ textAlign: 'left', color: '#666666' }}>
                                        Gender
                                        <RequiredAsterisk/>
                                </label>
                                <select id={`${identity}_gender`} onChange={(e) => onChangeDetails(e)} defaultValue={'Male'}>
                                    <option value='Male'>
                                        Male
                                    </option>
                                    <option value='Female'>
                                        Female
                                    </option>

                                </select>
                            </FlexGridItem>
                            <FlexGridItem>
                                <label 
                                    style={{ textAlign: 'left', color: '#666666' }}>
                                        First name
                                        <RequiredAsterisk/>
                                </label>
                                <input 
                                    style={{ margin: 2 }} 
                                    onChange={(e) => onChangeDetails(e)} 
                                    id={`${identity}_firstName`} 
                                    placeholder="Enter first name"
                                 />

                            </FlexGridItem>
                            <FlexGridItem>
                                <label style={{ textAlign: 'left', color: '#666666' }}>
                                    Last name
                                    <RequiredAsterisk/>
                                </label>
                                <input 
                                    style={{ margin: 2 }} 
                                    onChange={(e) => onChangeDetails(e)} 
                                    id={`${identity}_lastName`} 
                                    placeholder="Enter last name"
                                />
                            </FlexGridItem>
                            <FlexGridItem>
                                <label style={{ textAlign: 'left', color: '#666666' }}>
                                    Contact
                                    <RequiredAsterisk/>
                                </label>
                                <input 
                                    style={{ margin: 2 }} 
                                    onChange={(e) => onChangeDetails(e)} 
                                    id={`${identity}_contactNumber`} 
                                    placeholder="Contact number" 
                                />

                            </FlexGridItem>
                            <FlexGridItem>
                                <label style={{ textAlign: 'left', color: '#666666' }}>Email</label>
                                <input 
                                    style={{ margin: 2 }} 
                                    onChange={(e) => onChangeDetails(e)} 
                                    id={`${identity}_email`} 
                                    placeholder="Email" 
                                />

                            </FlexGridItem>
                        </Grid>
                        
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', width: 600, marginLeft: 16, marginRight: 16 }}>
                        <Grid container spacing={0.5}>
                            <Address 
                                isRequired={isAddressRequired} 
                                label={addressLabel}  
                                type={addressType ?? 'user'} 
                                getAddress={setAddress} 
                            />
                        </Grid>
                    </Box>
                </>
            }

        </>
    );
}
export default UserBasicForm;