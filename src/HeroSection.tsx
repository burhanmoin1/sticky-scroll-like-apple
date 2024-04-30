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
        if (latest >= 318) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    });

    const scale = useTransform(scrollY, [0, 280], [1, 1.2]);

    return (
        <div className="HeroSection">
            <motion.img
                className={`coffeebeansimg ${isSticky ? 'sticky' : ''}`}
                src={coffeebeans}
                alt="Coffee Beans"
                style={{
                    scale,
                }}
            />
        </div>
    );
};

export default HeroSection;
