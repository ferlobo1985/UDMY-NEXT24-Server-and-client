import Link from 'next/link';

export default function Header(){
    return(
        <div className='d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom'>
            <span className='fs-4'>Employee DB</span>

            <nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
                <Link href="/" className='me-3 py-2 link-body-emphasis text-decoration-none'>Home</Link>
                <Link href="/form/add" className='me-3 py-2 link-body-emphasis text-decoration-none'>Add employee</Link>
                <Link href="/about_us" className='me-3 py-2 link-body-emphasis text-decoration-none'>
                    About us
                </Link>
            </nav>

        </div>
    )
}