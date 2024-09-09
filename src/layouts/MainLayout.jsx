import React from 'react'
import Navbar from '../home/navBar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../home/footer/Footer'

export default function MainLayout() {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}
