import React from "react";
import { Box } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ParentsForm from "../ParentsForm/ParentsForm";
import PersonalForm from "../PersonalForm/PersonalForm";
import GuardianForm from "../GuardianForm/GuardianForm";
import AddressListForm from "../AddressForm/AddressListForm";
import FormContainer from "../FormContainer/FormContainer";
import { useMemo } from "react";

const MainContent = ({
    currentForm,
    onClickArrow,
    showLeftArrow,
    showRightArrow, 
    getGuardian,
    hasGuardian,
    addressTypeValue,
    onChangeAddressType,
    control,
    contacts, 
    setContacts,
}) => {
    const addressList=useMemo(()=>[
        {type: 'permanent', label:'Permanent address', name: 'permanent', isRequired:true, isDisabled:false,},
        {type: 'current', label:'Current address',  name: 'current', isRequired:false, isDisabled:addressTypeValue},
    ], [addressTypeValue]);
    
    const getCurrentForm = (currentForm) => {
        switch (currentForm.name) {
            case 'personal':
                return <PersonalForm {...currentForm} fieldName='person'  control={control}/>
            case 'address':
                return <AddressListForm 
                    {...currentForm}
                    addressList={addressList} 
                    onChangeAddressType={onChangeAddressType} 
                    addressTypeValue={addressTypeValue}
                />
            case 'guardian':
                return hasGuardian?<GuardianForm {...currentForm} fieldName='guardian' control={control} />:null
            case 'parents':
                return <ParentsForm 
                    {...currentForm}  
                    hasGuardian={hasGuardian} 
                    getGuardian={getGuardian}
                   contacts={contacts}
                   setContacts={setContacts}
                />
            default:
                return null
        }
    }

    return (
        <>

            {
                <FormContainer formLabel={currentForm.formLabel}>
                    {getCurrentForm(currentForm)}
                </FormContainer>
                
            }
            {
                showLeftArrow &&
                <Box
                    sx={{
                        height: '100%',
                        position: 'absolute',
                        left: 0, width: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        backgroundColor: '#F9F9F9',
                        cursor: 'pointer',


                    }}
                    onClick={() => onClickArrow?.('left')}
                >
                    <ArrowBackIosIcon />
                </Box>
            }
            {
                showRightArrow && 
                <Box
                    sx={{
                        height: '100%',
                        position: 'absolute',
                        right: 0,
                        width: 40,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#F9F9F9',
                        cursor: 'pointer',

                    }}
                    onClick={() => onClickArrow?.('right')}
                >
                    <ArrowForwardIosIcon />
                </Box>
            }
        </>
    )
}
export default MainContent;