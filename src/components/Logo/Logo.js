import React from 'react';
import Tilt from 'react-tilt';
import Wizard from './ball.png'

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 center" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"><img style={{paddingTop: '5px'}} src={Wizard} alt="Logo"/></div>
            </Tilt>
        </div>
    );     
}

export default Logo;