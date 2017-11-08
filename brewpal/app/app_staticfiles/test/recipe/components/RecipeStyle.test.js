import 'jsdom-global/register'
import React from 'react';
import { configure, shallow, render } from 'enzyme';
import { expect } from 'chai';
import RecipeStyle from '../../../js/recipe/components/RecipeStyle';
import Adapter from 'enzyme-adapter-react-15';
import * as sinon from "sinon";

configure({adapter: new Adapter()});


describe('<RecipeStyle />', () => {
    it('should have className equal to row', () => {
        const wrapper = shallow(<RecipeStyle />);

        expect(wrapper.props().className).to.equal('row');
    });

    it('should have a <TextInput />', () => {
        const wrapper = shallow(<RecipeStyle/>);

        expect(wrapper.find('TextInput')).to.have.length(1);
    });

    it('should pass props to <TextInput /> ', () => {
        const props = {
            style: 'style name'
        };
        const wrapper = shallow(<RecipeStyle {...props}/>);
        const textInput = wrapper.find('TextInput');

        expect(textInput.prop('label')).to.equal('Style');
        expect(textInput.prop('name')).to.equal('style');
        expect(textInput.prop('value')).to.equal(props.style);
    });

    it('should set handleStyleChange on <TextInput />', () => {
        const onChangeSpy = sinon.spy();
        const event = {target: {value: 'value'}};
        let props = {
            handleStyleChange: onChangeSpy
        };
        const wrapper = shallow(<RecipeStyle {...props}/>);
        const textInput = wrapper.find('TextInput');

        textInput.simulate('change', event);

        onChangeSpy.calledOnce;
        expect(onChangeSpy.calledWith(event.target.value)).to.be.true
    });
});
