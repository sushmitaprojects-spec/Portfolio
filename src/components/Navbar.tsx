import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects' },
        { name: 'About me', href: '/#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            {/* Logo - Independent Key Visual */}
            <div className="absolute top-6 left-6 md:top-8 md:left-8 z-50 animate-in fade-in slide-in-from-top-4 duration-700 cursor-pointer group">
                <div className="flex items-center gap-1.5 leading-none">
                    <span className="text-xl md:text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-amber-50">
                        Sushmita
                    </span>
                    <span className="text-xl md:text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-amber-50">
                        Projects
                    </span>
                </div>
            </div>

            {/* Desktop Navigation - Centered & Floating */}
            <nav className="absolute top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block animate-in fade-in slide-in-from-top-8 duration-700 delay-100">
                <ul className="flex items-center px-8 py-3.5 gap-8 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:border-white/20 transition-all duration-300">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.href}
                                className="group relative text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 px-2 py-1"
                            >
                                {item.name}
                                <span className="absolute left-1/2 -bottom-0.5 w-1/2 h-px bg-white -translate-x-1/2 scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ease-out origin-center" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="absolute top-6 right-6 z-50 md:hidden text-white w-10 h-10 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-sm border border-white/10 focus:outline-none"
                aria-label="Toggle menu"
            >
                <div className="w-5 h-4 flex flex-col justify-between relative">
                    <span className={`block w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                    <span className={`block w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </div>
            </button>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
            >
                {/* Backdrop */}
                <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />

                {/* Menu Content */}
                <nav className="relative h-full flex flex-col items-center justify-center space-y-8 p-6">
                    {navItems.map((item, index) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-3xl font-bold text-white/90 hover:text-white tracking-wide transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            style={{ transitionDelay: `${100 + index * 100}ms` }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Navbar;
