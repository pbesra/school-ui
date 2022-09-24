import React, {memo} from 'react';
const RequiredAsterisk=()=>{
    console.log('########### RequiredAsterisk #############');
    return(
        <span style={{color:'red'}}>*</span>
    );
}
export default memo(RequiredAsterisk);