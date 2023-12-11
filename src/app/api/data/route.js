import { cookies, headers  } from 'next/headers'

export async function POST(request){
    const data = await request.json();
    const res = await fetch('http://localhost:3004/employees',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    });

    if(!res.ok){
        return Response.json(res.statusText,{
            status: res.status
        })
    }

    return Response.json('ok',{status:200})
}



export async function GET(request){
    // const x = request.nextUrl.searchParams.get('x');
    // const y = request.nextUrl.searchParams.get('y');
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    const headersList = headers();
    console.log(headersList.get('Authorization'))

    const res = await fetch('http://localhost:3004/employees',{
        next:{revalidate:30}
    });
    const employees = await res.json();
    return Response.json(employees,{
        status:200,
        headers:{'Set-Cookie':'token=Bearer kjhzbkajdbckdajhcbakdcb'}
    })
}