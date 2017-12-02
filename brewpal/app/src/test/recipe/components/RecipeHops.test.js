import 'jsdom-global/register'
import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import RecipeHops from '../../../js/recipe/components/RecipeHops';
import Adapter from 'enzyme-adapter-react-15';
import * as sinon from "sinon";
chai.use(sinonChai);
configure({adapter: new Adapter()});

const handleHopChangeSpy = sinon.spy();
const handleDeleteHopSpy = sinon.spy();
const handleAddHopSpy = sinon.spy();
let defaultProps = { }

describe('<RecipeHops />', () => {
    beforeEach( () => {
        defaultProps = {
            hops: [
                {
                    hopType: "Galaxy",
                    alphaAcid: "14.0",
                    amount: "3.0",
                    time: "5",
                    hopUse: "boil"
                }
            ],
            disableDelete: true,
            handleHopChange: handleHopChangeSpy,
            handleDeleteHop: handleDeleteHopSpy,
            handleAddHop: handleAddHopSpy
        }
    });

    it('should be a div', () => {
        const wrapper = shallow(<RecipeHops {...defaultProps} />);

        expect(wrapper.type()).to.equal('div');
    });

    it('should render a header, button, and one <RecipeHopRow />', () => {
        const wrapper = shallow(<RecipeHops {...defaultProps} />);

        expect(wrapper.find('RecipeHopRow')).to.have.length(1);
        expect(wrapper.find('h3')).to.have.length(1);
        expect(wrapper.find('Button')).to.have.length(1);
    });

    it('should render the RecipeHopRow proper props', () => {
        const wrapper = shallow(<RecipeHops {...defaultProps} />);
        const RecipeHopRow = wrapper.find('RecipeHopRow');

        expect(RecipeHopRow.prop('hop')).to.equal(defaultProps.hops[0]);
        expect(RecipeHopRow.prop('index')).to.equal(0);
        expect(RecipeHopRow.prop('disableDelete')).to.equal(defaultProps.disableDelete);
        expect(RecipeHopRow.prop('handleDeleteHop')).to.equal(defaultProps.handleDeleteHop);
        expect(RecipeHopRow.prop('handleHopChange')).to.equal(defaultProps.handleHopChange);
    });

    it('should render the 2 RecipeHopRow components when there are two hops in the array', () => {
        const newHop = { };
        defaultProps.hops.push(newHop);
        const wrapper = shallow(<RecipeHops {...defaultProps} />);

        expect(wrapper.find('RecipeHopRow')).to.have.length(2);
    });

    it('should render the Add Hop Button with the proper props', () => {
        const wrapper = shallow(<RecipeHops {...defaultProps} />);
        const addHopButton = wrapper.find('Button');

        expect(addHopButton.prop('type')).to.equal('button');
        expect(addHopButton.prop('onClick')).to.equal(handleAddHopSpy);
    });

    it('should render the header and button text', () => {
        const wrapper = shallow(<RecipeHops {...defaultProps} />);

        expect(wrapper.find('h3').render().text()).to.equal('Hops');
        expect(wrapper.find('Button').render().text()).to.equal('Add Hop');
    });
});