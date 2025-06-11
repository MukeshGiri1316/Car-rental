import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [showFixed, setShowFixed] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowFixed(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['About', 'Book a Ride', 'Cars', 'Services'];

    const HeaderBase = ({ fixed = false }) => (
        <div className={`py-3 w-full transition-all duration-500 ease-in-out fixed top-0 left-0 z-80 ${fixed
            ? 'shadow-md translate-y-0 opacity-100 bg-secondary'
            : 'bg-transparent'
            }`}>
            <header
                className='container py-3 flex items-center justify-between'
            >
                <div className="text-2xl font-bold text-textOrange">MyLogo</div>
                <nav className="hidden md:flex items-center justify-end space-x-1 lg:space-x-4 text-base tracking-wider">
                    {navLinks.map(link => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                            className={`w-fit px-6 py-1 relative p-font text-sm lg:text-base font-extrabold text-textWhite hover:text-textOrange transition before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:border before:border-textOrange before:rounded-xl before:opacity-0 hover:before:opacity-100 hover:before:w-full text-center before:duration-300 before:z-10`}
                        >
                            <span className='relative z-20'>{link}</span>
                        </a>
                    ))}
                </nav>
                {/* Mobile Menu Icon Placeholder */}
                <button
                    className={`md:hidden text-background fixed top-5 right-5 z-100`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <Menu size={24} />
                </button>
            </header>
        </div>
    );

    return (
        <>
            <HeaderBase />
            {/* Animated fixed header with transition */}
            <div
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out transform ${showFixed ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                    }`}
            >
                <HeaderBase fixed />
            </div>
            {/* Overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 md:hidden"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 z-90 h-full w-64 bg-primary text-background shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <button
                    className={`md:hidden text-background fixed top-5 right-5 z-100`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <X size={24} />
                </button>
                <div className="flex justify-between items-center px-4 py-4 border-b border-secondary">
                    <span className="text-lg font-bold text-accent">Menu</span>
                </div>
                <nav className="flex flex-col space-y-4 p-4">
                    {navLinks.map(link => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                            className="hover:text-accent text-textWhite tracking-wider"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
}
