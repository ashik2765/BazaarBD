import React from 'react'

export default function Banner() {
    return (
        <div className="navbar bg-base-100 shadow-lg px-4">
            <div className="flex-1">
                <a href="/" className="text-xl font-bold text-primary">
                    BazaarBD
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="/">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li>
                        <a href="/cart" className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h14l1.2-6H6.4M7 13l-2 9M10 19a1 1 0 100-2 1 1 0 000 2zM20 19a1 1 0 100-2 1 1 0 000 2z"></path></svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
