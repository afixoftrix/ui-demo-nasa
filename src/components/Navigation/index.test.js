import React from 'react'
import { shallow } from 'enzyme'
import Navigation from './index'


it('renders without crashing', () => {
    const wrapper = shallow(<Navigation />)
    const text = wrapper.find('.header-left').text()
    expect(text).toContain("Nasa")
})
