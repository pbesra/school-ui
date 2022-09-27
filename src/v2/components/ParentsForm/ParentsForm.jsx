import { Box, Checkbox, IconButton, TextField } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Controller } from "react-hook-form";



const ParentsForm = ({getGuardian, hasGuardian, control}) => {
    const [contacts, setContacts] = useState([]);
    const onClickAddContact = () => {
        let tempContacts = [];

        if (contacts?.length < 2) {
            let nextlabelName = contacts.length === 1 ? 'Contact number 2' : 'Contact number 1';
            if (contacts.length === 0) {
                nextlabelName = 'Contact number 1';
            } else {
                nextlabelName = contacts[0].label === 'Contact number 2'
                    ? 'Contact number 1' : 'Contact number 2';
            }
            const obj = { id: uuidv4(), label: nextlabelName, isEdit: false };
            tempContacts = [...contacts, obj];
            setContacts(tempContacts);
            console.log(tempContacts);
        }

    };
    const onClickRemoveContact = (id) => {
        console.log(id, contacts);
        let tempContacts = contacts.filter((x) => {
            const obj = x;
            if (obj.id !== id) {
                return obj;
            }
        });
        setContacts(tempContacts);

    };
    
    const onChangeGuardian=(event)=>{
        getGuardian?.(event.target.checked);
    }
    
    return (
        <>
            <Box sx={{ maxHeight: '100%', overflowY: 'auto',  '::-webkit-scrollbar':{display: 'none' } }}>
                <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                    <Controller
                        name="parents.hasGuardian"
                        control={control}
                        render={({field})=><Checkbox {...field} checked={hasGuardian}  onChange={onChangeGuardian} />}
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
                        render={({field})=>
                        <TextField
                            {...field}
                            label="Father's name"
                            variant="standard"
                            sx={{ width: 250, margin: 1 }}
                            required
                            InputLabelProps={{ required: true }}
                        />}
                    />
                </Box>
                <Box>
                    <Controller
                        name="parents.motherName"
                        control={control}
                        defaultValue=''
                        render={({field})=>
                        <TextField
                            {...field}
                            label="Mother's name"
                            variant="standard"
                            sx={{ width: 250, margin: 1 }}
                            required
                            InputLabelProps={{ required: true }}
                        />}
                    />
                </Box>
                <Box>
                    <Controller
                        defaultValue=''
                        name="parents.email"
                        control={control}
                        render={({field})=>
                        <TextField
                        {...field}
                        label="Email"
                        variant="standard"
                        sx={{ width: 250, margin: 1 }}
                        required
                        InputLabelProps={{ required: true }}
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
                        <AddCircleIcon />
                        <span className="box" style={{ fontSize: '13px' }}>Add contact</span>
                    </Box>
                </Box>
                <Box>
                    <Controller
                        control={control}
                        name='parents.contacts[0].parentContact'
                        defaultValue=''
                        render={({field})=>
                        <TextField
                            {...field}
                            label="Primary contact"
                            variant="standard"
                            sx={{ width: 250, margin: 1 }}
                            required
                            InputLabelProps={{ required: true }}
                        />}
                    />
                </Box>
                {
                    contacts?.map((obj, index) => (
                        <Box
                            key={`box-contact${index}`}
                            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Controller
                                control={control}
                                name={`parents.contacts[${index+1}].parentContact`}
                                defaultValue=''
                                render={({field})=>
                                <TextField
                                    {...field}
                                    label={obj.label}
                                    variant="standard"
                                    sx={{ width: 220, margin: 1 }}
                                />}
                            />
                            <IconButton disableRipple={true} disableFocusRipple={true} onClick={() => onClickRemoveContact(obj.id)}>
                                <DeleteIcon sx={{ height: 15, width: 15, marginTop: 3 }} />
                            </IconButton>
                        </Box>
                    ))
                }
            </Box>
        </>);
}
export default ParentsForm;