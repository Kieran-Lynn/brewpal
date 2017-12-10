import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import Adapter from 'enzyme-adapter-react-15';
import * as sinon from 'sinon';
import RecipeYeast from '../../../js/recipe/components/RecipeYeast';

chai.use(sinonChai);
configure({ adapter: new Adapter() });

const defaultProps = {
    yeast: { yeastType: 'yeastName', fermentationTemp: '65' },
};

describe('<RecipeYeast/>', () => {
    it('should have className equal to row', () => {
        const wrapper = shallow(<RecipeYeast {...defaultProps} />);

        expect(wrapper.props().className).to.equal('row');
    });

    it('should render 2 <TextInput />', () => {
        const wrapper = shallow(<RecipeYeast {...defaultProps} />);

        expect(wrapper.find('TextInput')).to.have.length(2);
    });

    it('should render the yeast type <TextInput /> with the proper props', () => {
        const wrapper = shallow(<RecipeYeast {...defaultProps} />);
        const yeastTypeInput = wrapper.find('TextInput').at(0);

        expect(yeastTypeInput.prop('label')).to.equal('Yeast');
        expect(yeastTypeInput.prop('name')).to.equal('yeast');
        expect(yeastTypeInput.prop('required')).to.be.true;
        expect(yeastTypeInput.prop('value')).to.equal(defaultProps.yeast.yeastType);
    });

    it('should render the fermentation temp <TextInput /> with the proper props', () => {
        const wrapper = shallow(<RecipeYeast {...defaultProps} />);
        const fermentationTempInput = wrapper.find('TextInput').at(1);

        expect(fermentationTempInput.prop('label')).to.equal('Fermentation Temp (F)');
        expect(fermentationTempInput.prop('name')).to.equal('fermentation_temp');
        expect(fermentationTempInput.prop('required')).to.be.true;
        expect(fermentationTempInput.prop('value')).to.equal(defaultProps.yeast.fermentationTemp);
    });

    it('should call handleYeastChange with the updated yeast type when its changed', () => {
        const handleYeastChangeSpy = sinon.spy();
        const newYeastType = 'newYeastType';
        const event = { target: { value: newYeastType } };
        const expectedYeast = { yeastType: newYeastType, fermentationTemp: '65' };
        const props = {
            ...defaultProps,
            handleYeastChange: handleYeastChangeSpy,
        };
        const wrapper = shallow(<RecipeYeast {...props} />);
        const yeastTypeInput = wrapper.find('TextInput').at(0);

        yeastTypeInput.simulate('change', event);

        expect(handleYeastChangeSpy).to.have.been.calledOnce;
        expect(handleYeastChangeSpy).to.have.been.calledWithMatch(expectedYeast);
    });

    it('should call handleYeastChange with the updated fermentation temp when its changed', () => {
        const handleYeastChangeSpy = sinon.spy();
        const newFermTemp = '70';
        const event = { target: { value: newFermTemp } };
        const expectedYeast = { yeastType: 'yeastName', fermentationTemp: newFermTemp };
        const props = {
            ...defaultProps,
            handleYeastChange: handleYeastChangeSpy,
        };
        const wrapper = shallow(<RecipeYeast {...props} />);
        const fermentationTempInput = wrapper.find('TextInput').at(1);

        fermentationTempInput.simulate('change', event);

        expect(handleYeastChangeSpy).to.have.been.calledOnce;
        expect(handleYeastChangeSpy).to.have.been.calledWithMatch(expectedYeast);
    });
});
