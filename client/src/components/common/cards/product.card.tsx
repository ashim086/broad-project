import { IProduct } from "@/interface/product.interface"
import Image from "next/image"
import Button from "../buttons/button"

interface IProps {
    product: IProduct
}

const ProductCard: React.FC<IProps> = ({ product }) => {
    return (
        <div className="flex flex-col md:flex-row  rounded-2xl shadow-md overflow-hidden w-4xl mx-auto p-6 gap-6 h-[400px]">

            {/* Image Section */}
            <div className='relative h-56 w-full my-4'>
                <Image
                    alt={product?.name}
                    src={product?.files?.[0]?.url || '/fallback.jpg'}
                    fill
                    className='object-contain'
                />
            </div>

            {/* Info Section */}
            <div className="w-full md:w-1/2 flex flex-col ">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-gray-800">{product?.name}</h2>
                    <p className="text-xl text-green-600 font-bold">${product?.price}</p>
                    <p className="text-gray-600">{product?.description}</p>
                </div>

                <div className="mt-6 flex space-x-4">
                    <Button text="Buy Now" />
                    <Button text="Add to Cart" />
                </div>
            </div>
        </div>
    )
}

export default ProductCard
