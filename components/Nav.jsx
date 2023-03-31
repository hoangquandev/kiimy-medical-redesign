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
                    <div className='w-24'>
                       <Link href={'/'}>
                       <Image
                            src={logo}
                            alt='logo'
                            width={'100%'}
                        /></Link>
                    </div>
                    <div className='cursor-pointer' onClick={() => setNavOpen(!navOpen)}>
                        <div className={navOpen ?
                            'relative w-[44px] h-[44px] cursor-pointer rounded-full duration-[0.3s] ease hover:bg-[#efc5c5] bg-[#efc5c5] p-[2.4em]'
                            : 'relative w-[44px] h-[44px] cursor-pointer rounded-full duration-[0.3s] ease hover:bg-[#efc5c5] p-[2.4em]'
                        }>
                            <span className={navOpen ?
                                'mx-auto absolute block w-[24px] h-[2px] rounded-[10px] bg-slate-500 left-0 right-0 top-[2.35em] rotate-[135deg] transition-all duration-[0.4s]'
                                : 'mx-auto absolute block w-[24px] h-[2px] rounded-[10px] bg-slate-500 left-0 right-0 top-[2.2em] rotate-0 transition-all duration-[0.4s]'}
                            ></span>
                            <span className={navOpen ?
                                'mx-auto absolute block w-[24px] h-[2px] rounded-[10px] bg-slate-500 left-0 right-0 bottom-[2.35em] rotate-[225deg] transition-all duration-[0.4s]'
                                : 'mx-auto absolute block w-[24px] h-[2px] rounded-[10px] bg-slate-500 left-0 right-0 bottom-[2.2em] rotate-0 transition-all duration-[0.4s]'}></span>
                        </div>
                    </div>
                </div>
                <div className='fixed bg-[#efc5c5] z-[-2] top-[-100%] left-0 w-full h-screen overflow-hidden p-16 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]'
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
                                className='relative group text-8xl top-0 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]' style={{
                                    top: navOpen ? "0" : "120px",
                                    transitionDelay: navOpen ? "0.8s" : "0s"
                                }}
                            >
                                <span className='inline-block group-hover:rotate-12 duration-300'>H</span>
                                <span className='inline-block group-hover:rotate-12 duration-300'>o</span>
                                <span className='inline-block group-hover:rotate-12 duration-300'>m</span>
                                <span className='inline-block group-hover:rotate-12 duration-300'>e</span>
                            </Link>
                            {/* </div> */}
                            <div className='after:content-[""] after:absolute after:top-[120px] after:left[-10%] after:w-[120%] after:h-[100%] after:bg-[#efc5c5] after:mx-auto'></div>
                        </li>
                        <li className='list-none relative ' >
                            {/* <div > */}
                            <Link href={"/product"}
                                onClick={() => setNavOpen(!navOpen)}
                                className='relative group text-8xl top-0 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]' style={{
                                    top: navOpen ? "0" : "120px",
                                    transitionDelay: navOpen ? "1s" : "0s"
                                }}
                            >
                                <span className='inline-block group-hover:rotate-12 duration-300'>S</span>
                                <span className='inline-block group-hover:rotate-12 duration-300'>h</span>
                                <span className='inline-block group-hover:rotate-12 duration-300'>o</span>
                                <span className='inline-block group-hover:rotate-12 duration-300'>p</span>
                            </Link>
                            {/* </div> */}
                            <div className='after:content-[""] after:absolute after:top-[120px] after:left[-10%] after:w-[120%] after:h-[100%] after:bg-[#efc5c5] after:mx-auto'></div>
                        </li>
                        <li className='list-none relative ' >
                            {/* <div > */}
                            <Link href={"/about"}
                                onClick={() => setNavOpen(!navOpen)}
                                className='relative group text-8xl top-0 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]' style={{
                                    top: navOpen ? "0" : "120px",
                                    transitionDelay: navOpen ? "1.2s" : "0s"
                                }}
                            >
                                 <span className='inline-block group-hover:rotate-12 duration-300'>A</span>
                                <span className='inline-block group-hover:rotate-12 duration-300'>b</span>
                                <span className='inline-block group-hover:rotate-12 duration-300'>o</span>
                                <span className='inline-block group-hover:rotate-12 duration-300'>u</span>
                                <span className='inline-block group-hover:rotate-12 duration-300'>t</span>
                            </Link>
                            {/* </div> */}
                            <div className='after:content-[""] after:absolute after:top-[120px] after:left[-10%] after:w-[120%] after:h-[100%] after:bg-[#efc5c5] after:mx-auto'></div>
                        </li>
                        <li className='list-none relative ' >
                            {/* <div > */}
                            <Link href={"/contact"}
                                onClick={() => setNavOpen(!navOpen)}
                                className='relative group text-8xl top-0 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]' style={{
                                    top: navOpen ? "0" : "120px",
                                    transitionDelay: navOpen ? "1.4s" : "0s"
                                }}
                            >
                                 <span className='inline-block group-hover:rotate-12 duration-300'>C</span>
                                <span className='inline-block group-hover:rotate-12 duration-300'>o</span>
                                <span className='inline-block group-hover:rotate-12 duration-300'>n</span>
                                <span className='inline-block group-hover:rotate-12 duration-300'>t</span>
                                <span className='inline-block group-hover:rotate-12 duration-300'>a</span>
                                <span className='inline-block group-hover:rotate-12 duration-300'>c</span>
                                <span className='inline-block group-hover:rotate-12 duration-300'>t</span>
                            </Link>
                            {/* </div> */}
                            <div className='after:content-[""] after:absolute after:top-[120px] after:left[-10%] after:w-[120%] after:h-[100%] after:bg-[#efc5c5] after:mx-auto'></div>
                        </li>
                    </ul>
                    <div className='absolute w-full bottom-0 left-0 p-[2em] flex justify-between'>
                        <div className='relative bottom-[-20px] opacity-0 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1] font-sans uppercase'>
                            <span>vietnam</span>
                        </div>
                        <div className='nav-social-media'>
                            <ul className='flex'>
                                <li className='list-none'>
                                    <a href="#" className='relative bottom-[20px] no-underline font-sans  uppercase pl-[2em] opacity-0 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1]'>Facebook</a>
                                </li>
                                <li className='list-none'>
                                    <a href="#" className='relative bottom-[20px] no-underline font-sans  uppercase pl-[2em] opacity-0 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1]'>instagram</a>
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