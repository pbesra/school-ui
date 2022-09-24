import { Box, Grid } from "@mui/material";
import React, { memo } from "react";

const FlexGridItem = ({ children }) => {
    console.log('########### FlexGridItem #############');
    return (<Grid item xs={3} md={4}>
        <Box sx={{ display: 'flex', flexDirection: 'column', }}>
            {children}
        </Box>
    </Grid>);
}
export default FlexGridItem;