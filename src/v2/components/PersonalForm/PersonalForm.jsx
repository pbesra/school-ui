import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Controller } from "react-hook-form";
import React from 'react';
const PersonalForm = ({ id, control, fieldName }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            maxHeight: '100%',
            '::-webkit-scrollbar': { display: 'none' },
            padding: 4,
        }}>
            <Box>
                <Controller
                    name={`${fieldName}.gender` ?? 'gender'}
                    control={control}
                    defaultValue='Female'
                    render={({ field }) =>
                        <FormControl fullWidth sx={{ marginTop: 4 }}>
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
                    name={`${fieldName}.firstName` ?? 'firstName'}
                    control={control}
                    defaultValue={''}
                    render={({ field }) =>
                        <TextField
                            {...field}
                            label="First name"
                            variant="standard"
                            sx={{ width: 250, margin: 1 }}
                            required
                            InputLabelProps={{ required: true }}
                        />}
                />
            </Box>
            <Box>
                <Controller
                    name={`${fieldName}.middleName` ?? 'middleName'}
                    control={control}
                    defaultValue={''}
                    render={({ field }) =>
                        <TextField
                            {...field}
                            required
                            label="Middle name"
                            variant="standard"
                            sx={{ width: 250, margin: 1, }}

                            InputLabelProps={{ required: true }}
                        />}
                />

            </Box>
            <Box>
                <Controller
                    name={`${fieldName}.lastName` ?? 'lastName'}
                    control={control}
                    defaultValue={''}
                    render={({ field }) =>
                        <TextField
                            {...field}
                            required
                            label="Last name"
                            variant="standard"
                            sx={{ width: 250, margin: 1 }}
                            InputLabelProps={{ required: true }}
                        />}
                />

            </Box>
            <Box>
                <Controller
                    name={`${fieldName}.dateOfBirth` ?? 'dateOfBirth'}
                    control={control}
                    defaultValue={''}
                    render={({ field }) =>
                        <TextField
                            {...field}
                            required
                            type='date'
                            label="Date of birth"
                            variant="standard"
                            sx={{ marginTop: 3 }}

                            InputLabelProps={{ shrink: true, required: true }}
                        />

                    }
                />

            </Box>
            <Box>
                <Controller
                    name={`${fieldName}.email` ?? 'email'}
                    control={control}
                    defaultValue={''}
                    render={({ field }) =>
                        <TextField
                            {...field}
                            required
                            type='email'
                            label="Email"
                            variant="standard"
                            sx={{ width: 250, margin: 1 }}
                            InputLabelProps={{ required: true }}
                        />
                    }
                />

            </Box>
            <Box>
                <Controller
                    name={`${fieldName}.contact` ?? 'contact'}
                    control={control}
                    defaultValue={''}
                    render={({ field }) =>
                        <TextField
                            {...field}
                            required
                            label="Contact"
                            variant="standard"
                            sx={{ width: 250 }}
                            InputLabelProps={{ required: true }}
                        />}
                />

            </Box>

        </Box>
    );
}
export default PersonalForm;
