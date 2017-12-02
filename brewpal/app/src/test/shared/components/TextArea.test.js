import React from 'react';
import { configure, shallow, render } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-15';
import TextArea from '../../../js/shared/components/TextArea';

configure({ adapter: new Adapter() });

describe('<TextArea/>', () => {
    it('should have className equal to col-md-3', () => {
        const wrapper = shallow(<TextArea />);

        expect(wrapper.props().className).to.equal('col-md-3');
    });

    it('should have a <ControlLabel />', () => {
        const wrapper = shallow(<TextArea />);

        expect(wrapper.find('ControlLabel')).to.have.length(1);
    });

    it('should have a <FormControl />', () => {
        const wrapper = shallow(<TextArea />);

        expect(wrapper.find('FormControl')).to.have.length(1);
    });

    it('should pass props to FormControl', () => {
        const props = {
            name: 'name',
            value: 'value',
            onChange: () => {},
        };
        const wrapper = shallow(<TextArea {...props} />);
        const formControl = wrapper.find('FormControl');

        expect(formControl.prop('componentClass')).to.equal('textarea');
        expect(formControl.prop('name')).to.equal(props.name);
        expect(formControl.prop('value')).to.equal(props.value);
        expect(formControl.prop('onChange')).to.equal(props.onChange);
    });

    it('should set the label inside ControlLabel', () => {
        const props = {
            label: 'label',
        };
        const wrapper = render(<TextArea {...props} />);

        expect(wrapper.text()).to.equal(props.label);
    });
});
