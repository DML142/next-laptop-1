'use client';

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NavLink = ({ href, name }: { href: string; name: string }) => {
    return <Link href={href}>{name}</Link>
}

const Navbar = () => {
    const [visible, setVisible] = useState(true);
    const lastScrollY = useRef(0);

    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            if(currentScroll > lastScrollY.current && currentScroll > 50) {
                setVisible(false);
            } else {
                setVisible(true);
            }
            lastScrollY.current = currentScroll;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);
    

    return (
        <main className={`mx-auto w-full max-w-7xl px-10 py-3 font-inter fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
            <nav className="flex w-full items-center justify-between border-white/50 bg-white/5 border-2 rounded-full py-3 px-10 z-50 backdrop-blur-lg">
                <div className="w-full">
                    <div className="md:flex hidden items-center gap-3 w-full">
                        <NavLink href="/" name="Home" />
                        <NavLink href="/" name="About" />
                        <NavLink href="/" name="Services" />
                        <NavLink href="/" name="Contact" />
                    </div>
                    <div className="md:hidden flex">
											{expanded ? <X onClick={() => setExpanded(!expanded)} className="md:cursor-pointer" /> 
											: <Menu onClick={() => setExpanded(!expanded)} className="md:cursor-pointer" />}
                        
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <Link href='/' className="font-bold text-lg">DEMOLOV</Link>
                </div>
                <div className="w-full" />
            </nav>
						{/* Mobile menu */}
						<div className={`md:hidden flex w-full items-center justify-between border-white/50 bg-white/5 border-2 rounded-full py-3 px-10 z-50 backdrop-blur-lg mt-5 transition-all duration-300
							${expanded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}>
								<NavLink href="/" name="Home" />
								<NavLink href="/" name="About" />
								<NavLink href="/" name="Services" />
								<NavLink href="/" name="Contact" />
						</div>
        </main>
    )
}

export default Navbar;