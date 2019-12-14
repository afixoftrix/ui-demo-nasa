import React from 'react'
import * as UI from './styles' 


const Planetary = () => {
    return (
        <UI.Container className="planetary_container">
            <UI.CircleBorder className="planet_border">
                <UI.Circle className="planet" />
            </UI.CircleBorder>
        </UI.Container>
    )
}

export default Planetary
