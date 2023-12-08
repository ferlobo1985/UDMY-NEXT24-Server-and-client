'use server'

import axios from 'axios';
import { redirect } from 'next/navigation';


export async function addEmployee(formState,formdata){
    return {
        message:'Something is wrong'
    }


    // await axios.post(`http://localhost:3004/employees`,{
    //     fullname: formdata.get('fullname'),
    //     position: formdata.get('position'),
    //     age: formdata.get('age'),
    // });
    // redirect('/');
}


export async function counterTrigger(){
    console.log('Counter trigger')
}

