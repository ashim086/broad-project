import { CarTaxiFront, Home, LogOutIcon, User } from 'lucide-react'
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
        <div className='flex mt-6 w-full justify-between'>

            <div className='flex space-x-7  border-gray-200 rounded-4xl shadow-lg px-6 content-center'>

                {
                    navbarItems.map((items) =>
                        <div className='flex items-center space-x-2  h-full rounded-4xl p-2 cursor-pointer'>
                            {items.icon}
                            <h1>{items.label}</h1>


                        </div>)
                }


            </div>
            <div className='flex space-x-7  border-gray-200 rounded-4xl shadow-lg px-6 justify-end items-end ml-26'>

                {
                    user.map((items) =>
                        <div className='flex items-center space-x-2  h-full rounded-4xl p-2 cursor-pointer'>
                            {items.icon}


                        </div>)
                }


            </div>






        </div>
    )
}

export default NavBar