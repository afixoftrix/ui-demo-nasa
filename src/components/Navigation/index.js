import React from 'react'
import * as UI from './style'

const Header = () => {
    return (
        <UI.Container>
            <div className="header-left">Nasa Logo</div>
            <div className="header-right"> Search and menu</div>
        </UI.Container>
    )
}

export default Header
