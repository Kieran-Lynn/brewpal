import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-15';
import BeerListItem from '../../../js/beer-list/components/BeerListItem';

configure({ adapter: new Adapter() });

const defaultProps = {
    name: 'beer name',
    style: 'IPA',
};

describe('<BeerListItem />', () => {
    it('should have a 3 divs', () => {
        const wrapper = shallow(<BeerListItem {...defaultProps} />);

        expect(wrapper.find('div')).to.have.length(3);
    });

    it('should display the prop name in the second div', () => {
        const wrapper = shallow(<BeerListItem {...defaultProps} />);
        const nameDiv = wrapper.find('div').at(1);

        expect(nameDiv.text()).to.equal('beer name');
    });

    it('should display the prop style in the third div', () => {
        const wrapper = shallow(<BeerListItem {...defaultProps} />);
        const nameDiv = wrapper.find('div').at(2);

        expect(nameDiv.text()).to.equal('IPA');
    });
});
