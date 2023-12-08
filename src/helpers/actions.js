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

export async function editEmployee(formState,data){
    try{
        const {fullname,position,age} = data;

        if(!fullname) { return {message:'The fullname is empty'}}
        if(!position) { return {message:'The position is empty'}}
        if(!age) { return {message:'The age is empty'}}

        const res = await fetch(`http://localhost:3004/employees/${data.id}`,{
            method:'PATCH',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullname,
                position,
                age
            })
        });
        
        if(!res.ok){
            throw new Error(`${res.status} ${res.statusText}`)
        }
    } catch(error){
        return {message: error.message}
    }
    redirect('/');
}


export async function deleteEmployee(ID){
    await fetch(`http://localhost:3004/employees/${ID}`,{
        method:'DELETE'
    });
    redirect('/')
}



export async function counterTrigger(){
    console.log('Counter trigger')
}

