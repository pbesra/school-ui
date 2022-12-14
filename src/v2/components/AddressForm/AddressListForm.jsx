import { Box, Checkbox, Divider } from "@mui/material";
import React, { Fragment } from "react";
import { Controller } from "react-hook-form";
import AddressForm from "./AddressForm";

const AddressListForm = ({
    addressList,
    onChangeAddressType,
    addressTypeValue,
    control,
    formLabel,
}) => {

    const onChangeAddress = (event) => {
        onChangeAddressType?.(event.target.checked);
    }
    return (
        <>
             <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Controller
                        name="isPermanentAddressEqualCurrent"
                        control={control}
                        render={({ field }) => <Checkbox {...field} checked={addressTypeValue} onChange={onChangeAddress} />}
                    />
                    <span className="box" style={{ fontSize: 12 }}>
                        If permanent address same as current address
                    </span>
                </Box>
                {
                    addressList?.map((obj, index) => (
                        <Box key={`f${index}`} style={{ margin: 8 }}>
                            <AddressForm
                                control={control}
                                fieldName={`${obj.type}Address`}
                                {...obj}
                            />
                        </Box>
                    ))
                }
        </>
    );
}
export default AddressListForm;