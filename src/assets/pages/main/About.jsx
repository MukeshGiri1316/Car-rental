import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

export default function About() {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (isPlaying) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    }, [isPlaying, setIsPlaying])

    return (
        <div id="about" className=" py-10 md:py-20">
            <section className="container min-h-[70vh] text-primary flex flex-col md:flex-row gap-15">

                {/* Left - Image */}
                <div className="w-full md:w-1/2 space-y-6">
                    <div>
                        <span className="text-textOrange text-[10px] md:text-xs tracking-wider">About us </span>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-background common-heading tracking-wider">We are more than a car rental company</h2>
                    </div>
                    <p className="text-lg md:text-base lg:text-xl text-textWhite leading-snug tracking-wider font-bold p-font">
                        At <span className="text-amber-400 font-semibold">Company</span>, we believe every journey should be
                        memorable. With a fleet of top-tier vehicles and unmatched customer service, we make sure your ride
                        is not just comfortable but also stylish.
                    </p>
                    <p className="text-textWhite/80 leading-normal p-font tracking-widest text-sm md:text-base">
                        Flexible bookings, transparent pricing, and 24/7 support — that’s our promise to every rider.
                        Choose AutoLux for a ride that defines luxury and reliability.
                    </p>
                    <a
                        href="#book-a-ride"
                        className="inline-block bg-accent text-primary font-semibold px-6 py-3 rounded-xl hover:bg-background hover:text-black transition duration-300"
                    >
                        Book a Ride
                    </a>
                </div>

                {/* Right - Text Content */}
                <div className="relative w-full md:w-1/2 h-[80%]">
                    <img
                        src="/images/about.jpg"
                        alt="Luxury car rental"
                        className="rounded-2xl w-full object-fill min-h-[400px] h-[100%]"
                    />
                    <div className="absolute bg-accent md:bg-primary bottom-0 md:w-[30%] lg:w-[35%] md:h-[30%] lg:h-[35%] rounded-full md:rounded-[0px_40px_0px_0px] flex justify-center items-center p-2 md:p-0">
                        <video className={`w-[100px] md:w-[80px] lg:w-[100px] h-[100px] md:h-[80px] lg:h-[100px] rounded-full object-cover`} src="/images/cars-about.mp4" />
                        <button className="rounded-full text-3xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-textWhite/80 cursor-pointer" onClick={() => setIsPlaying(true)}>
                            {isPlaying ? <FaPause /> : <FaPlay />}
                        </button>
                    </div>
                </div>
                {/* video section */}
                <div className={`${isPlaying ? 'w-[100%] h-[100%] bg-black/80' : 'w-0 h-0'} fixed z-100 top-0 left-0 transition-all duration-200 flex justify-center items-center`}>
                    <video ref={videoRef} className={`${isPlaying ? "w-[90%] sm:w-[600px] lg:w-[800px] h-[60%]" : "w-0 h-0"} object-cover rounded-xl`} src="/images/cars-about.mp4" />
                    <button onClick={() => setIsPlaying(false)} className={`absolute top-5 left-5 text-3xl font-extrabold text-textWhite cursor-pointer ${isPlaying ? "block" : "hidden"}`}><RxCross1 /></button>
                </div>
            </section>
        </div>
    );
}
