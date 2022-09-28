import { Box, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
const AddressForm = ({
    type,
    label,
    name,
    isRequired,
    isDisabled,
    style,
    fieldName,
    control,
    
}) => {
    const {formState: {errors}}=useFormContext();
    return <>
        <Box>
            {label}
            <Box>
                <Controller
                    name={`${fieldName}.addressName` ?? 'addressName'}
                    control={control}
                    defaultValue={''}
                    render={({ field }) =>
                        <TextField
                            {...field}
                            id="filled-textarea"
                            label={label ?? "Address"}
                            placeholder={label}
                            multiline
                            variant="filled"
                            disabled={isDisabled}
                            sx={{ width: 300, margin: 2, }}
                            InputLabelProps={{ required: isRequired }}
                            inputProps={{
                                style: {
                                    maxHeight: 100,
                                },
                            }}
                            error={!!errors?.[`${fieldName}`]?.addressName}
                            helperText={errors?.[`${fieldName}`]?.addressName?.message}
                        />}
                />
            </Box>
            <Box>
                <Controller
                    name={`${fieldName}.type` ?? 'type'}
                    control={control}
                    defaultValue={type}
                    render={({field})=><input {...field} value={type} hidden/>}
                />
            </Box>
            <Box>
                <Controller
                    control={control}
                    name={`${fieldName}.pinCode` ?? 'pinCode'}
                    defaultValue={''}
                    render={({ field }) =>
                        <TextField
                            {...field}
                            label="Pin code"
                            variant="standard"
                            type='number'
                            sx={{ width: 300, margin: 2 }}
                            disabled={isDisabled}
                            InputLabelProps={{ required: isRequired }}
                            error={!!errors?.[`${fieldName}`]?.pinCode}
                            helperText={errors?.[`${fieldName}`]?.pinCode?.message}
                        />}
                />
            </Box>
        </Box>
    </>
}
export default AddressForm;