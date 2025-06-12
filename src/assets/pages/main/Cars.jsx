import React, { useState, useEffect, useRef } from "react";
import { FaCar, FaDoorOpen, FaCogs, FaGasPump, FaArrowLeft, FaArrowRight, FaTachometerAlt } from "react-icons/fa";
import { cars } from '../../data/cars.data.js'
import { Link } from "react-router-dom";

export default function Cars() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [startX, setStartX] = useState(null);
    const slideInterval = useRef(null);

    useEffect(() => {
        if (!isPaused) {
            slideInterval.current = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % cars.length);
            }, 4000);
        }
        return () => clearInterval(slideInterval.current);
    }, [isPaused]);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + cars.length) % cars.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % cars.length);
    };

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    const handleMouseDown = (e) => setStartX(e.clientX);

    const handleMouseUp = (e) => {
        if (startX === null) return;
        const endX = e.clientX;
        if (startX - endX > 50) handleNext();
        else if (endX - startX > 50) handlePrev();
        setStartX(null);
    };

    return (
        <div id="cars" className="min-h-screen pt-10 pb-20">
            <div className="container space-y-10">
                <div className="text-center">
                    <span className="text-[10px] md:text-xs text-textOrange tracking-widest capitalize">cars</span>
                    <h1 className="text-2xl md:text-3xl text-textWhite tracking-wider font-semibold capitalize">Our car fleet</h1>
                </div>
                <div className="group relative rounded-3xl overflow-hidden shadow-2xl">
                    {/* Slider Frame */}
                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        className="relative h-[28rem] cursor-grab active:cursor-grabbing select-none"
                    >
                        {cars.map((car, index) => (
                            <img
                                key={index}
                                src={car.mainImage}
                                alt={`Car ${index + 1}`}
                                className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out rounded-t-3xl ${index === currentIndex ? "opacity-100 scale-100 z-10" : "opacity-0 scale-110 z-0"
                                    }`}
                            />
                        ))}

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent z-20 rounded-t-3xl"></div>

                        {/* Arrows */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-5 top-1/2 transform -translate-y-1/2 z-30 bg-background/60 md:bg-background text-primary p-3 rounded-full opacity-100 md:opacity-0 group-hover:opacity-100 transition shadow-lg hover:scale-110"
                        >
                            <FaArrowLeft size={20} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-5 top-1/2 transform -translate-y-1/2 z-30 bg-background/60 md:bg-background text-primary p-3 rounded-full opacity-100 md:opacity-0 group-hover:opacity-100 transition shadow-lg hover:scale-110"
                        >
                            <FaArrowRight size={20} />
                        </button>
                    </div>

                    {/* Details Bar */}
                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="bg-background text-primary px-6 py-5 rounded-b-3xl flex flex-col md:flex-row justify-between items-center text-sm gap-4 shadow-lg backdrop-blur-sm mt-2"
                    >
                        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm md:text-base md:justify-start capitalize">
                            <div className="flex items-center gap-2">
                                <FaCar className="text-accent" />
                                <span className="font-medium">{cars[currentIndex].model}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaDoorOpen className="text-accent" />
                                <span className="font-medium">{cars[currentIndex].doors} doors</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCogs className="text-accent" />
                                <span className="font-medium">{cars[currentIndex].engine_type}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaTachometerAlt className="text-accent" />
                                <span className="font-medium">{cars[currentIndex].average_kmpl}</span>
                            </div>
                        </div>
                        <Link to={`/car-details?car=${currentIndex}`} className="bg-textOrange/80 hover:bg-textOrange active:scale-95 text-secondary font-semibold px-6 py-3 rounded-full transition shadow-md cursor-pointer">
                            More Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
