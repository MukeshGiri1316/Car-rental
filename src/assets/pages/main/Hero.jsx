import { useEffect, useState } from 'react';
import { SiInstagram, SiWhatsapp, SiFacebook } from 'react-icons/si';

const slides = [
    {
        image: '/images/car1.jpg',
        text: 'Drive the luxury you deserve. Premium cars at affordable rates.',
    },
    {
        image: '/images/car2.jpg',
        text: 'Experience comfort and style in every ride. Your journey, upgraded.',
    },
    {
        image: '/images/car3.jpeg',
        text: 'Your ride, your rules. Book anytime, anywhere with us.',
    },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrent(prev => (prev + 1) % slides.length);
                setFade(true);
            }, 500); // match fade-out duration
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const goToSlide = index => {
        setFade(false);
        setTimeout(() => {
            setCurrent(index);
            setFade(true);
        }, 300);
    };

    return (
        <section className="relative h-[70vh] md:h-screen w-full overflow-hidden bg-background text-background">
            {/* Background Images */}
            {slides.map((slide, index) => (
                <img
                    key={index}
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                />
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 z-20" />

            {/* Content */}
            <div className="relative z-30 max-w-7xl mx-auto h-full flex items-center justify-between px-6 md:px-12 mt-10 md:mt-0">
                {/* Social Icons */}
                <div className="hidden md:flex flex-col gap-5 text-textWhite">
                    <a href="#"><SiInstagram className="hover:text-textOrange transition duration-300" size={24} /></a>
                    <a href="#"><SiWhatsapp className="hover:text-textOrange transition duration-300" size={24} /></a>
                    <a href="#"><SiFacebook className="hover:text-textOrange transition duration-300" size={24} /></a>
                </div>

                {/* Text Block with Smooth Fade */}
                <div className='flex flex-col space-y-10 md:space-y-5 px-0 sm:px-20 md:px-0'>
                    <div className="max-w-xl text-textWhite transition-opacity duration-500"
                        style={{ opacity: fade ? 1 : 0 }}>
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-normal tracking-wider">
                            {slides[current].text}
                        </h1>
                    </div>
                    <button className="bg-accent text-primary font-semibold text-sm md:text-base px-6 py-3 rounded-xl hover:bg-secondary hover:text-background transition duration-300 cursor-pointer tracking-wide w-fit">
                        Book a Ride
                    </button>
                </div>

                {/* Manual Controls */}
                <div className="hidden md:flex gap-3 absolute bottom-12 right-12 z-40">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-4 h-4 rounded-full border-2 ${index === current ? 'bg-textOrange border-textOrange' : 'border-textOrange'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
