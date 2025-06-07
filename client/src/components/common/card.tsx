import Image from 'next/image'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import img from '@/../public/med.png'

function Card() {
    return (
        <div className='bg-white w-[300px] h-[400px] rounded-3xl p-6 flex flex-col justify-between shadow-md'>

            <div className='flex justify-end'>
                <FaRegHeart className='text-gray-500' />
            </div>

            <div className='relative h-70 w-full my-4'>
                <Image
                    alt='Omega-3 Fish oil'
                    src={img}
                    fill
                    className='object-contain'
                />
            </div>

            <div>
                <p className='font-semibold text-lg'>Omega-3 Fish Oil</p>
                <p className='text-sm text-gray-600'>Orange flavour</p>
            </div>

            <div className='flex justify-between items-center mt-4'>
                <span className='text-base font-medium'>$32.00</span>
                <button className='px-4 py-2 rounded-full bg-black text-white text-sm cursor-pointer'>Add to cart</button>
            </div>

        </div>
    )
}

export default Card
