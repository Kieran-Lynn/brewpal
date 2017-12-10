import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-15';
import * as sinon from 'sinon';
import RecipeName from '../../../js/recipe/components/RecipeName';

configure({ adapter: new Adapter() });

describe('<RecipeName />', () => {
    it('should have className equal to row', () => {
        const wrapper = shallow(<RecipeName />);

        expect(wrapper.props().className).to.equal('row');
    });

    it('should have a <TextInput />', () => {
        const wrapper = shallow(<RecipeName />);

        expect(wrapper.find('TextInput')).to.have.length(1);
    });

    it('should pass props to <TextInput /> ', () => {
        const props = {
            recipeName: 'name',
        };
        const wrapper = shallow(<RecipeName {...props} />);
        const textInput = wrapper.find('TextInput');

        expect(textInput.prop('label')).to.equal('Recipe Name');
        expect(textInput.prop('name')).to.equal('name');
        expect(textInput.prop('required')).to.be.true;
        expect(textInput.prop('value')).to.equal(props.recipeName);
    });

    it('should set handleRecipeNameChange on <TextInput />', () => {
        const onChangeSpy = sinon.spy();
        const event = { target: { value: 'value' } };
        const props = {
            handleRecipeNameChange: onChangeSpy,
        };
        const wrapper = shallow(<RecipeName {...props} />);
        const textInput = wrapper.find('TextInput');

        textInput.simulate('change', event);

        onChangeSpy.calledOnce;
        expect(onChangeSpy.calledWith(event.target.value)).to.be.true;
    });
});
