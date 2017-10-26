import 'jsdom-global/register'
import React from 'react';
import { configure, shallow, render } from 'enzyme';
import chai, { expect } from 'chai';
import Select from '../../../js/shared/components/Select';
import Adapter from 'enzyme-adapter-react-15';
import * as sinon from "sinon";
import sinonChai from 'sinon-chai';
chai.should();
chai.use(sinonChai)
configure({adapter: new Adapter()});

const props = {
    options: [
        {
            "value": "id",
            "option": "option"
        }
    ]
};
describe('<Select/>', () => {
    it('should have className equal to col-md-3', () => {
        const wrapper = shallow(<Select {...props} />);

        expect(wrapper.props().className).to.equal('col-md-3');
    });

    it('should have a <ControlLabel />', () => {
        const wrapper = shallow(<Select {...props} />);

        expect(wrapper.find('ControlLabel')).to.have.length(1);
    });

    it('should have a <FormControl />', () => {
        const wrapper = shallow(<Select {...props} />);

        expect(wrapper.find('FormControl')).to.have.length(1);
    });

    it('should pass props to FormControl', () => {
        let props = {
            options: [],
            name: 'name',
            value: "value",
        };
        const wrapper = shallow(<Select {...props}/>);
        const formControl = wrapper.find('FormControl');

        expect(formControl.prop('componentClass')).to.equal('select');
        expect(formControl.prop('name')).to.equal(props.name);
        expect(formControl.prop('value')).to.equal(props.value);
    });

    it('should set onChange on FormControl', () => {
        const onChangeStub = sinon.stub();
        let props = {
            options: [],
            index: '1',
            onChange: onChangeStub
        };
        const expectedOnChange = (event) => this.props.onChange(event, this.props.index);
        const wrapper = shallow(<Select {...props}/>);
        const formControl = wrapper.find('FormControl');

        formControl.simulate('change');

        onChangeStub.should.have.been.calledOnce;
    });

    it('should set the label inside ControlLabel', () => {
        let props = {
            options: [],
            label: 'label'
        };
        const wrapper = shallow(<Select {...props}/>);
        const controlLabel = wrapper.find('ControlLabel');

        expect(controlLabel.render().text()).to.equal(props.label);
    });

    it('should set the options based on the options passed through the props', () => {
        const wrapper = shallow(<Select {...props}/>);
        const formControl = wrapper.find('FormControl');

        expect(formControl.children()).to.have.length(props.options.length)
        expect(formControl.render().text()).to.be.equal(props.options[0].option)
    });
});