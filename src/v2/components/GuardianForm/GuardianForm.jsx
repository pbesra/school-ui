import { Box, Divider } from "@mui/material";
import { Controller } from "react-hook-form";
import PersonalForm from "../PersonalForm/PersonalForm";


const GuardianForm = ({ control, fieldName, formLabel }) => {
    
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'auto',
                    height: 400,
                    // maxHeight: '110%',
                    '::-webkit-scrollbar': { display: 'none' }
                }}
            >
                <PersonalForm formLabel={formLabel} fieldName={fieldName} control={control} />
            </Box>

        </>
    );
}
export default GuardianForm;