'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { IoMdCart } from 'react-icons/io'
import { SiSuno } from 'react-icons/si'

function Header() {

    const router = useRouter();

    function login() {
        router.push('/auth/login')
    }

    function cart() {

        router.push(`/home/cart`)
    }

    function wishlist() {

        router.push(`/home/wishlist`)
    }

    return (

        <div className='lg:p-4 flex justify-between items-center font-sans lg:mx-2 m-2'>
            <div className='flex items-center'>
                <SiSuno size={25} />
                <label className='p-2 font-medium cursor-pointer'>
                    Life Harmony
                </label>
            </div>


            <div className='flex lg:px-7  justify-between items-center'>
                <div className='flex mx-9 space-x-4 items-center-safe'>

                    <FaHeart size={37} className='text-black bg-gray-100 p-2 rounded-full cursor-pointer' onClick={wishlist} />
                    <IoMdCart size={35} className='bg-black text-white rounded-full p-2 cursor-pointer' onClick={cart} />
                </div>
                <button className='bg-black text-white px-3 py-2 rounded-3xl cursor-pointer' onClick={login}>Login</button>
            </div>


        </div>

    )
}

export default Header