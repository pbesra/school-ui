
export const dataMapper=(data)=>{
    let parentContacts=[{contact: data.parents.parentMainContact, name:'main'}];
    let count=0;
    // Collect all parents contacts.
    for(var k in data.parents){
        if(k.match(/^contacts[0-9]+$/)){
            if(!!data.parents?.[k]){
                parentContacts.push({...data.parents?.[k], name: `Contact ${count+1}`});
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
        guardian:!!data.gender && !!data.firstName?{
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