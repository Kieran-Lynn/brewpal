import React from 'react';
import { configure, mount } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-15';
import axios from 'axios';
import sinon from 'sinon';
import BeerList from '../../../js/beer-list/components/BeerList';

configure({ adapter: new Adapter() });

const initialState = {
    beers: [
        {
            id: 1,
            name: 'Beer 1',
            style: 'style 1',
        },
        {
            id: 2,
            name: 'Beer 2',
            style: 'style 2',
        },
    ],
};

describe('BeerList', () => {
    let sandbox;
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        const resolved = new Promise(r => r({ data: initialState.beers }));
        sandbox.stub(axios, 'get').returns(resolved);
    });

    afterEach(() => sandbox.restore());

    it('load the initial state', () => {
        const wrapper = mount(<BeerList />);

        expect(wrapper.state()).to.equal(initialState);
    });
});
