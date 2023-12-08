import axios from 'axios';
import { redirect } from 'next/navigation';


export default function AddPage() {

  async function onSubmit(formdata){
    'use server'
    await axios.post(`http://localhost:3004/employees`,{
      fullname: formdata.get('fullname'),
      position: formdata.get('position'),
      age: formdata.get('age'),
    });
    redirect('/');
  }

  
    return (
      <>
        <h1>Add Employee</h1>
        <form action={onSubmit}>
          <input type="text" className="form-control mb-3" id="fullname" placeholder="Enter the fullname" name="fullname"/>

          <input type="text" className="form-control mb-3" id="position" placeholder="Enter the position" name="position"/>

          <input type="text" className="form-control mb-3" id="age" placeholder="Enter the age" name="age"/>

          <button type="submit" className="btn btn-primary">
            Add employee
          </button>
        </form>  
      </>
    )
  }
  