import { Box, Checkbox, Divider, IconButton, TextField } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Controller, useFormContext } from "react-hook-form";
import EditIcon from '@mui/icons-material/Edit';



const ParentsForm = ({ getGuardian, hasGuardian, control, formLabel, contacts, setContacts }) => {
    const { formState: { errors }, setValue, getValues } = useFormContext();

    const onClickAddContact = () => {
        let tempContacts = [];
        if (contacts?.length < 2) {
            let nextlabelName = contacts.length === 1 ? 'Contact 2' : 'Contact 1';
            if (contacts.length === 0) {
                nextlabelName = 'Contact 1';

            } else {
                nextlabelName = contacts[0].label === 'Contact 2'
                    ? 'Contact 1' : 'Contact 2';
            }
            const obj = { id: uuidv4(), name: nextlabelName.replaceAll(' ', ''), label: nextlabelName, isEdit: false };
            tempContacts = [...contacts, obj];
            setContacts(tempContacts);
        }

    };
    const onClickRemoveContact = (id) => {
        let tempContacts = contacts.filter((x) => {
            const obj = x;
            if (obj.id !== id) {
                return obj;
            }
        });
        console.log(tempContacts);
        setContacts(tempContacts);

    };

    const onChangeGuardian = (event) => {
        getGuardian?.(event.target.checked);
    }
    console.log('outside contacts', contacts, contacts.length);
    return (
        <>
           <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                    <Controller
                        name="hasGuardian"
                        control={control}
                        defaultValue={false}
                        render={({ field }) =>
                            <Checkbox
                                {...field}
                                checked={!!hasGuardian}
                                onChange={onChangeGuardian}
                            />
                        }
                    />
                    <span className="box" style={{ fontSize: 12 }}>
                        If you have guardian
                    </span>
                </Box>
                <Box>
                    <Controller
                        name="parents.fatherName"
                        control={control}
                        defaultValue=''
                        render={({ field }) =>
                            <TextField
                                {...field}
                                label="Father's name"
                                variant="standard"
                                sx={{ width: 250, margin: 1 }}
                                InputLabelProps={{ required: true }}
                                error={!!errors.parents?.fatherName}
                                helperText={errors.parents?.fatherName?.message}
                            />}
                    />
                </Box>
                <Box>
                    <Controller
                        name="parents.motherName"
                        control={control}
                        defaultValue=''
                        render={({ field }) =>
                            <TextField
                                {...field}
                                label="Mother's name"
                                variant="standard"
                                sx={{ width: 250, margin: 1 }}
                                InputLabelProps={{ required: true }}
                                error={!!errors.parents?.motherName}
                                helperText={errors.parents?.motherName?.message}
                            />}
                    />
                </Box>
                <Box>
                    <Controller
                        defaultValue=''
                        name="parents.email"
                        control={control}
                        render={({ field }) =>
                            <TextField
                                {...field}
                                label="Email"
                                variant="standard"
                                sx={{ width: 250, margin: 1 }}
                                error={!!errors?.parents?.email}
                                helperText={errors?.parents?.email?.message}
                            />}
                    />
                </Box>
                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'left',
                            alignItems: 'center',
                            marginTop: 1.5,
                            cursor: contacts?.length >= 2 ? '' : 'pointer',
                            color: contacts?.length >= 2 ? '#C3C3C3' : ''

                        }}
                        onClick={contacts?.length >= 2 ? null : onClickAddContact}

                    >
                        <AddCircleIcon sx={{ color: contacts?.length >= 2 ? '' : '#5A5A5A' }} />
                        <span className="box" style={{ fontSize: '13px' }}>Add contact</span>
                    </Box>
                </Box>
                <Box>
                    <Controller
                        control={control}
                        name='parents.parentMainContact'
                        defaultValue=''
                        render={({ field }) =>
                            <TextField
                                {...field}
                                type='number'
                                label="Primary contact"
                                variant="standard"
                                sx={{ width: 250, margin: 1 }}
                                InputLabelProps={{ required: true }}
                                error={!!errors.parents?.parentMainContact}
                                helperText={errors.parents?.parentMainContact?.message}
                            />}
                    />
                </Box>
                {
                    contacts?.map((obj, index) => (
                        <Box
                            key={`box-contact${index}`}
                            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}
                        >
                            <Controller
                                control={control}
                                name={`parents.${obj.name}`}
                                defaultValue=''
                                render={({ field }) =>
                                    <TextField
                                        {...field}
                                        type='number'
                                        label={obj.label}
                                        variant="standard"
                                        sx={{ width: 190, margin: 1 }}
                                        error={!!errors?.parents?.[`contacts${obj.name}`]}
                                        helperText={errors?.parents?.[`contacts${obj.name}`]?.message}
                                        value={getValues(`parents.${obj.name}`)}
                                        InputLabelProps={{ onClick: () => console.log('hello label ' + obj.name) }}
                                    />}
                            />
                            <IconButton
                                title='Delete contact'
                                disableRipple={true} disableFocusRipple={true}
                                onClick={() => onClickRemoveContact(obj.id)}>
                                <DeleteIcon sx={{ height: 15, width: 15, marginTop: 3 }} />

                            </IconButton>
                        </Box>
                    ))
                }
        </>);
}
export default ParentsForm;