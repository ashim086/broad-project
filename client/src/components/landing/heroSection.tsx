import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

function HeroSection() {
    return (
        // {/* // center */}
        <div className='mx-2 mb-7'>

            <div className='w-full flex  my-9 items-center font-sans mx-2'>

                <p className=' text-8xl font-sans font-medium '>HEALTHCARE. REAL RESUTLS</p>
            </div>

            {/* decriptionSection */}

            <div className='flex font-sans space-x-6 content-between'>

                <div className="w-1/3 py-6 px-6">
                    <label className='text-2xl font-medium tracking-tight'>Take the step towards <br />a healthier, more <br />vibrant life-shop now <br />and fuel your body with <br />the best!</label>

                    <div className='flex flex-col '>

                        <p className='my-9'>Learn more</p>
                        <hr className='w-fit'></hr>
                        <button className='w-[144px] border text-white bg-black rounded-4xl flex p-2 items-center justify-center'>Shop  <FaArrowRightLong className='bg-white text-black mx-2 rounded-full' /></button>
                    </div>
                </div>

                {/* images section */}

                <div className="w-1/3 p-6 flex justify-center h-[450px]">
                    {/* Left container with Premium text at the bottom */}
                    <div className="flex flex-col justify-end h-full pb-9 px-9">
                        <p className="bg-white rounded-4xl px-4 w-[200px] text-end border-gray-200 border-2">
                            Premium Ingredients
                        </p>
                    </div>

                    {/* Image */}
                    <Image
                        src="/med.png"
                        width={250}
                        height={180}
                        alt="Picture of the author"
                    />

                    {/* Right container with two tags */}
                    <div className="px-12 text-center flex flex-col justify-between h-full py-6">
                        <p className="w-[150px] bg-white rounded-4xl border-gray-200 border-2">Allergen-Free</p>
                        <p className="bg-white rounded-4xl mt-[200px] border-gray-200 border-2">Non-GMO</p>
                    </div>
                </div>

                <div className="flex w-1/3 flex-col items-start pl-40 ">
                    <p className="w-[244px] text-left font-medium text-md">
                        Our products are carefully formulated with science-backed ingredients, free from artificial additives, and made to the highest standards.
                    </p>

                    <Image
                        src="/cap's.png"
                        width={200}
                        height={200}
                        alt="Picture of the author"
                        className="bg-white rounded-[460px] mt-36"
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection