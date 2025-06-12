'use client'

import NavBar from '@/components/layout/navbar'
import React, { ReactNode } from 'react'
import { WithAuth } from '../../components/auth/withAuth'

function Layout({ children }: { children: ReactNode }) {
    return (


        <main >

            <NavBar />
            {children}

        </main>
    )
}

export default WithAuth(Layout, ["Admin", "User"])