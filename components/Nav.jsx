import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '../public/logo.png'

const Nav = () => {
    const [navOpen, setNavOpen] = useState(false)

    return (
        <div className='fixed z-10'>
            <div className='nav-container'>
                <div className='fixed top-0 left-0 w-full flex justify-between items-center px-8'>
                    <div className='w-48'>
                        <Image
                            src={logo}
                            alt='logo'
                            width={'100%'}
                        />
                    </div>
                    <div className='cursor-pointer' onClick={() => setNavOpen(!navOpen)}>
                        <div className={navOpen ?
                            'relative w-[44px] h-[44px] cursor-pointer rounded-full duration-[0.3s] ease hover:bg-[#f9f1f0] bg-[#f9f1f0] p-[2.4em]'
                            : 'relative w-[44px] h-[44px] cursor-pointer rounded-full duration-[0.3s] ease hover:bg-[#f9f1f0] p-[2.4em]'
                        }>
                            <span className={navOpen ?
                                'mx-auto absolute block w-[24px] h-[2px] rounded-[10px] bg-white left-0 right-0 top-[2.35em] rotate-[135deg] transition-all duration-[0.4s]'
                                : 'mx-auto absolute block w-[24px] h-[2px] rounded-[10px] bg-slate-500 left-0 right-0 top-[2.2em] rotate-0 transition-all duration-[0.4s]'}
                            ></span>
                            <span className={navOpen ?
                                'mx-auto absolute block w-[24px] h-[2px] rounded-[10px] bg-white left-0 right-0 bottom-[2.35em] rotate-[225deg] transition-all duration-[0.4s]'
                                : 'mx-auto absolute block w-[24px] h-[2px] rounded-[10px] bg-slate-500 left-0 right-0 bottom-[2.2em] rotate-0 transition-all duration-[0.4s]'}></span>
                        </div>
                    </div>
                </div>
                <div className='fixed bg-[#f9f1f0] z-[-2] top-[-100%] left-0 w-full h-screen overflow-hidden p-16 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]'
                    style={{
                        top: navOpen ? '0' : '-100%',
                        transitionDelay: navOpen ? "0s" : "0s"
                    }}
                >
                    <ul className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-0 p-0 flex flex-col justify-center items-center'>
                        <li className='list-none relative ' >
                            {/* <div > */}
                            <Link href={"/"}
                                onClick={() => setNavOpen(!navOpen)}
                                className='relative text-white text-8xl top-0 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]' style={{
                                    top: navOpen ? "0" : "120px",
                                    transitionDelay: navOpen ? "0.8s" : "0s"
                                }}
                            >
                                Home
                            </Link>
                            {/* </div> */}
                            <div className='after:content-[""] after:absolute after:top-[120px] after:left[-10%] after:w-[120%] after:h-[100%] after:bg-[#f9f1f0] after:mx-auto'></div>
                        </li>
                        <li className='list-none relative ' >
                            {/* <div > */}
                            <Link href={"/product"}
                                onClick={() => setNavOpen(!navOpen)}
                                className='relative text-white text-8xl top-0 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]' style={{
                                    top: navOpen ? "0" : "120px",
                                    transitionDelay: navOpen ? "1s" : "0s"
                                }}
                            >
                                Shop
                            </Link>
                            {/* </div> */}
                            <div className='after:content-[""] after:absolute after:top-[120px] after:left[-10%] after:w-[120%] after:h-[100%] after:bg-[#f9f1f0] after:mx-auto'></div>
                        </li>
                        <li className='list-none relative ' >
                            {/* <div > */}
                            <Link href={"/about"}
                                onClick={() => setNavOpen(!navOpen)}
                                className='relative text-white text-8xl top-0 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]' style={{
                                    top: navOpen ? "0" : "120px",
                                    transitionDelay: navOpen ? "1.2s" : "0s"
                                }}
                            >
                                About
                            </Link>
                            {/* </div> */}
                            <div className='after:content-[""] after:absolute after:top-[120px] after:left[-10%] after:w-[120%] after:h-[100%] after:bg-[#f9f1f0] after:mx-auto'></div>
                        </li>
                        <li className='list-none relative ' >
                            {/* <div > */}
                            <Link href={"/contact"}
                                onClick={() => setNavOpen(!navOpen)}
                                className='relative text-white text-8xl top-0 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]' style={{
                                    top: navOpen ? "0" : "120px",
                                    transitionDelay: navOpen ? "1.4s" : "0s"
                                }}
                            >
                                Contact
                            </Link>
                            {/* </div> */}
                            <div className='after:content-[""] after:absolute after:top-[120px] after:left[-10%] after:w-[120%] after:h-[100%] after:bg-[#f9f1f0] after:mx-auto'></div>
                        </li>
                    </ul>
                    <div className='absolute w-full bottom-0 left-0 p-[2em] flex justify-between'>
                        <div className='relative bottom-[-20px] opacity-0 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1] font-sans uppercase'>
                            <span>vietnam</span>
                        </div>
                        <div className='nav-social-media'>
                            <ul className='flex'>
                                <li className='list-none'>
                                    <a href="#" className='relative bottom-[20px] no-underline font-sans text-white uppercase pl-[2em] opacity-0 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1]'>Facebook</a>
                                </li>
                                <li className='list-none'>
                                    <a href="#" className='relative bottom-[20px] no-underline font-sans text-white uppercase pl-[2em] opacity-0 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1]'>instagram</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav