'use server'

import axios from 'axios';
import { redirect } from 'next/navigation';


export async function addEmployee(formState,formdata){
    try{
        const fullname = formdata.get('fullname');
        const position =  formdata.get('position');
        const age =  formdata.get('age');

        if(!fullname) { return {message:'The fullname is empty'}}
        if(!position) { return {message:'The position is empty'}}
        if(!age) { return {message:'The age is empty'}}

        await axios.post(`http://localhost:3004/employees`,{
            fullname:fullname,
            position: position,
            age:age
        });
    } catch(e){
        return {message:'Something went wrong'}
    }
    redirect('/');
}


export async function counterTrigger(){
    console.log('Counter trigger')
}

