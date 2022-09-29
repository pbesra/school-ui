import React, { useState, useCallback, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Snackbar  from '@mui/material/Snackbar';
import SideBarContent from '../SideBarContent/SideBarContent';
import MainContent from '../MainContent/MainContent';
import { useFormContext, useWatch } from 'react-hook-form';
import { dataMapper } from '../../utils/dataMapper/dataMapper';
import { FormInitObjects } from '../../resources/dataResources';
import Resource, { endPoints, uriNames } from '../../resources/constants';
import Service from '../../services/Service';



const FormGrid = () => {
    const { control, handleSubmit, setValue, formState: { errors }, clearErrors } = useFormContext();
    const watchedFormFields = useWatch({ name: 'permanentAddress' });
    const watchedPermanentCurrentAddress = useWatch({ name: 'isPermanentAddressEqualCurrent' });
    const [sideBarItems, setSideBarItems] = useState(FormInitObjects);
    const [currentSideBarIndex, setCurrentSideBarIndex] = useState(0);
    const [hasGuardian, setHasGuardian] = useState(false);
    const [addressTypeValue, setAddressTypeValue] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [contacts, setContacts] = useState([]);
    const [isSnackbarOpen, setIsSnackbarOpen] = useState({isOpen:false, message:''});

    const onCloseSnackbar = () => {
        setIsSnackbarOpen(false);
    }

    const setAttr = useCallback((item, attr) => {
        item.style.color = attr.color;
        item.isOpen = attr.isOpen;
        return item;
    }, []);
    const onClickSideBarItem = useCallback((name) => {
        let currentIndex = currentSideBarIndex;
        const items = sideBarItems.map((x, index) => {
            let obj = x;
            obj = setAttr(obj, { isOpen: false, color: Resource.colors.inActiveColor });
            if (obj.name === name) {
                obj = setAttr(obj, { isOpen: true, color: Resource.colors.activeColor });
                currentIndex = index;
            }
            return obj;
        });
        setCurrentSideBarIndex(currentIndex);
        setSideBarItems(items);
    }, []);

    const onClickArrow = useCallback((direction) => {
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
                { isOpen: false, color: Resource.colors.inActiveColor }
            );
            newSideBarItems[newIndex] = setAttr(
                sideBarItems[newIndex],
                { isOpen: true, color: Resource.colors.activeColor });
            setCurrentSideBarIndex(newIndex);
            setSideBarItems(newSideBarItems);
        }
    }, [currentSideBarIndex]);

    const getGuardian = useCallback((isGuardian) => {
        const tempItems = sideBarItems.map((x) => {
            let obj = x;
            if (x.name === 'guardian') {
                obj.isVisible = isGuardian;
            }
            return obj;
        });
        setHasGuardian(isGuardian);
        setSideBarItems(tempItems);
        setValue('hasGuardian', isGuardian);
    }, []);


    const onChangeAddressType = useCallback((addressValue) => {
        setAddressTypeValue(addressValue);
        setValue('isPermanentAddressEqualCurrent', !!addressValue);

    }, []);

    useEffect(() => {
        if (!!watchedPermanentCurrentAddress) {
            setValue("currentAddress.addressName", watchedFormFields?.addressName ?? '');
            setValue("currentAddress.pinCode", watchedFormFields?.pinCode ?? '');
        }
    }, [watchedFormFields, setValue, watchedPermanentCurrentAddress]);
    // Remove errors from guardian if no guardian (if selected earlier)
    useEffect(() => {
        if (!hasGuardian) {
            const items = ['FirstName', 'LastName', 'Contact', 'DateOfBirth', 'Email'];
            items.forEach((name) => {
                const key = `guardian${name}`;
                console.log('remove error for, ', key);
                if (errors?.[key]) {
                    console.log('remove error for, ', key);
                    clearErrors(key);
                }
                console.log('setValue', key);
                if (key !== 'guardianDateOfBirth') {
                    setValue(key, '');
                }
            });

        }
    }, [hasGuardian]);
    const onSubmit = useCallback((data) => {
        setLoading(true);

        // Remove set timeout later
        setTimeout(() => {
            const fullData = dataMapper(data);
            var service = new Service();
            service.post({ payload: fullData, endpoint: endPoints.student, uriName: uriNames.main }).then((response) => {
                if (response?.status >= 200 && response?.status < 300) {
                    setIsSnackbarOpen((prev)=>{
                        prev.isOpen=true;
                        prev.message='Student form submitted.';
                        return prev;
                    });
                }else{
                    setIsSnackbarOpen((prev)=>{
                        prev.isOpen=true;
                        prev.message='Something went wrong.';
                        return prev;
                    });
                }
                setLoading(false);
            });
        }, 2000);
    }, []);
    return (
        <>
            <Snackbar
                open={isSnackbarOpen.isOpen}
                autoHideDuration={6000}
                onClose={onCloseSnackbar}
                message={isSnackbarOpen.message}
            />
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
                            onClickSideBarItem={onClickSideBarItem}

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
                            {Object.keys(errors)?.length > 0 &&
                                <span style={{ fontSize: 12, margin: 3, color: '#F95300' }}>
                                    <i>*Please enter all required fields.</i>
                                </span>
                            }
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
                                contacts={contacts}
                                setContacts={setContacts}

                            />
                            {
                                <Box sx={{ outline: '2px', }}>
                                    <Button sx={{ margin: 1, textTransform: 'none' }} size="small" variant='outlined'>Cancel</Button>
                                    <Button
                                        type='submit'

                                        sx={{ margin: 1, textTransform: 'none' }}
                                        size="small"
                                        variant='outlined'
                                        disabled={Object.keys(errors)?.length > 0}
                                    >
                                        {
                                            isLoading ?
                                                (
                                                    <>
                                                        <CircularProgress sx={{ margin: 0.4 }} size={16} color="inherit" />
                                                        <span>{'Submitting'}</span>
                                                    </>
                                                )
                                                : ('Submit')
                                        }

                                    </Button>
                                </Box>
                            }
                        </Box>
                    </form>


                </Grid>
            </Grid>
        </>
    );
}
export default FormGrid;