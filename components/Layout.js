import React from 'react'
import Navbar from './Navbar'
import { useRouter } from 'next/router'


const Layout = ({children}) => {
    const router = useRouter();
    const routeControl = router.route !== "/login";
    return (
        <>
        {routeControl && <Navbar />}
        <main className={routeControl && "mt-32"}>
            {children}
        </main>
        </>
        
    )
}

export default Layout
