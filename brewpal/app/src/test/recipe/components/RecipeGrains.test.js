import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import Adapter from 'enzyme-adapter-react-15';
import * as sinon from 'sinon';
import RecipeGrains from '../../../js/recipe/components/RecipeGrains';

chai.use(sinonChai);
configure({ adapter: new Adapter() });

const handleGrainChangeSpy = sinon.spy();
const handleDeleteGrainSpy = sinon.spy();
const handleAddGrainSpy = sinon.spy();
let defaultProps = { };

describe('<RecipeGrains />', () => {
    beforeEach(() => {
        defaultProps = {
            grains: [{ grainType: '1', amount: '10' }],
            disableDelete: true,
            handleGrainChange: handleGrainChangeSpy,
            handleDeleteGrain: handleDeleteGrainSpy,
            handleAddGrain: handleAddGrainSpy,
        };
    });

    it('should be a div', () => {
        const wrapper = shallow(<RecipeGrains {...defaultProps} />);

        expect(wrapper.type()).to.equal('div');
    });

    it('should render a header, button, and one <RecipeGrainRow />', () => {
        const wrapper = shallow(<RecipeGrains {...defaultProps} />);

        expect(wrapper.find('RecipeGrainRow')).to.have.length(1);
        expect(wrapper.find('h3')).to.have.length(1);
        expect(wrapper.find('Button')).to.have.length(1);
    });

    it('should render the RecipeGrainRow proper props', () => {
        const wrapper = shallow(<RecipeGrains {...defaultProps} />);
        const RecipeGrainRow = wrapper.find('RecipeGrainRow');

        expect(RecipeGrainRow.prop('grain')).to.equal(defaultProps.grains[0]);
        expect(RecipeGrainRow.prop('index')).to.equal(0);
        expect(RecipeGrainRow.prop('disableDelete')).to.equal(defaultProps.disableDelete);
        expect(RecipeGrainRow.prop('handleDeleteGrain')).to.equal(defaultProps.handleDeleteGrain);
        expect(RecipeGrainRow.prop('handleGrainChange')).to.equal(defaultProps.handleGrainChange);
    });

    it('should render the 2 RecipeGrainRow components when there are two grains in the array', () => {
        const newGrain = { grainType: '2', amount: '5' };
        defaultProps.grains.push(newGrain);
        const wrapper = shallow(<RecipeGrains {...defaultProps} />);

        expect(wrapper.find('RecipeGrainRow')).to.have.length(2);
    });

    it('should render the <Button /> proper props', () => {
        const wrapper = shallow(<RecipeGrains {...defaultProps} />);
        const addGrainButton = wrapper.find('Button');

        expect(addGrainButton.prop('type')).to.equal('button');
        expect(addGrainButton.prop('onClick')).to.equal(handleAddGrainSpy);
    });

    it('should render the header and button text', () => {
        const wrapper = shallow(<RecipeGrains {...defaultProps} />);

        expect(wrapper.find('h3').render().text()).to.equal('Grains');
        expect(wrapper.find('Button').render().text()).to.equal('Add Grain');
    });
});
