import EditForm from '@/components/edit_form'

async function getEmployee(pageID){
  const res = await fetch(`http://localhost:3004/employees/${pageID}`);
  if(!res.ok){
    throw new Error('Could not find employee')
  }
  return res.json();
}


export default async function EditPage(props) {
    const ID = props.params.id;
    const employee = await getEmployee(ID)

    return (
      <>
        <EditForm employee={employee}/>
      </>
    )
}
  