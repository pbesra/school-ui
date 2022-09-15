import React from "react"
import Address from "../Address/Address";
const UserBasicForm=({isValid, type, label})=>{
    return(
        <>
            {isValid && 
                <>
                    <select defaultValue={'Mr'}>
                        <option value='Mrs'>
                            Mrs
                        </option>
                        <option value='Mr'>
                            Mr
                        </option>
                        <option value=''>
                            None
                        </option>
                    </select>
                    <input placeholder="Enter name"/>
                    <input placeholder="Contact number"/>
                    <input placeholder="Email"/>
                    <Address type={type ?? 'user'} label={label ?? 'Basic form'}/>
                </>
            }
            
        </>
    );
}
export default UserBasicForm;