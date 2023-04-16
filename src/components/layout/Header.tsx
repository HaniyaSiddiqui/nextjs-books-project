'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Wrapper from '@/components/shared/Wrapper';
import Logo from "/public/logo.svg";


interface Logo {
    src: string
    alt: string
}

type Tab = {
    href: string
    title: string
}

type Tabs = Tab[]
const Header = () => {
    const [tabs, setTabs] = useState<Tab[]>([])
    const [logo, setLogo] = useState<Logo>({ src: '/', alt: '' })
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const url = 'http://localhost:3000/api/data';

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);


            setTabs(data.tabs)
            setLogo(data.logo)
        }
        fetchData();
    }, [])


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className=" h-20  sticky z-0 inset-0 backdrop-blur-md py-3 bg-primary bg-opacity-90 ">
            <Wrapper>
                <div className="  top-0 max-w-screen-2.5xl mx-auto px-4 w-full flex justify-between css-0">
                    <Image src={logo.src} alt={logo.alt} width={200} height={64} />
                    <ul className="hidden   md:flex h-full items-center duration-300 py-4 gap-x-4 sm:gap-x-8 text-20 text-gray-100">
                        {tabs.map((tab) => (
                            <li key={tab.href}>
                                <Link href={tab.href} className="font-semibold text-lg text-gray-800 hover:text-hover">
                                    {tab.title}

                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className=" right-0 pr-10 fixed md:hidden " onClick={toggleMenu}>
                        <svg
                            className="w-10 h-10 fill-current text-active"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z"
                            />
                        </svg>
                    </button>
                </div>
                {/* Mobile menu toggle */}

                <div className="md:hidden">
                    <div
                        className="fixed top-0 left-0 w-full h-full   z-40"
                        onClick={toggleMenu}
                    >

                        <div
                            className={`fixed top-10 mt-10 pl-10 right-0 w-full h-auto bg-primary bg-opacity-90  overflow-auto transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                                }`}
                        >

                            {isMenuOpen && (
                                <ul className="py-4 list-none ">
                                    <li className="duration-300   py-4 ">

                                        {tabs &&
                                            tabs.map((tab) => (
                                                <Link href={tab.href} key={tab.title} className="block text-gray-800 text-lg font-semibold hover:text-hover py-3 ">
                                                    {tab.title}

                                                </Link>
                                            ))}
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </Wrapper >

        </header >
    )
}

export default Header