import React from 'react';
import PersonalForm from "../PersonalForm/PersonalForm";

const GuardianForm = ({ control, fieldName, formLabel }) => {
    
    return (
        <PersonalForm formLabel={formLabel} fieldName={fieldName} control={control} />
    );
}
export default GuardianForm;