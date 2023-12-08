async function getEmployee(pageID){
  const res = await fetch(`http://localhost:3004/employees/${pageID}`);
  if(!res.ok){
    throw new Error('Could not find employee')
  }
  return res.json()
}

export default async function EmployeeByIDPage(props) {
  const pageID = props.params.id;
  const employee = await getEmployee(pageID)


    return (
      <>
        <h1>{employee.fullname}</h1>
        <div>
          <h4>Position:{employee.position}</h4>
          <h4>Age:{employee.age}</h4>
        </div>
      </>
    )
  }
  