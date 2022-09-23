import React, { useEffect, useState, useCallback } from "react"
import Address from "../Address/Address";
import { Grid } from "@mui/material";

const UserBasicForm=({isValid, type, label, getUserBasicDetails})=>{
    const identity=type ?? "UserBasicForm";
    const [gender, setGender]=useState('Male');
    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [email, setEmail]=useState('');
    const [contactNumber, setContactNumber]=useState('');
    const [address, setAddress]=useState();
    
    const onChangeDetails=useCallback((e)=>{
        const value = e.target.value;
        switch(e.currentTarget.id){
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
    useEffect(()=>{
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
    }, [gender, firstName, lastName, email, contactNumber, address]);
    return(
        <>
            {isValid && 
                <>
                    <div>{label}</div>
                    <select id={`${identity}_gender`} onChange={(e)=>onChangeDetails(e)} defaultValue={'Male'}>
                        <option value='Male'>
                            Male
                        </option>
                        <option value='Female'>
                            Female
                        </option>
                        
                    </select>
                    <input onChange={(e)=>onChangeDetails(e)} id={`${identity}_firstName`} placeholder="Enter first name"/>
                    <input onChange={(e)=>onChangeDetails(e)} id={`${identity}_lastName`} placeholder="Enter last name"/>
                    <input onChange={(e)=>onChangeDetails(e)} id={`${identity}_contactNumber`} placeholder="Contact number"/>
                    <input onChange={(e)=>onChangeDetails(e)} id={`${identity}_email`} placeholder="Email"/>
                    <Address type={type ?? 'user'}  getAddress={setAddress}/>
                </>
            }
            
        </>
    );
}
export default UserBasicForm;