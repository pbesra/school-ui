import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddressForm from "../AddressForm/AddressForm";
import ParentsForm from "../ParentsForm/ParentsForm";
import PersonalForm from "../PersonalForm/PersonalForm";
import GuardianForm from "../GuardianForm/GuardianForm";
import AddressListForm from "../AddressForm/AddressListForm";

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
}) => {
    const addressList=[
        {type: 'permanent', label:'Permanent address', name: 'permanent', isRequired:true, isDisabled:false,},
        {type: 'current', label:'Current address',  name: 'current', isRequired:true, isDisabled:addressTypeValue},
    ];
    const getCurrentForm = (currentForm) => {
        switch (currentForm.name) {
            case 'personal':
                return <PersonalForm fieldName='person'  control={control}/>
            case 'address':
                return <AddressListForm 
                    addressList={addressList} 
                    onChangeAddressType={onChangeAddressType} 
                    addressTypeValue={addressTypeValue}
                />
            case 'guardian':
                return hasGuardian?<GuardianForm fieldName='guardian' control={control} />:null
            case 'parents':
                return <ParentsForm  hasGuardian={hasGuardian} getGuardian={getGuardian}/>
            default:
                return null
        }
    }

    return (
        <>

            {
                getCurrentForm(currentForm)
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