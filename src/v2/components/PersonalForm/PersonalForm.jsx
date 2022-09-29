import React from 'react';
import  TextField from '@mui/material/TextField';
import  Select from '@mui/material/Select';
import  MenuItem from '@mui/material/MenuItem';
import  InputLabel from '@mui/material/InputLabel';
import  FormControl from '@mui/material/FormControl';
import Box  from '@mui/material/Box';


import { Controller, useFormContext } from "react-hook-form";

const PersonalForm = ({ id, control, fieldName, formLabel }) => {
    const { formState: { errors } } = useFormContext();
    return (
        <>
            <Box>
                <Controller
                    name={`${fieldName}Gender`}
                    control={control}
                    defaultValue='Female'
                    render={({ field }) =>
                        <FormControl sx={{ marginTop: 4, width: 250 }}>
                            <InputLabel id="select-label">Gender</InputLabel>
                            <Select
                                labelId="select-label"
                                id="simple-select"
                                label="Gender"
                                variant="standard"
                                sx={{ margin: 1, }}
                                {...field}
                            >
                                <MenuItem value={'Female'}>Female</MenuItem>
                                <MenuItem value={'Male'}>Male</MenuItem>

                            </Select>
                        </FormControl>}
                />

            </Box>
            <Box>
                <Controller
                    name={`${fieldName}FirstName`}
                    control={control}
                    defaultValue={''}
                    render={({ field }) =>
                        <TextField
                            {...field}
                            label="First name"
                            variant="standard"
                            sx={{ width: 250, margin: 1 }}
                            InputLabelProps={{ required: true }}
                            error={!!errors?.[`${fieldName}FirstName`]}
                            helperText={errors?.[`${fieldName}FirstName`]?.message}

                        />}
                />
            </Box>
            <Box>
                <Controller
                    name={`${fieldName}MiddleName`}
                    control={control}
                    defaultValue={''}
                    render={({ field }) =>
                        <TextField
                            {...field}
                            label="Middle name"
                            variant="standard"
                            sx={{ width: 250, margin: 1, }}
                        />}
                />

            </Box>
            <Box>
                <Controller
                    name={`${fieldName}LastName`}
                    control={control}
                    defaultValue={''}
                    render={({ field }) =>
                        <TextField
                            {...field}
                            label="Last name"
                            variant="standard"
                            sx={{ width: 250, margin: 1 }}
                            InputLabelProps={{ required: true }}
                            error={!!errors?.[`${fieldName}LastName`]}
                            helperText={errors?.[`${fieldName}LastName`]?.message}
                        />}
                />

            </Box>
            <Box>
                <Controller
                    name={`${fieldName}DateOfBirth`}
                    control={control}
                    defaultValue={''}
                    render={({ field }) =>
                        <TextField
                            {...field}
                            type='date'
                            label="Date of birth"
                            variant="standard"
                            sx={{ marginTop: 3, width: 250 }}
                            InputLabelProps={{ shrink: true, required: fieldName==='person'?true:false }}
                            error={!!errors?.[`${fieldName}DateOfBirth`]}
                            helperText={errors?.[`${fieldName}DateOfBirth`]?.message}
                        />

                    }
                />

            </Box>
            <Box>
                <Controller
                    name={`${fieldName}Email`}
                    control={control}
                    defaultValue={''}
                    render={({ field }) =>
                        <TextField
                            {...field}
                            type='email'
                            label="Email"
                            variant="standard"
                            sx={{ width: 250, margin: 1 }}
                            InputLabelProps={{ required: fieldName === 'person' ? false : true }}
                            error={!!errors?.[`${fieldName}Email`]}
                            helperText={errors?.[`${fieldName}Email`]?.message}
                        />
                    }
                />

            </Box>
            <Box>
                <Controller
                    name={`${fieldName}Contact`}
                    control={control}
                    defaultValue={''}
                    render={({ field }) =>
                        <TextField
                            {...field}
                            type='number'
                            label="Contact"
                            variant="standard"
                            sx={{ width: 250 }}
                            // need better approach: either create a new component or 
                            // make it customizable
                            InputLabelProps={{ required: fieldName === 'person' ? false : true }}
                            error={!!errors?.[`${fieldName}Contact`]}
                            helperText={errors?.[`${fieldName}Contact`]?.message}
                        />}
                />

            </Box>
        </>
    );
}
export default PersonalForm;
