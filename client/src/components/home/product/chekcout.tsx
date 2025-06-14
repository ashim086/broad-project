'use client';

import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getProductById, purchaseProduct } from '@/api/product';
import Input from '@/components/common/input/input';

export type FormValues = {
    quantity: number;
    address: string;
    city: string;
    zipCode: string;
    country: string;
};

interface IProps {
    id: string;
}

const CheckoutPage = ({ id }: IProps) => {
    console.log('id', id);

    // ✅ Fetch product by ID
    const { data: product, isLoading } = useQuery({
        queryKey: ['get-product-by-id', id],
        queryFn: () => getProductById(id),
    });

    // ✅ Setup react-hook-form with proper field names
    const {
        register,
        watch,
        formState: { errors },
        handleSubmit,
    } = useForm<FormValues>({
        defaultValues: {
            quantity: 1,
            address: '',
            city: '',
            zipCode: '',
            country: '',
        },
    });

    // ✅ Watch quantity reactively
    const quantity = watch('quantity') || 1;

    // ✅ Calculate total correctly when product or quantity changes
    const [calculatedTotal, setCalculatedTotal] = useState(0);

    useEffect(() => {
        if (product?.data?.price) {
            setCalculatedTotal(quantity * product.data.price);
        }
    }, [quantity, product]);

    // ✅ Mutation to place the order
    const { mutate } = useMutation({
        mutationFn: purchaseProduct,
        mutationKey: ['purchase-product'],
        onSuccess: (data) => {
            console.log('Order successful:', data);
            alert('Order placed successfully!');
        },
        onError: (error) => {
            console.error('Order failed:', error);
            alert('Order failed. Please try again.');
        },
    });

    // ✅ Submit handler
    const onSubmit = (data: FormValues) => {
        if (!product) {
            alert('Product not loaded');
            return;
        }

        const total = data.quantity * product.data.price;
        console.log('Order Details:', { ...data, total });

        mutate({
            id,
            data: { ...data },
        });
    };

    // ✅ Proper loading and not found fallback
    if (isLoading) {
        return (
            <div className="h-screen flex justify-center items-center w-screen">
                Loading...
            </div>
        );
    }
    if (!product) return <p>Product not found.</p>;

    return (
        <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ✅ Shipping Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <h2 className="text-xl font-semibold mb-2">Shipping & Quantity</h2>

                <Input
                    required
                    label="Quantity"
                    name="quantity"
                    register={register}
                    error={errors?.quantity?.message}
                    type="number"
                />

                <Input
                    required
                    label="Address"
                    name="address"
                    register={register}
                    error={errors?.address?.message}
                    type="text"
                />

                <Input
                    required
                    label="City"
                    name="city"
                    register={register}
                    error={errors?.city?.message}
                    type="text"
                />

                <Input
                    required
                    label="ZIP Code"
                    name="zipCode"
                    register={register}
                    error={errors?.zipCode?.message}
                    type="text"
                />

                <Input
                    required
                    label="Country"
                    name="country"
                    register={register}
                    error={errors?.country?.message}
                    type="text"
                />

                <button
                    type="submit"
                    className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
                >
                    Place Order
                </button>
            </form>

            {/* ✅ Order Summary */}
            <div className="border border-gray-200 p-4 rounded-lg shadow h-full w-full flex flex-col justify-between">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                <div className="flex items-center gap-4">
                    <Image
                        src={product?.data.files?.[0].url || '/placeholder.png'}
                        alt={product?.data.name || 'Product'}
                        width={80}
                        height={80}
                        className="rounded"
                    />
                    <div>
                        <h3 className="font-medium">{product?.data.name || 'Product'}</h3>
                        <p className="text-sm text-gray-600">Qty: {quantity}</p>
                        <p className="text-sm font-semibold">
                            ${product?.data.price} each
                        </p>
                    </div>
                </div>

                <div className="flex justify-between mt-4 font-semibold">
                    <span>Total</span>
                    <span>${calculatedTotal.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
