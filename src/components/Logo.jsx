import React from 'react';
import isotype from '../assets/isotype_final.png';

const Logo = ({ height = 40 }) => {
    return (
        <img
            src={isotype}
            alt="Ortodoncia Rajevic Isotype"
            style={{
                height: height,
                width: 'auto',
                display: 'block'
            }}
        />
    );
};

export default Logo;
