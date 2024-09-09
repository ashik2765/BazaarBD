import React from 'react'

export default function Footer() {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
                <span className="footer-title">Services</span>
                <a href="/" className="link link-hover">Branding</a>
                <a href="/" className="link link-hover">Design</a>
                <a href="/" className="link link-hover">Marketing</a>
                <a href="/" className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a href="/about" className="link link-hover">About us</a>
                <a href="/contact" className="link link-hover">Contact</a>
                <a href="/careers" className="link link-hover">Careers</a>
                <a href="/press" className="link link-hover">Press</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a href="/terms" className="link link-hover">Terms of use</a>
                <a href="/privacy" className="link link-hover">Privacy policy</a>
                <a href="/cookie" className="link link-hover">Cookie policy</a>
            </div>
            <div>
                <span className="footer-title">Follow Us</span>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                            <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.916 4.916 0 00-8.388 4.482A13.938 13.938 0 011.671 3.149a4.916 4.916 0 001.523 6.557 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.928 4.928 0 01-2.224.084c.623 1.943 2.432 3.355 4.576 3.397A9.867 9.867 0 010 21.54a13.9 13.9 0 007.548 2.212c9.057 0 14.009-7.514 14.009-14.009 0-.213-.005-.426-.014-.637A10.012 10.012 0 0024 4.557z"></path>
                        </svg>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                            <path d="M19.615 3.184C21.234 3.815 21.997 5.215 22 7.284 22.002 9.353 22 11.422 22 13.491 22 15.561 22.002 17.63 22 19.699 21.997 21.769 21.234 23.168 19.615 23.799 17.997 24.429 15.683 24.431 12.001 24.431 8.318 24.431 6.004 24.429 4.385 23.799 2.767 23.168 2.004 21.769 2.001 19.699.002 17.63.002 15.561.001 13.491 0 11.422.001 9.353 2.003 7.284 2.004 5.215 2.767 3.815 4.385 3.184 6.004 2.554 8.318 2.552 12 2.552c3.683 0 5.997-.002 7.615.631zM9.548 17.653l8.106-4.154-8.106-4.153v8.307z"></path>
                        </svg>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.414c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.917c-1.504 0-1.794.715-1.794 1.762v2.309h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.593 1.325-1.324V1.325C24 .593 23.407 0 22.675 0z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}
