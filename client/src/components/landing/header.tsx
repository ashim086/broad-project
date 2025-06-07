import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { IoMdCart } from 'react-icons/io'
import { SiSuno } from 'react-icons/si'

function Header() {
    return (

        <div className='p-4 flex justify-between items-center font-sans mx-2'>
            <div className='flex items-center'>
                <SiSuno size={25} />
                <label className='p-2 font-medium'>
                    Life
                    <br></br>Harmony
                </label>
            </div>


            <div className='flex px-7  justify-between items-center'>
                <div className='flex mx-9 space-x-4 items-center-safe'>

                    <FaHeart size={30} className='text-black bg-gray-100 p-2 rounded-full' />
                    <IoMdCart size={35} className='bg-black text-white rounded-full p-2' />
                </div>
                <button className='bg-black text-white px-3 py-2 rounded-3xl'>Login</button>
            </div>

           
        </div>

    )
}

export default Header