import React from 'react';
import { shallow } from 'enzyme'
import Background from './index'
import config from './config'

it('should render without crashing', () => {
    shallow(<Background />)
});
it('should render <Background /> with correct params', () => {
    const wrapper = shallow(<Background />)
    const params = wrapper.find('.particles').prop("params")
    expect(params).toEqual(config)
})