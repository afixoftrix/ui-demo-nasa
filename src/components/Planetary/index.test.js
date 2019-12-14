import React from 'react';
import { shallow } from 'enzyme'
import Planetary from './index'


it('should render without crashing', () => {
    shallow(<Planetary />)
});