import React from 'react';
import { configure, shallow, render } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-15';
import TextInput from '../../../js/shared/components/TextInput';

configure({ adapter: new Adapter() });

describe('<TextInput/>', () => {
    it('should have className equal to col-md-3', () => {
        const wrapper = shallow(<TextInput />);

        expect(wrapper.props().className).to.equal('col-md-3');
    });

    it('should have a <ControlLabel />', () => {
        const wrapper = shallow(<TextInput />);

        expect(wrapper.find('ControlLabel')).to.have.length(1);
    });

    it('should have a <FormControl />', () => {
        const wrapper = shallow(<TextInput />);

        expect(wrapper.find('FormControl')).to.have.length(1);
    });

    it('should pass props to FormControl', () => {
        const props = {
            name: 'name',
            value: 'value',
            onChange: () => {},
        };
        const wrapper = shallow(<TextInput {...props} />);
        const formControl = wrapper.find('FormControl');

        expect(formControl.prop('type')).to.equal('text');
        expect(formControl.prop('name')).to.equal(props.name);
        expect(formControl.prop('value')).to.equal(props.value);
        expect(formControl.prop('onChange')).to.equal(props.onChange);
    });

    it('should set the label inside ControlLabel', () => {
        const props = {
            label: 'label',
        };
        const wrapper = render(<TextInput {...props} />);

        expect(wrapper.text()).to.equal(props.label);
    });
});
