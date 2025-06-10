import React from 'react'
import Card from '../../common/card'

function TopStock() {
    return (
        <main className='mt-16'>
            <h1 className='text-4xl font-semibold font-sans tracking-wide text-black m-6'>

                Our Top Selling Stock
            </h1>

            <div className='px-6 pt-16 content-center text-center  '>
                <div className='flex space-x-6  '>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </main>
    )
}

export default TopStock