'use client'

import { IProduct } from "@/interface/product.interface"
import Image from "next/image"

interface IProps {
    product: IProduct
}

const WishlistCard: React.FC<IProps> = ({ product }) => {
    return (
        <div className="flex items-center gap-4 p-4 rounded-lg shadow-lg shadow-gray-200 w-full content-center text-center">
            {/* Image container with fixed size */}
            <div className="relative w-24 h-24"> {/* Adjust the size here */}
                <Image
                    alt={product.name}
                    src={product?.files?.[0]?.url || '/fallback.jpg'}
                    layout="fill"  // Ensure the image fills the container
                    objectFit="contain"  // Maintain aspect ratio
                    className="rounded-md"
                />
            </div>
            <div className="flex-1">
                <h3 className="text-lg font-semibold">{product?.name}</h3>
            </div>
            <p className="text-gray-600 text-xl font-semibold">${product?.price}</p>
            <button
                // onClick={onRemove}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
            >
                Remove
            </button>
        </div>
    )
}

export default WishlistCard
