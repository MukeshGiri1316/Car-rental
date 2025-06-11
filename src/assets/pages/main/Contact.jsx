import { FaWhatsapp, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
    return (
        <div
            id="contact"
            className="min-h-screen relative w-full flex justify-center bg-cover bg-center text-white bg-fixed before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-black/80 before:z-10"
            style={{
                backgroundImage:
                    "url('/images/contact.jpg')"
            }}
        >
            <div className="container text-center relative z-20 flex flex-col space-y-8">
                <div>
                    <span className="text-xs text-textOrange font-semibold tracking-widest capitalize">Rent your car now
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-textWhite tracking-wide">
                        Let’s Get You on the Road!
                    </h2>
                </div>
                <p className="text-lg md:text-xl font-bold tracking-wider text-textWhite mb-8 p-font">
                    Fast, reliable, and premium car rental service. Whether it’s a weekend getaway or a business trip — we’ve got the wheels and the deals!
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-15 space-y-5 text-textWhite">
                    <a href="tel:+1234567890" className="hover:bg-textOrange/90 transition duration-300 text-sm flex flex-col justify-center items-center space-y-2 border py-2 rounded-xl px-8 min-w-[250px] w-[60%] md:w-fit">
                        <FaPhoneAlt size={20}/>
                        <span className="tracking-widest font-semibold">9876543210</span>
                    </a>
                    <a href="mailto:info@carrental.com" className="hover:bg-textOrange/90 transition duration-300 text-sm flex flex-col justify-center items-center space-y-2 border py-2 rounded-xl px-8 min-w-[250px] w-[60%] md:w-fit">
                        <FaEnvelope size={20}/>
                        <span className="tracking-widest font-semibold">info@carrental.com</span>
                    </a>
                </div>

                <p className="mt-6 text-sm text-textWhite/70 tracking-widest font-semibold">
                    Available 24/7 • Trusted by 10,000+ happy drivers
                </p>
            </div>
        </div>
    );
};

export default ContactSection;
