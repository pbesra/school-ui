import React, { useState } from "react";
import StudentForm from "../StudentForm/StudentForm";
import Address from "../Address/Address";
import UserBasicForm from "../UserBasicForm/UserBasicForm";
const RegistrationForm=()=>{
    const [studentDetails, setStudentDetails]=useState();
    const [permanentAddress, setPermanentAddress]=useState();
    const [currentAddress, setCurrentAddress]=useState();
    const [hasGuardian, setHasGuardian]=useState(false);
    const [isPermanentAddressSameAsCurrent, setIsPermanentAddressSameAsCurrent]=useState(false);
    console.log(studentDetails);
    return(
        <>
            <div 
                style={
                    {
                        display:'flex',
                         flexDirection:'column', 
                         alignItems:'center', 
                         justifyContent:'center', 
                         border:'1px solid #818181',
                         borderRadius:'4px',
                        
                    }}>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <StudentForm type='student' getPersonalDetails={setStudentDetails}/>
                </div>
                <div>
                    <Address 
                        type='studentPermanent' 
                        getAddress={setPermanentAddress}
                        label='Permanent address'
                    />
                </div>
                <div>
                    <div>Is permanent address same as current address</div>
                    Yes: <input onChange={()=>setIsPermanentAddressSameAsCurrent(true)} name="addressSwitch" type='radio'/>
                    No: <input onChange={(e)=>setIsPermanentAddressSameAsCurrent(false)} name="addressSwitch"  type='radio'/>
                </div>
                <div>
                    <Address 
                        type='studentCurrent' 
                        getAddress={setCurrentAddress} 
                        defaultValues={isPermanentAddressSameAsCurrent?permanentAddress:undefined}
                        label='Current address'
                    />
                </div>
                <div>In case of guradian: </div>
                <div>
                    Yes: <input onChange={()=>setHasGuardian(true)} name="addressSwitch" type='radio'/>
                    No: <input onChange={(e)=>setHasGuardian(false)} name="addressSwitch"  type='radio'/>
                </div>
                <div>
                    <UserBasicForm type='guardian' isValid={hasGuardian} label='Guardian details'/>
                </div>
            </div>
        </>
    );
}
export default RegistrationForm;

/**
 * Name's initial: DropDown
 * FirstName: string,
 * MiddleName: string,
 * LastName: string,
 * DateOfBirth: Date
 * Father's name: string
 * Mother's name: string
 * PermanentAddress: string,(PIN Code: number,)
 * PermanentAddress=PresentAddress: RadioButton
 * PresentAddress: (PIN Code: number,)
 * ContactNumber: string
 * In case of guardian:
 * Name
 * 
 */