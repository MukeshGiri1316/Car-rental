import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onDone }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(false);
            onDone(); // Callback to notify App that loading is complete
        }, 3000);
        return () => clearTimeout(timeout);
    }, [onDone]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-primary"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1 } }}
                >
                    {/* Logo */}
                    <motion.img
                        src="/images/logo.png"
                        alt="Car Rental Logo"
                        className="w-15 md:w-24 h-15 md:h-24 mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    />

                    {/* Slogan */}
                    <motion.h2
                        className="text-sm md:text-xl text-center px-2 font-semibold text-blue-600 dark:text-textOrange"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 15,
                            delay: 1,
                        }}
                    >
                        "Drive Your Dream – Rent With Confidence"
                    </motion.h2>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
