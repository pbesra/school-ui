import moment from "moment/moment";
import * as yup from "yup";
export const studentRegistrationFormValidationSchema = yup.object().shape({
    // Person validation
    personFirstName: yup.string().required('First name is required.')
        .min(3, 'Must be at least 3 characters'),
    personLastName: yup.string().required('Last name is required.')
        .min(3, 'Must be at least 3 characters'),
    personDateOfBirth: yup.string()
        .required('Date of birth is required')
        .test(
            "",
            "At least 2 years old.",
            (value) => {
                const currentDate = moment(new Date());
                const enteredDate = moment(value);
                const years=currentDate.diff(enteredDate, 'years');
                return years>=2;

            }
        ),

    parents: yup.object().shape({
        fatherName: yup.string().required('Father name is required.')
            .min(3, 'Must be at least 3 characters'),
        motherName: yup.string().required('Mother name is required.')
            .min(3, 'Must be at least 3 characters'),
        parentMainContact: yup.string().required('Primary contact number is required.')
            .min(10, 'Must be at least 10 digits.'),
        contacts0: yup.string().min(10, '10 Digits needed.'),
        contacts1: yup.string().min(10, '10 Digits needed.'),
    }),

    // Guardian validation
    guardianFirstName: yup.string()
        .when('hasGuardian', {
            is: true,
            then: yup.string().required('First name is required.')
                .min(3, 'Must be at least 3 characters'),
        }),
    guardianLastName: yup.string()
        .when('hasGuardian', {
            is: true,
            then: yup.string().required('Last name is required.')
                .min(3, 'Must be at least 3 characters'),
        }),
    guardianContact: yup.string()
        .when('hasGuardian', {
            is: true,
            then: yup.string().required('Contact is required.')
                .min(10, 'Must be at least 10 digits'),
        }),
        
    guardianDateOfBirth: yup.string()
        .when('hasGuardian', {
            is: true,
            then: yup.string().required('Contact is required.')
                .min(10, 'Date of birth is required.'),
        })
        .test(
            "",
            "At least 21 years old.",
            (value) => {
                if(value?.length===0){
                    return true;
                }
                const currentDate = moment(new Date());
                const enteredDate = moment(value);
                const years=currentDate.diff(enteredDate, 'years');
                return years>=21;
            }
        ),
        
    permanentAddress: yup.object().shape({
        addressName: yup.string().required('Permanent address is required.'),
        pinCode: yup.string().required('Pin code for permanent address is required.')
    }),

});