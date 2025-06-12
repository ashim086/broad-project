'use client'

import Image from 'next/image'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { IoMdCart } from 'react-icons/io'
import { IProduct } from '@/interface/product.interface'
import { useRouter } from 'next/navigation'

interface IProps {
    product: IProduct
}

const Card: React.FC<IProps> = ({ product }) => {

    if (!product) return null;


    const router = useRouter();


    function singleproduct() {

        router.push(`/home/${product?._id}`)
    }

    return (
        <div className='bg-white w-[300px] h-[400px] rounded-3xl p-6 flex flex-col justify-between shadow-md' onClick={singleproduct}>
            <div className='flex justify-between space-x-2'>
                <FaRegHeart className='text-gray-500' />
                <IoMdCart size={19} />
            </div>

            <div className='relative h-56 w-full my-4'>
                <Image
                    alt={product.name}
                    src={product?.files?.[0]?.url || '/fallback.jpg'}
                    fill
                    className='object-contain'
                />
            </div>

            <div>
                <p className='font-semibold text-lg'>{product?.name}</p>
                <p className='text-sm text-gray-600'>{product?.flavour}</p>
            </div>

            <div className='flex justify-between items-center mt-4'>
                <span className='text-base font-medium'>$ {product?.price}</span>
                <button className='px-4 py-2 rounded-full bg-black text-white text-sm cursor-pointer'>Buy now</button>
            </div>
        </div>
    )
}

export default Card
