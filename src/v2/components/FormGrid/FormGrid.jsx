import { Box, Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import SideBarContent from '../SideBarContent/SideBarContent';
import MainContent from '../MainContent/MainContent';
import { FormProvider, useForm, useFormContext, useWatch } from 'react-hook-form';
import { useEffect } from 'react';
const FormGrid = () => {
    const activeColor = '#518DFF';
    const inActiveColor = '#5A5A5A';
    const { control, reset, handleSubmit, setValue, getValues, } = useFormContext();
    const watchedFormFields=useWatch({name: 'permanentAddress'});
    const watchedPermanentCurrentAddress=useWatch({name: 'person.isPermanentAddressEqualCurrent'});
        
    const [sideBarItems, setSideBarItems] = useState([
        {
            name: 'personal',
            label: 'Personal details',
            isOpen: true,
            style: {
                width: '100%',
                height: '50px',
                backgroundColor: '#F9F9F9',
                color: activeColor,
            },
            isVisible: true,
        },
        {
            name: 'address',
            label: 'Address details',
            isOpen: false,
            style: {
                width: '100%',
                height: '50px',
                backgroundColor: '#F9F9F9',
                color: inActiveColor,
            },
            isVisible: true,
        },
        {
            name: 'parents',
            label: 'Parents details',
            isOpen: false,
            style: {
                width: '100%',
                height: '50px',
                backgroundColor: '#F9F9F9',
                color: inActiveColor,
            },
            isVisible: true,
        },
        {
            name: 'guardian',
            label: 'Guardian details',
            isOpen: false,
            style: {
                width: '100%',
                height: '50px',
                backgroundColor: '#F9F9F9',
                color: inActiveColor,
            },
            isVisible: false,
        },

    ]);
    const [currentSideBarIndex, setCurrentSideBarIndex] = useState(0);

    const setAttr = (item, attr) => {
        item.style.color = attr.color;
        item.isOpen = attr.isOpen;
        return item;
    }
    const onClickButton = (name) => {
        let currentIndex = currentSideBarIndex;
        const items = sideBarItems.map((x, index) => {
            let obj = x;
            obj = setAttr(obj, { isOpen: false, color: inActiveColor });
            if (obj.name === name) {
                obj = setAttr(obj, { isOpen: true, color: activeColor });
                currentIndex = index;
            }
            return obj;
        });
        setCurrentSideBarIndex(currentIndex);
        setSideBarItems(items);
    }

    const onClickArrow = (direction) => {
        console.log(direction);
        let newIndex = currentSideBarIndex;
        if (direction === 'right' && currentSideBarIndex < sideBarItems.length - 1) {
            newIndex = currentSideBarIndex + 1;
        } else if (direction === 'left' && currentSideBarIndex > 0) {
            newIndex = currentSideBarIndex - 1;
        }
        if (newIndex !== currentSideBarIndex) {
            console.log(newIndex);
            let newSideBarItems = sideBarItems;
            newSideBarItems[currentSideBarIndex] = setAttr(
                newSideBarItems[currentSideBarIndex],
                { isOpen: false, color: inActiveColor }
            );
            newSideBarItems[newIndex] = setAttr(sideBarItems[newIndex], { isOpen: true, color: activeColor });
            setCurrentSideBarIndex(newIndex);
            setSideBarItems(newSideBarItems);
        }
    }
    const [hasGuardian, setHasGuardian] = useState(false);
    const getGuardian = (isGuardian) => {
        const tempItems = sideBarItems.flatMap((x) => {
            let obj = x;
            if (x.name === 'guardian') {
                obj.isVisible = isGuardian;
            }
            return obj;
        });
        setHasGuardian(isGuardian);
        setSideBarItems(tempItems);
        setValue('parents.hasGuardian', isGuardian);
    }
    const [addressTypeValue, setAddressTypeValue] = useState(false);
    const onChangeAddressType = (addressValue) => {
        setAddressTypeValue(addressValue);
        setValue('person.isPermanentAddressEqualCurrent', !!addressValue);
        console.log(addressValue);
    }
    const onSubmit = (data) => {
        console.log(data);
    }
    useEffect(()=>{
        if(!!watchedPermanentCurrentAddress){
            setValue("currentAddress", watchedFormFields);
        }
    }, [watchedFormFields, setValue, watchedPermanentCurrentAddress]);
    return (
        <Grid container spacing={0.5}>
            <Grid item xs={3}>
                <Box sx={{
                    borderRadius: '4px',
                    border: '0.4px solid #E7E7E7',
                    height: '60vh',
                    width: '75%',
                    margin: 4,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#E7E7E7'
                }}>
                    <SideBarContent
                        sideBarItems={sideBarItems}
                        onClickButton={onClickButton}

                    />
                </Box>
            </Grid>
            <Grid item xs={9}>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{
                        height: '60vh',
                        width: '75%',
                        margin: 4,
                        borderRadius: '4px',
                        border: '0.4px solid #E7E7E7',
                        backgroundColor: '#E7E7E7',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        flexDirection: 'column'
                    }}>

                        <MainContent
                            onClickArrow={onClickArrow}
                            currentForm={sideBarItems[currentSideBarIndex]}
                            currentIndex={currentSideBarIndex}
                            showLeftArrow={currentSideBarIndex > 0}
                            showRightArrow={currentSideBarIndex < sideBarItems.filter(x => x.isVisible)?.length - 1}
                            getGuardian={getGuardian}
                            hasGuardian={hasGuardian}
                            addressTypeValue={addressTypeValue}
                            onChangeAddressType={onChangeAddressType}
                            control={control}
                        />
                        {
                            currentSideBarIndex === sideBarItems.filter(x => x.isVisible)?.length - 1
                            &&
                            <Box sx={{ outline: '2px', }}>
                                <Button sx={{ margin: 1 }} size="small" variant='outlined'>Cancel</Button>
                                <Button type='submit' sx={{ margin: 1 }} size="small" variant='outlined'>Submit</Button>
                            </Box>
                        }
                    </Box>
                </form>


            </Grid>
        </Grid>
    );
}
export default FormGrid;