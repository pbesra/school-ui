import { Box, Grid } from "@mui/material";
import React, { useState, useEffect, useCallback, memo } from "react";
import RequiredAsterisk from "../RequiredAsterisk/RequiredAsterisk";

const Address = ({
    type,
    getAddress,
    defaultValues,
    label,
    isAddressDisabled,
    isRequired
}) => {
    console.log('########### Address #############');
    const identity = type ?? 'Address';
    const [addressName, setAddressName] = useState('');
    const [pinCode, setPinCode] = useState('');

    const onChangeAddress = useCallback((e) => {
        const value = e.target.value;
        switch (e.currentTarget.id) {
            case `${identity}_addressName`:
                setAddressName(value);
                break;
            case `${identity}_pinCode`:
                setPinCode(value);
                break;
            default:
                break;
        }
    }, []);
    useEffect(() => {
        setAddressName(defaultValues?.addressName ?? '');
        setPinCode(defaultValues?.pinCode ?? '');
    }, [defaultValues?.addressName, defaultValues?.pinCode]);
    useEffect(() => {
        getAddress?.({
            addressName: addressName,
            type,
            pinCode,
        });
    }, [
        addressName,
        pinCode,
        getAddress,
        type,
    ]);
    return (
        <>

            <Grid item xs={3} md={4}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <label
                        style={{ textAlign: 'left', color: '#666666' }}
                    >
                        {label ?? 'Address'}
                        {
                            isRequired ? <RequiredAsterisk /> : null
                        }
                    </label>
                    <textarea
                        required={isRequired}
                        style={{ resize: 'vertical', margin: 3, maxHeight: 255 }}
                        value={addressName}
                        disabled={isAddressDisabled}
                        onChange={(e) => { onChangeAddress(e) }}
                        id={`${identity}_addressName`}
                        placeholder="Enter address">
                    </textarea>
                </Box>
            </Grid>
            <Grid item xs={3} md={4}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <label
                        style={{ textAlign: 'left', color: '#666666' }}
                    >
                        Pin code
                        {
                            isRequired ? <RequiredAsterisk /> : null
                        }
                    </label>
                    <input
                        required={isRequired}
                        style={{ margin: 3 }}
                        value={pinCode}
                        disabled={isAddressDisabled}
                        onChange={(e) => { onChangeAddress(e) }}
                        id={`${identity}_pinCode`}
                        type='number'
                        placeholder="Enter pin code"
                    />
                </Box>
            </Grid>

        </>
    );
}
export default Address;