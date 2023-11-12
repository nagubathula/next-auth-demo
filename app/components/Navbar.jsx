import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between bg-slate-800 px-8 py-3'>
      <Link className='font-bold text-white' href={'/'}>
        GTCoding.
      </Link>
      <Link className='bg-white p-2' href={'/addProduct'}>
        Add Product
      </Link>
    </nav>
  )
}
