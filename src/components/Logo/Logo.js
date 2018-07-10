import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './icon.png';

const Logo = () => {
    return(
    <div className="ma4 mt0">
        <Tilt className="Tilt br2 shadow-2" options={{ max : 15 }} style={{ height: 250, width: 250 }} >
        <div className="Tilt-inner"><img alt='' src={logo}/></div>
        </Tilt>
    </div>
    );
}

export default Logo;