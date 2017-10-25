import 'jsdom-global/register'
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import { expect } from 'chai';
import TextInput from '../../../js/shared/components/TextInput';
import Adapter from 'enzyme-adapter-react-15';

configure({adapter: new Adapter()});

describe('<TextInput/>', () => {
    it('should have className equal to col-md-3', () => {
        const wrapper = shallow(<TextInput />);

        expect(wrapper.props().className).to.equal('col-md-3');
    });

    it('should have a <ControlLabel />', () => {
        const wrapper = shallow(<TextInput/>);

        expect(wrapper.find('ControlLabel')).to.have.length(1);
    });

    it('should have a <FormControl />', () => {
        const wrapper = shallow(<TextInput/>);

        expect(wrapper.find('FormControl')).to.have.length(1);
    });

    it('should pass props to FormControl', () => {
        const props = {
            'name': 'name',
            'value': "value",
            'onChange': () => {}
        };
        const wrapper = mount(<TextInput {...props}/>);
        const formControlProps = wrapper.find('FormControl').props();

        expect(formControlProps.type).to.equal('text');
        expect(formControlProps.name).to.equal(props.name);
        expect(formControlProps.value).to.equal(props.value);
        expect(formControlProps.onChange).to.equal(props.onChange);
    });

    it('should set the label inside ControlLabel', () => {
        const props = {
            'label': 'label'
        };
        const wrapper = mount(<TextInput {...props}/>);
        const controlLabel = wrapper.find('ControlLabel');

        expect(controlLabel.text()).to.equal(props.label);
    });
});