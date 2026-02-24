import React from 'react';
import Image from 'next/image';
import isotype from '../assets/isotype_final.webp';

const Logo = ({ height = 40 }) => {
    return (
        <Image
            src={isotype}
            alt="Ortodoncia Rajevic Isotype"
            height={height}
            width={height} // Using height as base width since it's an isotype (usually square or close) or specify width
            style={{
                height: height,
                width: 'auto',
                display: 'block'
            }}
        />
    );
};

export default Logo;
