import coffeebeans from './coffebean.png';
import './HeroSection.css';
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState } from 'react';

const HeroSection = () => {
    const { scrollY } = useScroll();
    const [isSticky, setIsSticky] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", latest)
    })

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest >= 534) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    });

    const opacity = useTransform(scrollY, [200, 600], [0, 1]);

    return (
        <div className="HeroSection">
            <motion.img
                className={`coffeebeansimg ${isSticky ? 'sticky' : ''}`}
                src={coffeebeans}
                alt="Coffee Beans"
                style={{
                    width: '30%',  // Adjust width as needed
                    height: '40%',
                    opacity,
                }}
            />
        </div>
    );
};

export default HeroSection;
