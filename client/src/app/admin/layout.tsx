'use client'

import { ReactNode } from "react"
import { WithAuth } from "../auth/withAuth"

const Layout = ({ children }: { children: ReactNode }) => {

    return (
        <>
            {children}
        </>

    )
}

export default WithAuth(Layout, ["Admin"])