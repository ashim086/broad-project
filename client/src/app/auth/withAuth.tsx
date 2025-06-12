'use client'

import { Parsetoken } from "@/util/parseToken"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import toast from "react-hot-toast"

export function WithAuth<T>(Component: React.ComponentType<T>, Roles: string[]) {


    return function withAuthComponent(props: any) {

        const router = useRouter()

        useEffect(() => {

            const token = Cookies.get("access_token")
            const { valid, role } = Parsetoken(token ?? '')

            if (!valid || !Roles.includes(role ?? '')) {

                toast.error("Please login for your request")

                Cookies.remove('access_token')
                localStorage.removeItem('user')

                router.replace('/auth/login')
                return
            }
        }, [])

        //logics
        return <Component {...props} />
    }
}