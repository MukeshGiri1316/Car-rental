import React, { useState } from "react";
import {
    FaCarSide, FaTachometerAlt, FaGasPump, FaDoorClosed, FaCogs,
    FaHorseHead, FaPaintBrush, FaOilCan, FaMapMarkerAlt
} from "react-icons/fa";
import { cars } from '../../data/cars.data.js'
import { Link, useLocation } from "react-router-dom";
import Contact from './Contact.jsx'

const CarDetails = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('car');
    console.log(id)
    const car = cars[id];
    const [mainImage, setMainImage] = useState(car.mainImage);
    const [thumbnails, setThumbnails] = useState(car.images);

    const handleImageClick = (clickedImage) => {
        if (clickedImage === mainImage) return;
        const newThumbs = thumbnails.map((img) =>
            img === clickedImage ? mainImage : img
        );
        setMainImage(clickedImage);
        setThumbnails(newThumbs);
    };

    return (
        <div className="text-primary min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-primary text-textWhite h-[70vh] md:h-[80vh] flex flex-col items-center justify-center space-y-5">
                <div className="absolute top-5 left-2 md:left-10 z-10 font-bold tracking-wide">
                    <span className="text-xl md:text-4xl text-textOrange">MyLogo</span>
                </div>
                <div className="absolute inset-0 bg-black/50" />
                <img
                    src={car.mainImage}
                    alt="Hero Car"
                    className="absolute inset-0 object-fill w-full h-full opacity-30"
                />
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-textWhite mb-4 drop-shadow">
                        Experience the Drive
                    </h1>
                    <p className="text-base md:text-2xl font-semibold tracking-widest mx-auto drop-shadow p-font">
                        Premium cars. Hassle-free rentals. Drive your dream today.
                    </p>
                </div>
                <div className="relative z-10 text-base md:text-xl font-semibold flex space-x-4 text-textWhite px-4 py-1 rounded-xl bg-accent/40">
                    <Link to='/' className="p-font tracking-wider text-blue-400">Home</Link>
                    <span className="text-xl md:text-2xl">/</span>
                    <span className="p-font tracking-wider cursor-pointer">car-details</span>
                </div>
            </section>

            {/* Car Details Section */}
            <section className="py-10 md:py-20">
                <div className="container grid md:grid-cols-2 gap-10">
                    {/* Left: Image Viewer */}
                    <div className="rounded-xl overflow-hidden py-4 flex flex-col justify-around">
                        <div className="w-full h-[70%] mb-6 rounded-xl border-4 border-accent overflow-hidden">
                            <img
                            src={mainImage}
                            alt="Main Car"
                            className="w-full h-full object-containtransition-transform duration-300 hover:scale-105 rounded-xl"
                        />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {thumbnails.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Thumb ${index}`}
                                    className={`w-full h-24 object-cover rounded-lg cursor-pointer border-2 
                                    ${img === mainImage ? 'border-textOrange' : 'border-accent'} 
                                    hover:scale-105 transition-transform duration-200`}
                                    onClick={() => handleImageClick(img)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right: Details */}
                    <div className="space-y-6 py-4">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-textOrange tracking-wide">
                                {car.brand} {car.model}
                            </h2>
                            <p className="text-secondary text-base mt-2">{car.description}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Detail icon={<FaCarSide />} label="Brand" value={car.brand} />
                            <Detail icon={<FaMapMarkerAlt />} label="Model" value={car.model} />
                            <Detail icon={<FaPaintBrush />} label="Color" value={car.color} />
                            <Detail icon={<FaDoorClosed />} label="Doors" value={car.doors} />
                            <Detail icon={<FaGasPump />} label="Fuel" value={car.fuel_type} />
                            <Detail icon={<FaTachometerAlt />} label="Top Speed" value={car.top_speed_kmph} />
                            <Detail icon={<FaCogs />} label="Engine" value={car.engine_type} />
                            <Detail icon={<FaHorseHead />} label="Horse Power" value={car.horsepower_hp} />
                            <Detail icon={<FaOilCan />} label="Cylinders" value={car.cylinders} />
                            <Detail icon={<FaTachometerAlt />} label="Average" value={car.average_kmpl} />
                        </div>
                    </div>
                </div>
            </section>
            <Contact/>
        </div>
    );
};

const Detail = ({ icon, label, value }) => (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-background">
        <div className="text-accent text-lg lg:text-2xl">{icon}</div>
        <div>
            <div className="text-[10px] lg:text-sm font-semibold text-secondary tracking-wide">{label}</div>
            <div className="text-primary p-font capitalize font-semibold text-base md:text-lg">{value}</div>
        </div>
    </div>
);

export default CarDetails;

