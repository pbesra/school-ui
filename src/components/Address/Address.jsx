import React, {useState, useEffect, useCallback} from "react";

const Address=({type, getAddress, defaultValues, label})=>{
    const identity= type ?? 'Address';
    const [address, setAddress]=useState('');
    const [pinCode, setPinCode]=useState('');
    
    const onChangeAddress=useCallback((e)=>{
        const value=e.target.value;
        switch(e.currentTarget.id){
            case `${identity}_address`:
                setAddress(value);
                break;
            case `${identity}_pinCode`:
                setPinCode(value);
                break;
            default:
                break;
        }
    }, []);
    useEffect(()=>{
        setAddress(defaultValues?.address ?? '');
        setPinCode(defaultValues?.pinCode ?? '');
    }, [defaultValues?.address, defaultValues?.pinCode]);
    useEffect(()=>{
        getAddress?.({
            address,
            pinCode,
        });
    }, [address, pinCode]);
    return(
        <>
            <div>{label ?? ''}</div>
            <textarea 
                value={address}
                disabled={defaultValues?true:false}
                onChange={(e)=>{onChangeAddress(e)}} 
                id={`${identity}_address`} 
                placeholder="Enter address">
            </textarea>
            <input 
                value={pinCode}
                disabled={defaultValues?true:false}
                onChange={(e)=>{onChangeAddress(e)}} 
                id={`${identity}_pinCode`} 
                type='number' 
                placeholder="Enter pin code"
            />
        </>
    );
}
export default Address;