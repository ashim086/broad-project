"use client"

import Link from 'next/link';
import Input from '../common/input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '@/schema/auth.schema';
import { ILogin } from '@/interface/auth.interface';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { login } from '@/api/auth.api';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie'

function LoginForm() {

    const router = useRouter()

    const { reset, register, handleSubmit, formState: { errors } } = useForm({

        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(loginSchema),
        mode: 'onSubmit',

    })

    function onsubmit(data: ILogin) {
        console.log("on submit data", data)
        mutate(data)
    }


    const { isPending, isSuccess, error, mutate } = useMutation({
        mutationKey: ['login'],
        mutationFn: login,
        onSuccess: (response) => {

            toast.success(response?.message)

            Cookies.set('access_token', response?.token)
            localStorage.setItem('user_info', JSON.stringify(response?.data))
            router.replace('/home')
            reset()

        },
        onError: (error) => {

            toast.error(error?.message || "login failed")
        }

    })



    return (

        <main className=' flex justify-center items-center h-screen w-screen'>
            <div className="flex w-[999px] max-w-[1000px] h-[650px] rounded-lg shadow-lg shadow-gray-300 overflow-hidden tracking-wider ">


                {/*Left section */}
                <div className='flex-1   border-r-2 border-gray-500'>
                    {/* <Image src={...} alt="Auth Illustration" className="w-full h-full object-cover" /> */}
                </div>

                {/* Right section */}

                <div className='flex flex-col flex-1 w-1/2 justify-center items-center h-full relative'>

                    <div className='flex justify-between items-center h-full flex-col     w-full'>

                        <form onSubmit={handleSubmit(onsubmit)} className='space-y-2 flex flex-col text-center justify-center h-full'>

                            <Input required={true} label='Email' name='email' register={register} error={errors?.email?.message} placeholder='Email' type='email' />
                            <Input required={true} label='Password' name='password' register={register} error={errors?.password?.message} placeholder='Password' type='password' />

                            <button className=' border-2 border-gray-600 p-2 rounded-xl cursor-pointer'>Login</button>
                        </form>

                        {/* signup section */}
                        <div className='flex  space-x-2.5 pb-4'>

                            <label className='text-sm text-gray-400'>
                                Don't have an account yet?

                            </label>
                            <Link href={'/auth/signup'}>
                                <p className='text-blue-800 text-bold text-sm cursor-pointer'>
                                    Sign Up
                                </p>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default LoginForm