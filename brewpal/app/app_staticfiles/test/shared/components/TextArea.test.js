import 'jsdom-global/register'
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import { expect } from 'chai';
import TextArea from '../../js/shared/components/TextArea';
import Adapter from 'enzyme-adapter-react-15';

configure({adapter: new Adapter()});

describe('<TextArea/>', () => {
    it('should have className equal to col-md-3', () => {
        const wrapper = shallow(<TextArea />);

        expect(wrapper.props().className).to.equal('col-md-3');
    });

    it('should have a <ControlLabel />', () => {
        const wrapper = shallow(<TextArea/>);

        expect(wrapper.find('ControlLabel')).to.have.length(1);
    });

    it('should have a <FormControl />', () => {
        const wrapper = shallow(<TextArea/>);

        expect(wrapper.find('FormControl')).to.have.length(1);
    });

    it('should pass props to FormControl', () => {
        const props = {
            'name': 'name',
            'value': "value",
            'onChange': () => {}
        };
        const wrapper = mount(<TextArea {...props}/>);
        const formControlProps = wrapper.find('FormControl').props();

        expect(formControlProps.componentClass).to.equal('textarea');
        expect(formControlProps.name).to.equal(props.name);
        expect(formControlProps.value).to.equal(props.value);
        expect(formControlProps.onChange).to.equal(props.onChange);
    });

    it('should set the label inside ControlLabel', () => {
        const props = {
            'label': 'label'
        };
        const wrapper = mount(<TextArea {...props}/>);
        const controlLabel = wrapper.find('ControlLabel');

        expect(controlLabel.text()).to.equal(props.label);
    });
});