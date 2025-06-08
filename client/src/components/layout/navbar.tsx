import { CarTaxiFront, Home, LogOutIcon, Search, User } from 'lucide-react'
import React from 'react'
import { BiPurchaseTag } from 'react-icons/bi'
import { GiWhistle } from 'react-icons/gi'

function NavBar() {

    const navbarItems = [
        {
            label: 'Home',
            icon: <Home />
        },
        {
            label: 'Whistlist',
            icon: <GiWhistle />
        },
        {
            label: 'Purchase',
            icon: <BiPurchaseTag />
        },
        {
            label: 'My Cart',
            icon: <CarTaxiFront />
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
        <div className='flex mt-6 w-full justify-between p-2'>



            <div className='flex space-x-7  border-gray-200 rounded-4xl shadow-lg px-6 justify-end items-end '>

                {
                    user.map((items, index) =>
                        <div className='flex items-center space-x-2  h-full rounded-4xl p-2 cursor-pointer' key={index}>
                            {items.icon}


                        </div>)
                }


            </div>


            <div className='flex space-x-7  border-gray-200 rounded-4xl shadow-lg px-6 content-center'>

                {
                    navbarItems.map((items, index) =>
                        <div className='flex items-center space-x-2  h-full rounded-4xl p-2 cursor-pointer' key={index}>
                            {items.icon}
                            <h1>{items.label}</h1>


                        </div>)
                }


            </div>
            <div className='flex space-x-7  border-gray-200 rounded-4xl shadow-lg  content-center justify-center text-center items-center'>


                <input type='text' className='border border-gray-200 broder-2 p-2 rounded-4xl' placeholder='Search...' />
                <Search className='mr-2' />


            </div>






        </div>
    )
}

export default NavBar