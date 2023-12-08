import axios from 'axios'
import Link from 'next/link'
import Counter from '@/components/counter'; 

export default async function Home() {
  const employees = await axios.get('http://localhost:3004/employees')
  const showEmployees = employees.data.map(employee =>(
    <div key={employee.id} className='col'>
       <div className='card'>
          <div className='card-body'>
            <h3 className='card-title'>{employee.fullname}</h3>
            <hr/>
            <p className='card-text'>{employee.position}</p>
            <p className='card-text'>{employee.age}</p>
            <Link href={`/employees/${employee.id}`} className='btn btn-primary'>Go to empl</Link>
          </div>
       </div>
    </div>
  ))

  const counterTrigger = async() => {
    'use server'
    console.log('tests')
  }


  return (
    <>
      <h1>Employees:</h1>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
        {showEmployees}
      </div>
      <Counter counterTrigger={counterTrigger}/>
    </>
  )
}
