import NavBar from '@/components/layout/navbar'
import React, { ReactNode } from 'react'

function Layout({ children }: { children: ReactNode }) {
    return (


        <main>

            <NavBar />
            {children}
            
        </main>
    )
}

export default Layout