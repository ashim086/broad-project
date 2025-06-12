'use client'

import { ReactNode } from "react"
import { WithAuth } from "../../components/auth/withAuth"

const Layout = ({ children }: { children: ReactNode }) => {

    return (
        <>
            {children}
        </>

    )
}

export default WithAuth(Layout, ["Admin"])