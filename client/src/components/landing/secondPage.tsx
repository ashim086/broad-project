import React from 'react'
import Card from '../common/card'

function SecondPage() {
    return (
        <div className=' font-sans px-9 pb-6 mt-29'>

            <div className='flex justify-between pt-16' >

                <div className=''>

                    <h1 className='text-6xl font-bold '>NEW ARRIVALS</h1>
                    <p className='text-3xl pt-6 '>
                        Shop now and fuel
                        <br />your body with the best!
                    </p>
                </div>
                <div className='font-medium'>
                    <div className='flex space-x-6 items-center'>
                        <p>Vitamins</p>
                        <p className='bg-blue-300 p-2 rounded-4xl'>Dietary supplements</p>

                    </div>
                    <div className='pt-14'>

                        <p>Whether you're looking to strengthen
                            <br />your immune system, enhance your<br /> energy levels, or promote overall <br />wellness, we've got you covered.</p>
                        <br />
                        <label>View all products</label>
                    </div>
                </div>
            </div>


            <div className='flex space-x-6 my-6'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

        </div>
    )
}

export default SecondPage