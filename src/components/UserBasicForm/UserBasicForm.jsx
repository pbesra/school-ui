import React, { useEffect, useState, useCallback } from "react"
import Address from "../Address/Address";
const UserBasicForm=({isValid, type, label, getUserBasicDetails})=>{
    const identity=type ?? "first";
    const [nameInitial, setNameInitial]=useState('');
    const [userName, setUserName]=useState('');
    const [email, setEmail]=useState('');
    const [contactNumber, setContactNumber]=useState('');
    const [address, setAddress]=useState();
    
    const onChangeDetails=useCallback((e)=>{
        const value = e.target.value;
        switch(e.currentTarget.id){
            case `${identity}_nameInitial`:
                setNameInitial(value);
                break;
            case `${identity}_userName`:
                setUserName(value);
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
            nameInitial,
            userName,
            email,
            contactNumber,
            address,
           }
        );
    }, [nameInitial, userName, email, contactNumber, address]);
    return(
        <>
            {isValid && 
                <>
                    <div>{label}</div>
                    <select id={`${identity}_nameInitial`} onChange={(e)=>onChangeDetails(e)} defaultValue={'Mr'}>
                        <option value='Mrs'>
                            Mrs
                        </option>
                        <option value='Mr'>
                            Mr
                        </option>
                        <option value=''>
                            None
                        </option>
                    </select>
                    <input onChange={(e)=>onChangeDetails(e)} id={`${identity}_userName`} placeholder="Enter name"/>
                    <input onChange={(e)=>onChangeDetails(e)} id={`${identity}_contactNumber`} placeholder="Contact number"/>
                    <input onChange={(e)=>onChangeDetails(e)} id={`${identity}_email`} placeholder="Email"/>
                    <Address type={type ?? 'user'} label={label ?? 'Basic form'} getAddress={setAddress}/>
                </>
            }
            
        </>
    );
}
export default UserBasicForm;