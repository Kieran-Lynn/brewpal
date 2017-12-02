import 'jsdom-global/register'
import React from 'react';
import { configure, shallow, render } from 'enzyme';
import { expect } from 'chai';
import RecipeDescription from '../../../js/recipe/components/RecipeDescription';
import Adapter from 'enzyme-adapter-react-15';
import * as sinon from "sinon";

configure({adapter: new Adapter()});


describe('<RecipeDescription />', () => {
    it('should have className equal to row', () => {
        const wrapper = shallow(<RecipeDescription />);

        expect(wrapper.props().className).to.equal('row');
    });

    it('should have a <TextArea />', () => {
        const wrapper = shallow(<RecipeDescription/>);

        expect(wrapper.find('TextArea')).to.have.length(1);
    });

    it('should pass props to <TextArea /> ', () => {
        const props = {
            description: 'description text'
        };
        const wrapper = shallow(<RecipeDescription {...props}/>);
        const textArea = wrapper.find('TextArea');

        expect(textArea.prop('label')).to.equal('Description');
        expect(textArea.prop('name')).to.equal('description');
        expect(textArea.prop('value')).to.equal(props.description);
    });

    it('should set handleDescriptionChange on <TextArea />', () => {
        const onChangeSpy = sinon.spy();
        const event = {target: {value: 'value'}};
        let props = {
            handleDescriptionChange: onChangeSpy
        };
        const wrapper = shallow(<RecipeDescription {...props}/>);
        const textArea = wrapper.find('TextArea');

        textArea.simulate('change', event);

        onChangeSpy.calledOnce;
        expect(onChangeSpy.calledWith(event.target.value)).to.be.true
    });
});
