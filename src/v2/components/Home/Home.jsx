
import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import FormGrid from '../FormGrid/FormGrid';
import { FormProvider } from 'react-hook-form';

const Home = () => {

    const methods= useForm({
        defaultValues: {
            address:[],
        }
    });
    
    return(<FormProvider {...methods}>
        <FormGrid/>
    </FormProvider>);
}
export default Home;