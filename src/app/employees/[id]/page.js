import { notFound } from "next/navigation";
import Link from 'next/link';
import { deleteEmployee } from '@/helpers/actions'


async function getEmployee(pageID){
  const res = await fetch(`http://localhost:3004/employees/${pageID}`);
  if(!res.ok){
    //throw new Error('Could not find employee')
    return notFound();
  }
  return res.json()
}

export default async function EmployeeByIDPage(props) {
  const pageID = props.params.id;
  const employee = await getEmployee(pageID);
  const deleteAction = deleteEmployee.bind(null,pageID)


    return (
      <>
        <h1>{employee.fullname}</h1>
        <div>
          <h4>Position:{employee.position}</h4>
          <h4>Age:{employee.age}</h4>
        </div>
        <hr/>
        <Link href={`/form/edit/${employee.id}`}>
          Edit employee
        </Link>
        <hr/>
        <form action={deleteAction}>
          <button type="submit">
            Delete user
          </button>
        </form>
      </>
    )
  }
  
export async function generateStaticParams(){
  const employees = await fetch(`http://localhost:3004/employees`)
  .then((res)=> res.json());


  return employees.map(employee => {
    return {
      id: employee.id.toString()
    }
  })
}