import React from 'react';
import { motion } from 'framer-motion';
import logo from './assets/logo.png';

function Poster() {
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
        }}>
            {/* Logo + Text as a single centered element */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(calc(-50% - 1.75rem), -50%)',
            }}>
                {/* Logo */}
                <img
                    src={logo}
                    alt="Logo"
                    style={{
                        height: '16rem',
                        objectFit: 'contain',
                        marginRight: '-3.5rem',
                    }}
                />

                {/* Text "akıl ile yönet" */}
                <div style={{
                    display: 'flex',
                    fontSize: '3.75rem',
                    fontWeight: 'bold',
                    color: 'black',
                    letterSpacing: '-0.025em',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                }}>
                    {/* "akıl" with slide up and freeze halfway animation */}
                    <motion.span
                        initial={{ y: 0, opacity: 1 }}
                        animate={{ y: -30, opacity: 0.4 }}
                        transition={{ delay: 2, duration: 0.3, ease: 'easeIn' }}
                        style={{ display: 'inline-block' }}
                    >
                        akıl&nbsp;
                    </motion.span>
                    <span>ile yönet</span>
                </div>
            </div>
        </div>
    );
}

export default Poster;
