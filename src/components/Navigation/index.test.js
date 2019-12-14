import React from 'react'
import { shallow } from 'enzyme'
import Navigation from './index'
import logo from "../../assets/svgs/nasa-6.svg"
import menuIcon from '../../assets/svgs/menu.svg'
import searchIcon from '../../assets/svgs/search.svg'

it('renders in <Navigation /> with logo', () => {
    const wrapper = shallow(<Navigation />)
    const logoSRC = wrapper.find('.nasa-logo').prop('src')
    expect(logoSRC).toEqual(logo)
})
it('renders icons in <Navigation />', () => {
    const wrapper = shallow(<Navigation />)
    const menu = wrapper.find(".nav-icon-menu").prop('src')
    const search = wrapper.find(".nav-icon-search").prop('src')
    expect(menu).toEqual(menuIcon)
    expect(search).toEqual(searchIcon)
});
