import React from 'react'
import { FaCarSide, FaClock, FaMapMarkedAlt } from "react-icons/fa";

function Service() {
    return (
        <div id='services' className="py-10 md:py-20">
            <div className='container text-center'>
                <span className='text-textOrange tracking-widest text-[10px] md:text-xs'>Services</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-textWhite tracking-wider">Why Choose Us?</h2>
                <p className="text-base md:text-lg text-textWhite mb-10 p-font tracking-wider font-bold">
                    Our commitment to quality service, flexibility, and comfort ensures a smooth and memorable ride every time.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="border border-background rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
                        <FaCarSide className="text-4xl text-textOrange mb-4 mx-auto" />
                        <h3 className="text-textWhite mb-2 tracking-wider">Wide Range of Vehicles</h3>
                        <p className="text-textWhite/90 font-bold tracking-wider p-font">
                            From compact cars to luxury SUVs, we have the perfect vehicle for your needs and style.
                        </p>
                    </div>

                    <div className="border border-background rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
                        <FaClock className="text-4xl text-textOrange mb-4 mx-auto" />
                        <h3 className="text-textWhite mb-2 tracking-wider">24/7 Availability</h3>
                        <p className="text-textWhite/90 font-bold tracking-wider p-font">
                            We’re here whenever you need us—day or night. Your journey, on your schedule.
                        </p>
                    </div>

                    <div className="border border-background rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
                        <FaMapMarkedAlt className="text-4xl text-textOrange mb-4 mx-auto" />
                        <h3 className="text-textWhite mb-2 tracking-wider">Convenient Pick-Up</h3>
                        <p className="text-textWhite/90 font-bold tracking-wider p-font">
                            Multiple pick-up and drop-off points across the city. Wherever you are, we’ll get you rolling.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
