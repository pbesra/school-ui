import React, { useCallback, useEffect, useState } from "react";
import StudentForm from "../StudentForm/StudentForm";
import UserBasicForm from "../UserBasicForm/UserBasicForm";
import Grid from "@mui/material/Grid";
import Resources from "../../utlis/Resources";
import axios from "axios";
import Service from "../../library/services/Service";


const RegistrationForm = () => {

    const [studentData, setStudentData] = useState();
    const [hasGuardian, setHasGuardian] = useState(false);
    const [guardian, setGuardian] = useState();
    const [isProcessing, setIsProcessing] = useState(false);
    const onSubmitForm = (e) => {
        e.preventDefault();
        const data = {
            ...studentData,
            hasGuardian,
            guardian: !!hasGuardian ? guardian : null,
        }
        console.log(data);
        
    };
    const getUserBasicDetails = useCallback((data) => {
        setGuardian(data);
    }, []);
    useEffect(() => {
        // document.body.style.backgroundColor = Resources.colors.body;
        // axios.post('https://reqres.in/api/articles', article, { headers })
        var service=new Service();
        service.get(`http://localhost:5282/api/v1/Student`)
            .then((response)=>{
                console.log(response);
            });
    }, []);
    console.log('########### RegistrationForm #############');
    const getStudentData=(data)=>{

    }
    return (
        <>

            <div
                style={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 8,

                    }}>
                <form onSubmit={onSubmitForm}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Grid container spacing={1}>
                            <Grid item>
                                <StudentForm
                                    type='student'
                                    setStudentData={setStudentData}
                                    getStudentData={getStudentData}
                                />
                            </Grid>
                        </Grid>

                        <div style={{ color: '#666666' }}>In case of guradian: </div>
                        <div style={{ color: '#666666' }}>
                            Yes: <input
                                onChange={() => setHasGuardian(true)}
                                name="addressSwitch"
                                type='radio'
                            />
                            No: <input
                                defaultChecked={true}
                                onChange={(e) => setHasGuardian(false)}
                                name="addressSwitch"
                                type='radio'
                            />
                        </div>
                        <div>
                            <UserBasicForm
                                type='guardian'
                                isValid={hasGuardian}
                                label='Guardian details'
                                getUserBasicDetails={getUserBasicDetails}
                                addressType='permanent'
                                addressLabel={"Address(Permanent)"}
                                isAddressRequired={hasGuardian}
                            />
                        </div>
                        <div style={{ marginTop: 3 }}>
                            <button
                                onClick={(e) => e.preventDefault()}
                                type="button"
                                style={{ margin: 3 }}
                            >
                                Cancel
                            </button>
                            <input type="reset" value="Reset" />
                            <button
                                type="submit"
                                disabled={isProcessing}
                                style={{ margin: 3, }}
                            >
                                {
                                    isProcessing ? 'Submitting...' : 'Submit'
                                }
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
export default RegistrationForm;