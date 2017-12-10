import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import Adapter from 'enzyme-adapter-react-15';
import * as sinon from 'sinon';
import RecipeGrainRow from '../../../js/recipe/components/RecipeGrainRow';
import { getGrainOptions } from '../../../js/shared/utils';

chai.use(sinonChai);
configure({ adapter: new Adapter() });

const handleGrainChangeSpy = sinon.spy();
const handleDeleteGrainSpy = sinon.spy();
let defaultProps = { };

describe('<RecipeGrainRow />', () => {
    beforeEach(() => {
        defaultProps = {
            index: 0,
            grain: { grainType: '1', amount: '10' },
            disableDelete: true,
            handleGrainChange: handleGrainChangeSpy,
            handleDeleteGrain: handleDeleteGrainSpy,
        };
        handleGrainChangeSpy.reset();
        handleDeleteGrainSpy.reset();
    });

    it('should be a div with the classname row', () => {
        const wrapper = shallow(<RecipeGrainRow {...defaultProps} />);

        expect(wrapper.type()).to.equal('div');
        expect(wrapper.prop('className')).to.equal('row');
    });

    it('renders one <Select /> with the correct props', () => {
        const wrapper = shallow(<RecipeGrainRow {...defaultProps} />);
        const grainTypeDropdown = wrapper.find('Select');

        expect(grainTypeDropdown).to.have.length(1);
        expect(grainTypeDropdown.prop('index')).to.equal(defaultProps.index);
        expect(grainTypeDropdown.prop('label')).to.equal('Grain');
        expect(grainTypeDropdown.prop('name')).to.equal('grains[0][grain_type]');
        expect(grainTypeDropdown.prop('value')).to.equal(defaultProps.grain.grainType);
        expect(grainTypeDropdown.prop('options')).to.deep.equal(getGrainOptions());
    });

    it('calls handleGrainChange with the updated grain type when the Select option is changed', () => {
        const grainType = 10;
        const expectedGrain = {
            grainType,
            amount: defaultProps.grain.amount,
        };
        const event = {
            target: {
                value: grainType,
            },
        };
        const wrapper = shallow(<RecipeGrainRow {...defaultProps} />);
        const grainTypeDropdown = wrapper.find('Select');

        grainTypeDropdown.simulate('change', event);

        expect(handleGrainChangeSpy).to.have.been.calledOnce;
        expect(handleGrainChangeSpy).to.have.been.calledWithMatch(expectedGrain, defaultProps.index);
    });

    it('renders one <TextInput /> with the correct props', () => {
        const wrapper = shallow(<RecipeGrainRow {...defaultProps} />);
        const grainAmountInput = wrapper.find('TextInput');

        expect(grainAmountInput).to.have.length(1);
        expect(grainAmountInput.prop('label')).to.equal('Amount (lbs)');
        expect(grainAmountInput.prop('name')).to.equal('grains[0][amount]');
        expect(grainAmountInput.prop('value')).to.equal(defaultProps.grain.amount);
    });

    it('calls handleGrainChange with the updated grain amount when the TextInput option is changed', () => {
        const grainAmount = '5';
        const expectedGrain = {
            grainType: defaultProps.grain.grainType,
            amount: grainAmount,
        };
        const event = {
            target: {
                value: grainAmount,
            },
        };
        const wrapper = shallow(<RecipeGrainRow {...defaultProps} />);
        const grainAmountInput = wrapper.find('TextInput');

        grainAmountInput.simulate('change', event);

        expect(handleGrainChangeSpy).to.have.been.calledOnce;
        expect(handleGrainChangeSpy).to.have.been.calledWithMatch(expectedGrain, defaultProps.index);
    });

    it('calls handleGrainChange with the updated grain amount and filters out non numeric characters', () => {
        const grainAmount = '5aa';
        const expectedGrainAmount = '5';
        const expectedGrain = {
            grainType: defaultProps.grain.grainType,
            amount: expectedGrainAmount,
        };
        const event = {
            target: {
                value: grainAmount,
            },
        };
        const wrapper = shallow(<RecipeGrainRow {...defaultProps} />);
        const grainAmountInput = wrapper.find('TextInput');

        grainAmountInput.simulate('change', event);

        expect(handleGrainChangeSpy).to.have.been.calledOnce;
        expect(handleGrainChangeSpy).to.have.been.calledWithMatch(expectedGrain, defaultProps.index);
    });


    it('renders one <Button /> with the correct props', () => {
        const wrapper = shallow(<RecipeGrainRow {...defaultProps} />);
        const deleteGrainButton = wrapper.find('Button');

        expect(deleteGrainButton).to.have.length(1);
        expect(deleteGrainButton.prop('type')).to.equal('button');
        expect(deleteGrainButton.prop('disabled')).to.equal(defaultProps.disableDelete);
    });

    it('calls handleDeleteGrain when the delete grain button is clicked', () => {
        const wrapper = shallow(<RecipeGrainRow {...defaultProps} />);
        const textInputComponent = wrapper.find('Button');

        textInputComponent.simulate('click');

        expect(handleDeleteGrainSpy).to.have.been.calledOnce;
        expect(handleDeleteGrainSpy).to.have.been.calledWithMatch(defaultProps.grain);
    });
});
