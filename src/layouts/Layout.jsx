import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Hero } from '../components/shared/Hero'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {/* <Hero /> */}
            {children}
            <Footer />
        </>
    )
}

export default Layout