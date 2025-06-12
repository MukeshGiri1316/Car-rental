import React, { useEffect, useRef } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function BookForm() {

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5; // Slows video to 60% of normal speed
        }
    }, []);

    return (
        <div id="book-a-ride" className="min-h-[70vh] md:min-h-[100vh] py-10 flex items-center justify-center relative before:absolute before:top-0 before:left-0 before:w-full before:min-h-full before:bg-black/50 before:z-20">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                className="absolute top-0 z-10 w-full h-full object-fill"
            >
                <source
                    src="/images/form-bg.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

            <div className="container relative grid grid-cols-1 md:grid-cols-2 z-20">
                <div className="px-5 py-10 flex flex-col space-y-10">
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-textWhite tracking-wider">
                            Your Journey Begins Here
                        </h2>
                        <p className="text-textWhite/80 mt-2 tracking-widest text-[10px] md:text-sm pe-0 md:pe-20">
                            Book your dream ride now and make memories on every mile. Premium cars, effortless booking, and unbeatable value.
                        </p>
                    </div>
                    <div>
                        <ul className="space-y-2 text-textWhite tracking-widest text-xs  lg:text-base">
                            <li className="flex items-center gap-2"><FaPhoneAlt className="text-textOrange" /> +1 234 567 890</li>
                            <li className="flex items-center gap-2"><FaEnvelope className="text-textOrange" /> info@company.com</li>
                            <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-textOrange" /> 123 Main St, Los Angeles, CA</li>
                        </ul>
                    </div>
                </div>

                <form className="space-y-5 py-10 px-5 rounded-2xl p-font font-bold tracking-widest
                backdrop-blur-sm md:backdrop-blur-xl text-sm md:text-base">
                    <div>
                        <label htmlFor="name" className="block mb-1 text-textWhite">Full Name</label>
                        <input id="name" placeholder="John Doe" className="w-full p-2 text-white border-b border-textOrange outline-none" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-1 text-textWhite">Email</label>
                        <input id="email" type="email" placeholder="john@example.com" className="w-full p-2 text-white border-b border-textOrange outline-none" />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block mb-1 text-textWhite">Phone</label>
                        <input id="phone" type="tel" placeholder="(123) 456-7890" className="w-full p-2 text-white border-b border-textOrange outline-none" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="pickup-date" className="block mb-1 text-textWhite">Pick-Up Date</label>
                            <input id="pickup-date" type="date" className="w-full p-2 text-white border-b border-textOrange outline-none custom-date-picker" />
                        </div>
                        <div>
                            <label htmlFor="return-date" className="block mb-1 text-textWhite">Return Date</label>
                            <input id="return-date" type="date" className="w-full p-2 text-white border-b border-textOrange outline-none custom-date-picker" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="notes" className="block mb-1 text-textWhite">Special Requests</label>
                        <textarea id="notes" placeholder="Any preferences" className="w-full p-2 text-white border-b border-textOrange outline-none" />
                    </div>

                    <button type="submit" className="inline-block bg-accent text-primary px-6 py-3 rounded-xl hover:bg-background hover:text-black transition duration-300 cursor-pointer">
                        Book Now
                    </button>
                </form>
            </div>
        </div>
    );
}
