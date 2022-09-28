import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import StudentRegistrationForm from '../StudentRegistrationForm/StudentRegistrationForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { studentRegistrationFormValidationSchema } 
from '../../utils/validations/studentRegistrationFormValidation/studentRegistrationFormValidation';

const AppProvider=()=>{
    const methods= useForm({
        defaultValues: {
            hasGuardian:false, 
            parents:{
                parentMainContact:''
            }
        },
        resolver: yupResolver(studentRegistrationFormValidationSchema),
    });
    
    return(
        <FormProvider {...methods}>
            <StudentRegistrationForm/>
        </FormProvider>
    );
}
export default AppProvider;