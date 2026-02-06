import React from 'react';

export const Background: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Mesh gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />



            {/* Radial glow from center */}
            <div className="absolute inset-0 bg-hero-glow" />
        </div>
    );
};
