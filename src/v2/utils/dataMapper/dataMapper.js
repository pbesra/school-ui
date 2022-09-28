
export const dataMapper=(data)=>{
    let parentContacts=[{contact: data.parents.parentMainContact, name:'main'}];
    // Collect all parents contacts.
    for(var k in data.parents){
        if(k.match(/^Contact[0-9]+$/)){
            if(!!data.parents?.[k]){
                parentContacts.push({contact: data.parents?.[k], name: k});
            }
        }
    }
    return {
        hasGuardian: data.hasGuardian,
        gender: data.personGender,
        firstName: data.personFirstName,
        middleName: data.personMiddleName,
        lastName: data.personLastName,
        dateOfBirth: data.personDateOfBirth,
        email: data.personEmail,
        contact: data.personContact,
        parents: { 
            fatherName: data.parents.fatherName, 
            motherName: data.parents.motherName, 
            contacts: parentContacts,
            email: data.parents.email,
        },
        addresses:[data.permanentAddress, data.currentAddress],
        guardian:!!data.guardianGender?.length>0 && !!data.guardianFirstName?.length>0?{
            gender: data.guardianGender,
            firstName: data.guardianFirstName,
            middleName: data.guardianMiddleName,
            lastName: data.guardianLastName,
            dateOfBirth: data.guardianDateOfBirth,
            email: data.guardianEmail,
            contact: data.guardianContact
        }:null
    }
}