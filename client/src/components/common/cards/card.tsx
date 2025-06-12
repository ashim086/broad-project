'use client'

import Image from 'next/image'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { IoMdCart } from 'react-icons/io'
import { IProduct } from '@/interface/product.interface'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

interface IProps {
    product: IProduct
}

const Card: React.FC<IProps> = ({ product }) => {

    if (!product) return null;

    const router = useRouter();

    function singleproduct() {
        router.push(`/home/${product?._id}`)
    }

    function cart() {
        router.push(`/home/${product?._id}`)
    }

    function wishlist() {
        router.push(`/home/${product?._id}`)
    }

    return (
        <motion.div
            className='bg-white w-[300px] h-[400px] rounded-3xl p-6 flex flex-col justify-between shadow-md cursor-pointer hover:shadow-lg'
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <div className='flex justify-between space-x-2'>
                <motion.div whileHover={{ scale: 1.2 }} onClick={wishlist}>
                    <FaRegHeart className='text-gray-500' />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} onClick={cart}>
                    <IoMdCart size={19} />
                </motion.div>
            </div>

            <div className='relative h-56 w-full my-4' onClick={singleproduct}>
                <Image
                    alt={product.name}
                    src={product?.files?.[0]?.url || '/fallback.jpg'}
                    fill
                    className='object-contain'
                />
            </div>

            <div onClick={singleproduct}>
                <motion.p className='font-semibold text-lg' whileHover={{ scale: 1.02 }}>{product?.name}</motion.p>
                <p className='text-sm text-gray-600'>{product?.flavour}</p>
            </div>

            <div className='flex justify-between items-center mt-4' onClick={singleproduct}>
                <span className='text-base font-medium'>$ {product?.price}</span>
                <motion.button
                    className='px-4 py-2 rounded-full bg-black text-white text-sm cursor-pointer'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Buy now
                </motion.button>
            </div>
        </motion.div>
    )
}

export default Card
