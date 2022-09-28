import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import StudentRegistrationForm from '../StudentRegistrationForm/StudentRegistrationForm';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { studentRegistrationFormValidationSchema } 
from '../../utils/validations/studentRegistrationFormValidation/studentRegistrationFormValidation';

// const schema = yup.object().shape({
//   'person.firstName': yup.string().required(),
//   'person.lastName': yup.number().required(),
// }).required();

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