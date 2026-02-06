import React from 'react';
import { motion } from 'framer-motion';

export const Logo: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="mb-6 relative"
            >
                <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-20" />
                <img
                    src="/logo.png"
                    alt="UlyTech Logo"
                    className="relative z-10 h-24 md:h-32 w-auto object-contain"
                />
            </motion.div>
        </div>
    );
};
