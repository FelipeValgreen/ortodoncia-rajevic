import React from 'react';

const Logo = ({ height = 40 }) => {
    return (
        <svg
            height={height}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: 'block' }}
        >
            {/* 
        Refined Isotype based on User Upload:
        - Central Vertical Axis (Rod with rounded ends)
        - Split Ring (4 Quadrants)
        - Top Half: Lighter Blue (Secondary)
        - Bottom Half: Darker Blue (Primary)
      */}

            {/* Defs for gradients if needed, but using solid brand colors for clean vector look */}

            {/* Top Left Quadrant - Thick Arc */}
            <path
                d="M46 15 A 35 35 0 0 0 15 46 L 30 46 A 20 20 0 0 1 46 30 Z"
                fill="var(--color-secondary)"
            />

            {/* Top Right Quadrant - Thick Arc */}
            <path
                d="M54 15 A 35 35 0 0 1 85 46 L 70 46 A 20 20 0 0 0 54 30 Z"
                fill="var(--color-secondary)"
            />

            {/* Bottom Left Quadrant - Thick Arc */}
            <path
                d="M46 85 A 35 35 0 0 1 15 54 L 30 54 A 20 20 0 0 0 46 70 Z"
                fill="var(--color-primary)"
            />

            {/* Bottom Right Quadrant - Thick Arc */}
            <path
                d="M54 85 A 35 35 0 0 0 85 54 L 70 54 A 20 20 0 0 1 54 70 Z"
                fill="var(--color-primary)"
            />

            {/* Central Axis - The "Eje" */}
            <rect x="48" y="5" width="4" height="90" rx="2" fill="var(--color-secondary)" />

        </svg>
    );
};

export default Logo;
