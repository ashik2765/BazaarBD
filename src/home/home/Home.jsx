import React from 'react'
import Navbar from '../navBar/Navbar'
import Banner from './Banner'
import OrderProcess from '../orderProcess/OrderProcess'

export default function Home() {
    return (
        <>
            <Banner></Banner>
            <OrderProcess></OrderProcess>
        </>
    )
}
