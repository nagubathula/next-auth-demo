import Link from 'next/link'
import RemoveBtn from './RemoveBtn'
import { HiPencilAlt } from 'react-icons/hi'

const getProducts = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/products', {
      cache: 'no-store'
    })

    if (!res.ok) {
      throw new Error('Failed to fetch products')
    }

    return res.json()
  } catch (error) {
    console.log('Error loading products: ', error)
  }
}

export default async function ProductsList() {
  const { products } = await getProducts()

  return (
    <>
      {products.map(t => (
        <div
          key={t._id}
          className='my-3 flex items-start justify-between gap-5 border border-slate-300 p-4'
        >
          <div>
            <h2 className='text-2xl font-bold'>{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className='flex gap-2'>
            <RemoveBtn id={t._id} />
            <Link href={`/editProduct/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}
