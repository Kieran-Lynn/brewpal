import 'jsdom-global/register'
import React from 'react';
import { configure, shallow, render } from 'enzyme';
import { expect } from 'chai';
import RecipeBatchSize from '../../../js/recipe/components/RecipeBatchSize';
import Adapter from 'enzyme-adapter-react-15';
import * as sinon from "sinon";

configure({adapter: new Adapter()});


describe('<RecipeBatchSize />', () => {
    it('should have className equal to row', () => {
        const wrapper = shallow(<RecipeBatchSize />);

        expect(wrapper.props().className).to.equal('row');
    });

    it('should have a <TextInput />', () => {
        const wrapper = shallow(<RecipeBatchSize/>);

        expect(wrapper.find('TextInput')).to.have.length(1);
    });

    it('should pass props to <TextInput /> ', () => {
        const props = {
            batchSize: '1'
        };
        const wrapper = shallow(<RecipeBatchSize {...props}/>);
        const textInput = wrapper.find('TextInput');

        expect(textInput.prop('label')).to.equal('Batch Size (gal)');
        expect(textInput.prop('name')).to.equal('batch_size');
        expect(textInput.prop('value')).to.equal(props.batchSize);
    });

    it('should set handleBatchSizeChange on <TextInput />', () => {
        const onChangeSpy = sinon.spy();
        const event = {target: {value: 'value'}};
        let props = {
            handleBatchSizeChange: onChangeSpy
        };
        const wrapper = shallow(<RecipeBatchSize {...props}/>);
        const textInput = wrapper.find('TextInput');

        textInput.simulate('change', event);

        onChangeSpy.calledOnce;
        expect(onChangeSpy.calledWith(event.target.value)).to.be.true
    });
});
