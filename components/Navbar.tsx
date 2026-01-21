import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hexagon, CircuitBoard } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: '首页', path: '/' },
        { name: '产品中心', path: '/products' },
        { name: '应用领域', path: '/applications' },
        { name: '关于我们', path: '/about' },
        { name: '联系支持', path: '/contact' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${
            scrolled 
                ? 'bg-slate-900/95 backdrop-blur-md border-slate-800 shadow-lg shadow-slate-900/20' 
                : 'bg-slate-900 border-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="relative">
                                {/* Logo updated for dark background */}
                                <Hexagon className="h-10 w-10 text-techBlue-500 fill-slate-900 stroke-techBlue-500 group-hover:fill-slate-800 transition-colors shadow-sm rounded-full" strokeWidth={1.5} />
                                <CircuitBoard className="h-6 w-6 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <span className="font-bold text-2xl tracking-[0.22em] text-white leading-none group-hover:text-techBlue-400 transition-colors">
                                    景贤<span className="text-techBlue-500">科技</span>
                                </span>
                                <span className="text-[9px] text-slate-400 uppercase tracking-[0.14em] font-mono mt-1 font-semibold whitespace-nowrap">
                                    - JINGXIAN TECH -
                                </span>
                            </div>
                        </Link>
                    </div>
                    
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                                        isActive(link.path)
                                            ? 'text-white bg-slate-800 border border-slate-700'
                                            : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none border border-slate-700"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900 border-b border-slate-800 shadow-xl">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-3 rounded-md text-base font-medium border-l-4 ${
                                    isActive(link.path)
                                        ? 'text-white bg-slate-800 border-techBlue-500'
                                        : 'text-slate-300 hover:text-white hover:bg-slate-800 border-transparent'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;