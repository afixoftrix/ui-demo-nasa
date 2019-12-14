import React from 'react'
import * as UI from './style'
import logo from '../../assets/svgs/nasa-6.svg'
import search from '../../assets/svgs/search.svg'
import menu from '../../assets/svgs/menu.svg'

const Header = () => {
    return (
        <UI.Container>
            <div className="header-left">
                <UI.Logo
                    className="nasa-logo"
                    src={logo}
                    alt="nasa logo"
                />
            </div>
            <div className="header-right">
                <img className="nav-icon-search" src={search} alt="search-icon" />
                <img className="nav-icon-menu" src={menu} alt="menu-icon" />
            </div>
        </UI.Container>
    )
}

export default Header
