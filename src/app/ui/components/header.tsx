'use client';

import { usePathname} from 'next/navigation';
import { useState } from 'react';
import Image from "next/image";
import Logo from "../../../../public/android-chrome-512x512.png";
import Link from "next/link";

export default function Header() {
    const pathname = usePathname();
    const [showNavbar, setShowNavbar] = useState('');
    
    const toggleNavbar = () => {
        let navbar = '';
        if (showNavbar === '') {
            navbar = 'in';
        }
        setShowNavbar(navbar);
    };

    return (
        <div id="navigation" className="menu-two">
            <div className="navbar navbar-expand-lg">
                <div className="navbar-header">
                <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
                    <span className="navbar-toggler-icon"><i className="fa fa-align-justify"></i></span>
                </button>
                <div className="navbar-brand logo">
                    <Link href="/">
                        <Image className="img-fluid" src={Logo} alt="Logo" width={60} height={50}/>
                    </Link>
                </div>
                </div>
                <div id="navbar-collapse" className={`collapse navbar-collapse ${showNavbar}`}>
                    <nav id="mainmenu">
                        <ul className="nav navbar-nav">
                            <li className={`${['/'].includes(pathname) ? 'current' : ''}`}>
                                <Link href="/">About</Link>
                                {/* <a href="index-two.html#home-banner">Profile</a> */}
                            </li>
                            <li className={`${['/experience'].includes(pathname) ? 'current' : ''}`}>
                                <Link href="experience">Experience</Link>
                            </li>
                            <li className={`${['/education'].includes(pathname) ? 'current' : ''}`}>
                                <Link href="education">Education</Link>
                            </li>
                            <li className={`${['/skills'].includes(pathname) ? 'current' : ''}`}>
                                <Link href="skills">Skills</Link>
                            </li>
                            <li className={`${['/portfolio'].includes(pathname) ? 'current' : ''}`}>
                                <Link href="portfolio">Portfolio</Link>
                            </li>
                            {/* <li className={`${['/contact'].includes(pathname) ? 'current' : ''}`}>
                                <Link href="contact">Contact</Link>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}