'use client'

import { getMostlikedproducts } from '@/api/product'
import Card from '@/components/common/cards/card'
import { IProduct } from '@/interface/product.interface'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

function FeaturedStock() {

    const { isLoading, error, data } = useQuery({
        queryKey: ['get-all-mostBuy-products'],
        queryFn: getMostlikedproducts,

    })

    return (
        <main className='mt-16'>
            <h1 className='text-4xl font-semibold font-sans tracking-wide text-black m-6'>

                Customer's Favourite Stock
            </h1>

            <div className='px-6 pt-16 content-center text-center  '>

                <div className='flex space-x-6 my-6'>
                    {data?.data.slice(0, 5).map((product: IProduct, index: number) => (
                        <Card product={product} key={index} />
                    ))}
                </div>
            </div>
        </main>

    )
}

export default FeaturedStock