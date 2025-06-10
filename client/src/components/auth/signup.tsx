"use client"

import Link from 'next/link';
import Input from '../common/input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from '@/schema/auth.schema';
import { ISignup } from '@/interface/auth.interface';

function Signup() {


    const { register, formState: { errors }, handleSubmit } = useForm({

        defaultValues: {
            email: '',
            username: '',
            password: '',
            phoneNumber: '',
        },
        resolver: yupResolver(signupSchema),
        mode: 'all'
    })

    function onsubmit(data: ISignup) {
        console.log(data)
    }


    return (

        <main className=' flex justify-center items-center h-screen w-screen'>
            <div className="flex w-[999px] max-w-[1000px] h-[650px] rounded-lg shadow-lg shadow-gray-300 overflow-hidden tracking-wider ">


                {/*Left section */}



                <div className='flex flex-col flex-1 w-1/2 justify-center items-center h-full relative'>

                    <div className='flex justify-between items-center h-full flex-col     w-full'>

                        <form onSubmit={handleSubmit(onsubmit)} className='space-y-2 flex flex-col text-center justify-center h-full'>

                            <Input required={true} label='Email' name='email' register={register} error={errors?.email?.message} placeholder='Email' />
                            <Input required={true} label='Username' name='username' register={register} error={errors?.username?.message} placeholder='Username' />
                            <Input required={true} label='Password' name='password' register={register} error={errors?.password?.message} placeholder='Password' />
                            <Input required={true} label='Phone Number' name='phoneNumber' register={register} error={errors?.phoneNumber?.message} type='text' placeholder='Phone number' />



                            <button className=' border-2 border-gray-600 p-2 rounded-xl cursor-pointer'>Login</button>
                        </form>

                        {/* signup section */}
                        <div className='flex  space-x-2.5 pb-4'>

                            <label className='text-sm text-gray-400'>
                                Don't have an account yet?

                            </label>
                            <Link href={'/auth/login'}>
                                <p className='text-blue-800 text-bold text-sm cursor-pointer'>
                                    Login
                                </p>
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Right section */}



                <div className='flex-1   border-l-2 border-gray-500'>
                    {/* <Image src={...} alt="Auth Illustration" className="w-full h-full object-cover" /> */}
                </div>


            </div>
        </main>
    )
}

export default Signup