import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-primary py-10 border-t border-accent">
            <footer className="text-textWhite container">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-[#948979]/30">
                    {/* Left: Logo & About */}
                    <div>
                        <div className="text-2xl font-bold text-textOrange mb-2">MyLogo</div>
                        <p className="text-textWhite font-semibold tracking-widest p-font pe-0 md:pe-10">
                            Premium car rental service built for comfort, reliability, and class.
                        </p>
                    </div>

                    {/* Center: Links */}
                    <div className="text-start md:text-center">
                        <h4 className="text-xl font-semibold text-textOrange mb-4 tracking-wider">Quick Links</h4>
                        <ul className="space-y-2 text-textWhite p-font font-semibold tracking-wider">
                            <li><a href="#about" className="hover:text-textOrange transition">About</a></li>
                            <li><a href="#book-a-ride" className="hover:text-textOrange transition">Book a Car</a></li>
                            <li><a href="#cars" className="hover:text-textOrange transition">Cars</a></li>
                            <li><a href="#contact" className="hover:text-textOrange transition">Services</a></li>
                        </ul>
                    </div>

                    {/* Right: Socials and Contact */}
                    <div className="text-start md:text-right">
                        <h4 className="text-xl font-semibold text-textOrange mb-4 tracking-wider capitalize">Get in touch:</h4>
                        <div className="flex justify-normal md:justify-end gap-4 text-xl mb-4 text-textWhite">
                            <a href="https://instagram.com" target="_blank" className="hover:text-textOrange transition"><FaInstagram /></a>
                            <a href="https://wa.me/1234567890" target="_blank" className="hover:text-textOrange transition"><FaWhatsapp /></a>
                            <a href="https://facebook.com" target="_blank" className="hover:text-textOrange transition"><FaFacebookF /></a>
                        </div>
                        <ul className="space-y-2 text-textWhite font-semibold tracking-wider p-font text-sm  lg:text-base">
                            <li className="flex items-center justify-normal md:justify-end gap-2"><FaPhoneAlt className="text-textOrange" /> +1 234 567 890</li>
                            <li className="flex items-center justify-normal md:justify-end gap-2"><FaEnvelope className="text-textOrange" /> info@company.com</li>
                            <li className="flex items-center justify-normal md:justify-end gap-2"><FaMapMarkerAlt className="text-textOrange" /> 123 Main St, Los Angeles, CA</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom copyright */}
                <div className="text-center text-xs text-accent py-4 tracking-widest font-semibold">
                    © {new Date().getFullYear()} company. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Footer;
