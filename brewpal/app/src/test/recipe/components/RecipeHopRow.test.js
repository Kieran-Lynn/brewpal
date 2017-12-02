import 'jsdom-global/register'
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import RecipeHopRow from '../../../js/recipe/components/RecipeHopRow';
import Adapter from 'enzyme-adapter-react-15';
import * as sinon from 'sinon';
chai.use(sinonChai);
configure({adapter: new Adapter()});

const handleHopChangeSpy = sinon.spy();
const handleDeleteHopSpy = sinon.spy();
let defaultProps = { }

describe('<RecipeHopRow />', () => {
    beforeEach( () => {
        defaultProps = {
            index: 0,
            hop: {
                hopType: 'Mosiac',
                alphaAcid: '10.0',
                amount: '2.0',
                time: '10',
                hopUse: 'boil'
            },
            disableDelete: true,
            handleHopChange: handleHopChangeSpy,
            handleDeleteHop: handleDeleteHopSpy
        }
        handleHopChangeSpy.reset();
        handleDeleteHopSpy.reset();
    });

    it("should be a div with the classname row", () => {
        const wrapper = shallow(<RecipeHopRow {...defaultProps} />);
        
        expect(wrapper.type()).to.equal('div');
        expect(wrapper.prop('className')).to.equal('row');
    });

    it("renders one <Select /> with the correct props", () => {
        const expectedHopOptions = [
            { value:"boil", option :"Boil" },
            { value:"dryHop", option :"Dry Hop" },
            { value:"whirlpool", option :"Whirlpool" },
            { value:"hopback", option :"Hopack" }
        ];
        const wrapper = shallow(<RecipeHopRow {...defaultProps} />);
        const hopUseDropdown = wrapper.find('Select');

        expect(hopUseDropdown).to.have.length(1);
        expect(hopUseDropdown.prop('index')).to.equal(defaultProps.index);
        expect(hopUseDropdown.prop('label')).to.equal('Use');
        expect(hopUseDropdown.prop('name')).to.equal('hop_use');
        expect(hopUseDropdown.prop('value')).to.equal(defaultProps.hop.hopUse);
        expect(hopUseDropdown.prop('options')).to.deep.equal(expectedHopOptions);
    });

    it("calls handleHopChange with the updated hop use when the Select option is changed", () => {
        const hopUse = 'whirlpool';
        const expectedHop = {
            hopType: 'Mosiac',
            alphaAcid: '10.0',
            amount: '2.0',
            time: '10',
            hopUse: hopUse
        };
        const event = {
            target: {
                value: hopUse
            }
        }
        const wrapper = shallow(<RecipeHopRow {...defaultProps} />);
        const hopUseDropdown = wrapper.find('Select');

        hopUseDropdown.simulate('change', event);

        expect(handleHopChangeSpy).to.have.been.calledOnce;
        expect(handleHopChangeSpy).to.have.been.calledWithMatch(expectedHop, defaultProps.index);
    });

    it("renders the Hop Type <TextInput /> with the correct props", () => {
        const wrapper = shallow(<RecipeHopRow {...defaultProps} />);
        const hopTypeInput = wrapper.find('TextInput').at(0);

        expect(hopTypeInput.prop('label')).to.equal('Hop');
        expect(hopTypeInput.prop('name')).to.equal('hop_type');
        expect(hopTypeInput.prop('value')).to.equal(defaultProps.hop.hopType);
    });

    it("calls handleHopChange with the updated hop type when the Hop Type TextInput option is changed", () => {
        const hopType = 'Galaxy';
        const expectedHop = {
            hopType: hopType,
            alphaAcid: '10.0',
            amount: '2.0',
            time: '10',
            hopUse: 'boil'
        };
        const event = {
            target: {
                value: hopType
            }
        }
        const wrapper = shallow(<RecipeHopRow {...defaultProps} />);
        const hopTypeInput = wrapper.find('TextInput').at(0);

        hopTypeInput.simulate('change', event);

        expect(handleHopChangeSpy).to.have.been.calledOnce;
        expect(handleHopChangeSpy).to.have.been.calledWithMatch(expectedHop, defaultProps.index);
    });

    it("renders the Hop Amount <TextInput /> with the correct props", () => {
        const wrapper = shallow(<RecipeHopRow {...defaultProps} />);
        const hopTypeInput = wrapper.find('TextInput').at(1);

        expect(hopTypeInput.prop('label')).to.equal('Amount (oz)');
        expect(hopTypeInput.prop('name')).to.equal('hop_amount');
        expect(hopTypeInput.prop('value')).to.equal(defaultProps.hop.amount);
    });

    it("calls handleHopChange with the updated hop amount when the Hop Amount TextInput option is changed", () => {
        const hopAmount = '5';
        const expectedHop = {
            hopType: 'Mosiac',
            alphaAcid: '10.0',
            amount: hopAmount,
            time: '10',
            hopUse: 'boil'
        };
        const event = {
            target: {
                value: hopAmount
            }
        }
        const wrapper = shallow(<RecipeHopRow {...defaultProps} />);
        const hopTypeInput = wrapper.find('TextInput').at(1);

        hopTypeInput.simulate('change', event);

        expect(handleHopChangeSpy).to.have.been.calledOnce;
        expect(handleHopChangeSpy).to.have.been.calledWithMatch(expectedHop, defaultProps.index);
    });

    it("renders the Hop Alpha Acid <TextInput /> with the correct props", () => {
        const wrapper = shallow(<RecipeHopRow {...defaultProps} />);
        const hopTypeInput = wrapper.find('TextInput').at(2);

        expect(hopTypeInput.prop('label')).to.equal('Alpha Acid');
        expect(hopTypeInput.prop('name')).to.equal('alpha_acid');
        expect(hopTypeInput.prop('value')).to.equal(defaultProps.hop.alphaAcid);
    });

    it("calls handleHopChange with the updated hop alpha acid when the Hop Alpha Acid TextInput option is changed", () => {
        const alphaAcid = '12';
        const expectedHop = {
            hopType: 'Mosiac',
            alphaAcid: alphaAcid,
            amount: '2.0',
            time: '10',
            hopUse: 'boil'
        };
        const event = {
            target: {
                value: alphaAcid
            }
        }
        const wrapper = shallow(<RecipeHopRow {...defaultProps} />);
        const hopTypeInput = wrapper.find('TextInput').at(2);

        hopTypeInput.simulate('change', event);

        expect(handleHopChangeSpy).to.have.been.calledOnce;
        expect(handleHopChangeSpy).to.have.been.calledWithMatch(expectedHop, defaultProps.index);
    });

    it("renders the Hop Time <TextInput /> with the correct props", () => {
        const wrapper = shallow(<RecipeHopRow {...defaultProps} />);
        const hopTypeInput = wrapper.find('TextInput').at(3);

        expect(hopTypeInput.prop('label')).to.equal('Time (min)');
        expect(hopTypeInput.prop('name')).to.equal('time');
        expect(hopTypeInput.prop('value')).to.equal(defaultProps.hop.time);
    });

    it("renders the Hop Time <TextInput /> with the correct label when the hopuse is not boil", () => {
        defaultProps.hop.hopUse = 'Whirlpool';
        const wrapper = shallow(<RecipeHopRow {...defaultProps} />);
        const hopTypeInput = wrapper.find('TextInput').at(3);

        expect(hopTypeInput.prop('label')).to.equal('Time (days)');
        expect(hopTypeInput.prop('name')).to.equal('time');
        expect(hopTypeInput.prop('value')).to.equal(defaultProps.hop.time);
    });

    it("calls handleHopChange with the updated hop time when the Hop Time TextInput option is changed", () => {
        const time = '30';
        const expectedHop = {
            hopType: 'Mosiac',
            alphaAcid: '10.0',
            amount: '2.0',
            time: time,
            hopUse: 'boil'
        };
        const event = {
            target: {
                value: time
            }
        }
        const wrapper = shallow(<RecipeHopRow {...defaultProps} />);
        const hopTypeInput = wrapper.find('TextInput').at(3);

        hopTypeInput.simulate('change', event);

        expect(handleHopChangeSpy).to.have.been.calledOnce;
        expect(handleHopChangeSpy).to.have.been.calledWithMatch(expectedHop, defaultProps.index);
    });

    it("renders one <Button /> with the correct props", () => {
        const wrapper = shallow(<RecipeHopRow {...defaultProps} />);
        const deleteHopBUtton = wrapper.find('Button');

        expect(deleteHopBUtton).to.have.length(1);
        expect(deleteHopBUtton.prop('type')).to.equal('button');
        expect(deleteHopBUtton.prop('disabled')).to.equal(defaultProps.disableDelete);
    });

    it("calls handleDeleteHop when the delete hop button is clicked", () => {
        const wrapper = shallow(<RecipeHopRow {...defaultProps} />);
        const textInputComponent = wrapper.find('Button');

        textInputComponent.simulate('click');

        expect(handleDeleteHopSpy).to.have.been.calledOnce;
        expect(handleDeleteHopSpy).to.have.been.calledWithMatch(defaultProps.hop);
    });
});