import Card from '@/components/common/card'
import React from 'react'

function FeaturedStock() {
    return (
        <main className='mt-26'>
            <h1 className='text-4xl font-semibold font-sans tracking-wide text-black m-6'>

                Featured Stock
            </h1>
            <div className='px-6 pt-16 content-center text-center justify-center '>
                <div className='flex space-x-6  content-center justify-center'>
                    <Card />
                    <Card />
                </div>
            </div>
        </main>

    )
}

export default FeaturedStock