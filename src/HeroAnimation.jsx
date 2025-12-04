import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import logo from './assets/logo.png';
import logo2 from './assets/logo2.png';

const HeroAnimation = () => {
    const [useLogo2, setUseLogo2] = useState(false);
    const logoControls = useAnimation();
    const hControl = useAnimation();
    const asControl = useAnimation(); // Control for 'as'
    const aControl = useAnimation(); // Control for 'a'
    const plControl = useAnimation(); // Control for 'pl'
    const anControl = useAnimation(); // Control for 'an'
    const toControl = useAnimation();
    const maControl = useAnimation(); // Control for 'ma'
    const keControl = useAnimation(); // Control for 'ke'
    const promiseControl = useAnimation(); // Control for promise text
    const dotControl = useAnimation(); // Control for '.'

    // Controls for "carbon neutral"
    const carControl = useAnimation();
    const bonControl = useAnimation();
    const neutControl = useAnimation();
    const tralControl = useAnimation();
    const bgControl = useAnimation(); // Control for background color

    useEffect(() => {
        const sequence = async () => {
            // Sequential Initial Appear
            // 1. Logo
            logoControls.start("visible");
            await new Promise(resolve => setTimeout(resolve, 200));

            // 2. "has"
            hControl.start("visible");
            asControl.start("visible");
            await new Promise(resolve => setTimeout(resolve, 200));

            // 3. "a"
            aControl.start("visible");
            await new Promise(resolve => setTimeout(resolve, 200));

            // 4. "plan"
            plControl.start("visible");
            anControl.start("visible");
            await new Promise(resolve => setTimeout(resolve, 200));

            // 5. "."
            dotControl.start("visible");

            // Wait for container slide start (1s) + 0.1s delay
            await new Promise(resolve => setTimeout(resolve, 1100));

            promiseControl.start("visible");

            // Wait for writing animation (approx 1s)
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Trigger simultaneous actions (Phase 1)
            hControl.start("vanish");
            toControl.start("visible");
            logoControls.start("moveRight");

            // Phase 2: 'as' -> 'ma' (0.1s)
            await new Promise(resolve => setTimeout(resolve, 100));
            asControl.start("vanish");
            maControl.start("visible");

            // Phase 3: 'a' vanish (0.15s)
            await new Promise(resolve => setTimeout(resolve, 50));
            aControl.start("vanish");

            // Phase 4: 'pl' vanish (0.20s)
            await new Promise(resolve => setTimeout(resolve, 50));
            plControl.start("vanish");

            // Phase 5: 'an' vanish (0.25s) & 'ke' appear & promise vanish
            await new Promise(resolve => setTimeout(resolve, 50));
            anControl.start("vanish");
            keControl.start("visible");
            promiseControl.start("vanish");

            // Phase 6: 'carbon neutral' appears
            await new Promise(resolve => setTimeout(resolve, 200)); // Wait a bit after logo stops
            carControl.start("visible");
            await new Promise(resolve => setTimeout(resolve, 100));
            bonControl.start("visible");
            await new Promise(resolve => setTimeout(resolve, 100));
            neutControl.start("visible");
            await new Promise(resolve => setTimeout(resolve, 100));
            tralControl.start("visible");

            // Phase 7: Background color change
            await new Promise(resolve => setTimeout(resolve, 700));
            bgControl.start("green");
            setUseLogo2(true);
        };
        sequence();
    }, [logoControls, hControl, asControl, aControl, plControl, anControl, toControl, maControl, keControl, promiseControl, carControl, bonControl, neutControl, tralControl, dotControl]);

    // Animation variants for the "wiggle" effect
    const wiggleVariant = {
        animate: {
            x: [0, -1, 1, -1, 1, 0],
            y: [0, 1, -1, 1, -1, 0],
            transition: {
                duration: 2, // Slow, organic wiggle
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            },
        },
    };

    // Variants for the "write-on" effect
    const pathVariant = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 2, ease: "easeInOut" }, // 2 seconds to write
                opacity: { duration: 0.1 },
            },
        },
    };

    const containerVariants = {
        hidden: { x: 0 },
        visible: {
            x: -200,
            transition: {
                staggerChildren: 0.05,
                x: { delay: 1, duration: 0.3, ease: "circIn" } // circIn as requested, very fast duration
            },
        },
    };

    const itemVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.15, ease: "easeOut" },
        },
    };

    const logoVariants = {
        hidden: { y: 40, opacity: 0, x: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.15, ease: "easeOut" }
        },
        moveRight: {
            x: 245, // Adjusted to 245 as requested
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, ease: "circIn" }
        }
    };

    const slideUpVariant = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.15, ease: "easeOut" } },
        vanish: { opacity: 0, y: 0, transition: { duration: 0.05 } }
    };

    const toVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    const makeVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    const carbonVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.2, ease: "easeOut" }
        }
    };

    return (
        <motion.div
            className="flex items-center justify-center w-screen h-screen overflow-hidden"
            initial="white"
            animate={bgControl}
            variants={{
                white: { backgroundColor: "#ffffff" },
                green: {
                    backgroundColor: "#78F666",
                    transition: { duration: 0 }
                }
            }}
        >
            {/* Preload logo2 */}
            <img src={logo2} alt="" style={{ display: 'none' }} />

            <motion.div
                className="flex items-center relative" // Added relative for absolute positioning of 'To'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Logo Animation */}
                <motion.img
                    src={useLogo2 ? logo2 : logo}
                    alt="Logo"
                    className="h-40 md:h-64 object-contain -mr-14 z-10" // z-10 to stay on top if needed
                    variants={logoVariants}
                    initial="hidden"
                    animate={logoControls}
                />

                {/* Text Animation */}
                <motion.div
                    className="relative flex space-x-3 text-4xl md:text-6xl font-bold text-black tracking-tight"
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.05 } }
                    }}
                >
                    {/* 'To' Text - Positioned absolutely */}
                    <motion.div
                        className="absolute right-full mr-10 text-4xl md:text-6xl font-bold text-black tracking-tight"
                        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                        initial="hidden"
                        animate={toControl}
                        variants={toVariants}
                    >
                        To
                    </motion.div>

                    {/* 'ma' Text - Positioned absolutely at start */}
                    <motion.div
                        className="absolute -left-8 text-4xl md:text-6xl font-bold text-black tracking-tight"
                        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                        initial="hidden"
                        animate={maControl}
                        variants={makeVariants}
                    >
                        ma
                    </motion.div>

                    {/* 'ke' Text - Positioned after 'ma' to form 'make' */}
                    <motion.div
                        className="absolute left-6 md:left-12 text-4xl md:text-6xl font-bold text-black tracking-tight"
                        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
                        initial="hidden"
                        animate={keControl}
                        variants={makeVariants}
                    >
                        ke
                    </motion.div>

                    {/* 'carbon neutral' Text */}
                    <div className="absolute left-[190px] md:left-[240px] flex whitespace-nowrap text-4xl md:text-6xl font-bold text-black tracking-tight"
                        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
                        <motion.span initial="hidden" animate={carControl} variants={carbonVariants}>car</motion.span>
                        <motion.span initial="hidden" animate={bonControl} variants={carbonVariants}>bon</motion.span>
                        <span className="w-2 md:w-4 inline-block"></span> {/* Space */}
                        <motion.span initial="hidden" animate={neutControl} variants={carbonVariants}>neut</motion.span>
                        <motion.span initial="hidden" animate={tralControl} variants={carbonVariants}>ral</motion.span>
                    </div>

                    {/* "has" split for 'h' and 'as' control */}
                    <div className="flex">
                        <motion.span initial="hidden" variants={slideUpVariant} animate={hControl}>h</motion.span>
                        <motion.span initial="hidden" variants={slideUpVariant} animate={asControl}>as</motion.span>
                    </div>

                    {/* "a" */}
                    <motion.span initial="hidden" variants={slideUpVariant} animate={aControl} className="inline-block">
                        a
                    </motion.span>

                    {/* "plan" split */}
                    <motion.div
                        className="flex"
                        variants={{
                            visible: { transition: { staggerChildren: 0.05 } }
                        }}
                    >
                        <motion.span initial="hidden" variants={slideUpVariant} animate={plControl} className="inline-block">pl</motion.span>
                        <motion.span initial="hidden" variants={slideUpVariant} animate={anControl} className="inline-block">an</motion.span>
                        <motion.span
                            initial="hidden"
                            animate={dotControl}
                            variants={{
                                hidden: { y: 100, opacity: 0 },
                                visible: {
                                    y: 0,
                                    opacity: [0, 1, 1, 0],
                                    transition: {
                                        y: { duration: 0.15, ease: "easeOut" },
                                        opacity: { duration: 0.9, times: [0, 0.1, 0.995, 1] }
                                    }
                                }
                            }}
                            className="inline-block"
                        >
                            .
                        </motion.span>
                    </motion.div>

                    {/* New Text: AND A PROMISE. */}
                    <motion.div
                        className="absolute left-full bottom-full mb-4 ml-4 flex whitespace-nowrap text-3xl md:text-4xl rotate-[-5deg]"
                        style={{
                            fontFamily: '"Permanent Marker", cursive',
                            color: '#78F666'
                        }}
                        initial="hidden"
                        animate={promiseControl}
                        variants={{
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.05
                                }
                            },
                            vanish: {
                                opacity: 0,
                                transition: { duration: 0.1 }
                            }
                        }}
                    >
                        {"AND A PROMISE.".split('').map((char, index) => {
                            // Pattern: 2 write (indices 0,1), 1 instant (index 2), repeat
                            const isWrite = (index % 3) !== 2;

                            return (
                                <motion.span
                                    key={index}
                                    style={{ display: "inline-block", whiteSpace: "pre" }}
                                    variants={{
                                        hidden: isWrite
                                            ? { clipPath: "inset(0 100% 0 0)", opacity: 1 }
                                            : { opacity: 0, clipPath: "none" },
                                        visible: isWrite
                                            ? { clipPath: "inset(0 0% 0 0)", transition: { duration: 0.1, ease: "linear" } }
                                            : { opacity: 1, transition: { duration: 0.01 } }
                                    }}
                                >
                                    {char}
                                </motion.span>
                            );
                        })}
                    </motion.div>

                    {/* New Text: ^ */}
                    <motion.div
                        className="absolute left-full bottom-full -mb-10 -ml-4 whitespace-nowrap text-4xl md:text-5xl rotate-[-5deg]"
                        style={{
                            fontFamily: '"Permanent Marker", cursive',
                            color: '#78F666'
                        }}
                        initial="hidden"
                        animate={promiseControl}
                        variants={{
                            hidden: { clipPath: "inset(0 100% 0 0)", opacity: 1 },
                            visible: {
                                clipPath: "inset(0 0% 0 0)",
                                opacity: 1,
                                transition: {
                                    duration: 0.2,
                                    ease: "linear"
                                }
                            },
                            vanish: {
                                opacity: 0,
                                transition: { duration: 0.1 }
                            }
                        }}
                    >
                        ^
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default HeroAnimation;
