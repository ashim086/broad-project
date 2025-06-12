'use client'

import { getlatestproducts } from "@/api/product"
import WishlistCard from "@/components/common/cards/wishlistCard"
import { IProduct } from "@/interface/product.interface"
import { useQuery } from "@tanstack/react-query"


const Wishlist = () => {

    const { isLoading, error, data } = useQuery({
        queryKey: ['get-all-latest-products'],
        queryFn: getlatestproducts,

    })

    const handleRemove = (id: string) => {
        // logic to remove item
        console.log('Remove product with id:', id)
    }

    return (

        <div className='  mt-6 font-sans'>

            <div>
                <h1 className=" text-2xl font-bold mx-46 mt-2">
                    My Wishlist
                </h1>
            </div>
            <div className="flex space-x-6 my-6 flex-col justify-center content-center border-2 h-full m-46 border-gray-200 rounded-lg">

                {data?.data.slice(0, 5).map((product: IProduct, index: number) => (
                    <WishlistCard product={product} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Wishlist
