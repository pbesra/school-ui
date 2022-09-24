import React, { useEffect } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const StudentRegistrationForm = () => {
    const border = '0.4px solid #E1E1E1';
    useEffect(()=>{
        document.body.style.backgroundColor = '#C3F9FF'
    }, []);
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 8,
            padding: 8
        }}>
            <Box sx={{
                width: 600,
                height: 100,

                zIndex: 10,
                borderRadius: 4,
                backgroundColor: '#F8F8F8',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: border,
                margin: 1,

            }}
            >
                <FormControl sx={{ width: 100 }}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        InputLabelProps={{ required: true }}

                    >
                        <MenuItem value={'Male'}>Male</MenuItem>
                        <MenuItem value={'Female'}>Female</MenuItem>

                    </Select>
                </FormControl>
            </Box>
            <Box sx={{
                width: 600,
                height: 100,

                zIndex: 10,
                borderRadius: 6,
                backgroundColor: '#F8F8F8',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: border,
                margin: 1,

            }}
            >
                <TextField label='First Name' InputLabelProps={{ required: true }} />
            </Box>
            <Box sx={{
                width: 600,
                height: 100,

                zIndex: 10,
                borderRadius: 6,
                backgroundColor: '#F8F8F8',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: border,
                margin: 1,

            }}
            >
                <TextField label='Middle Name' />
            </Box>
            <Box sx={{
                width: 600,
                height: 100,

                zIndex: 10,
                borderRadius: 6,
                backgroundColor: '#F8F8F8',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: border,
                margin: 1,

            }}
            >
                <TextField label='Last Name' InputLabelProps={{ required: true }} />
            </Box>
            <Box sx={{
                width: 600,
                height: 100,

                zIndex: 10,
                borderRadius: 6,
                backgroundColor: '#F8F8F8',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: border,
                margin: 1,

            }}
            >
                <TextField type='date' label='Date of birth' InputLabelProps={{ shrink: true, required: true }} />
            </Box>
            <Box sx={{
                width: 600,
                height: 100,

                zIndex: 10,
                borderRadius: 6,
                backgroundColor: '#F8F8F8',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: border,
                margin: 1,

            }}
            >
                <TextField label='Contact number' InputLabelProps={{ required: true }} />
            </Box>
            <Box sx={{
                width: 600,
                height: 100,

                zIndex: 10,
                borderRadius: 6,
                backgroundColor: '#F8F8F8',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: border,
                margin: 1,

            }}
            >
                <TextField label='Email' InputLabelProps={{ required: true }} />
            </Box>
        </Box>
    );
}
export default StudentRegistrationForm;