import React from 'react';
import Divider  from "@mui/material/Divider";
import Box from "@mui/material/Box";

const FormContainer=({children, formLabel})=>{
    return(
        <>
            <Box sx={{ width:'100%'}}>
                <span style={{ color: '#518DFF' }}>{formLabel}</span>
                <Divider sx={{ marginTop: 1, width:'100%' }} />
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'auto',
                maxHeight: '100%',
                '::-webkit-scrollbar': { display: 'none' },
            }}>
                {children}
            </Box>
            
        </>
    );
}
export default FormContainer;