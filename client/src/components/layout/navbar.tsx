import { CarTaxiFront, Home, LogOutIcon, Search, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { BiPurchaseTag } from 'react-icons/bi'
import { FaHeart } from 'react-icons/fa'
import { GiWhistle } from 'react-icons/gi'
import { IoMdCart } from 'react-icons/io'

function NavBar() {

    const navbarItems = [
        {
            label: 'Home',
            icon: <Home />,
            link: '/home'
        },
        {
            label: 'Whistlist',
            icon: <FaHeart />,
            link: '/home/wishlist'

        },
        {
            label: 'Purchase',
            icon: <BiPurchaseTag />,
            link: '/home/purchase'

        },
        {
            label: 'My Cart',
            icon: <IoMdCart />,
            link: '/home/cart'
        },

    ]

    const user = [
        {
            icon: <User />
        }, {
            icon: <LogOutIcon />
        },
    ]


    return (
        <div className='flex -6 w-full justify-between p-6  border-gray-200 shadow-lg rounded-lg '>



            <div className='flex space-x-7  border-gray-200 rounded-4xl  px-6 justify-end items-end '>

                {
                    user.map((items, index) =>
                        <div className='flex items-center space-x-2  h-full rounded-4xl p-2 cursor-pointer' key={index}>
                            {items.icon}


                        </div>)
                }


            </div>


            <div className='flex space-x-7  border-gray-200 rounded-4xl  px-6 content-center '>

                {
                    navbarItems.map((items, index) => (
                        <Link href={`${items.link}`} key={index}>
                            <div className='flex items-center space-x-2  h-full rounded-4xl p-2 cursor-pointer'>
                                {items.icon}
                                <h1>{items.label}</h1>

                            </div>
                        </Link>)
                    )
                }


            </div>
            <div className='flex space-x-7  border-gray-200 rounded-4xl   content-center justify-center text-center items-center'>


                <input type='text' className='border border-gray-200 broder-2 p-2 rounded-4xl' placeholder='Search...' />
                <Search className='mr-2' />


            </div>






        </div>
    )
}

export default NavBar