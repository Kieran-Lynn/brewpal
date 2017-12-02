import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import TextInput from '../../shared/components/TextInput';
import Select from '../../shared/components/Select';
import { filterNonNumber } from '../../shared/utils';

export default class RecipeHopRow extends React.Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        hop: PropTypes.object.isRequired,
        disableDelete: PropTypes.bool.isRequired,
        handleDeleteHop: PropTypes.func.isRequired,
        handleHopChange: PropTypes.func.isRequired,
    }
    handleHopTypeChange = (event, index) => {
        const updatedHop = this.props.hop;
        updatedHop.hopType = event.target.value;
        this.props.handleHopChange(updatedHop, index);
    };

    handleHopAmountChange = (event, index) => {
        const updatedHop = this.props.hop;
        updatedHop.amount = filterNonNumber(event.target.value);
        this.props.handleHopChange(updatedHop, index);
    };

    handleAlphaAcidChange = (event, index) => {
        const updatedHop = this.props.hop;
        updatedHop.alphaAcid = filterNonNumber(event.target.value);
        this.props.handleHopChange(updatedHop, index);
    };

    handleTimeChange = (event, index) => {
        const updatedHop = this.props.hop;
        updatedHop.time = filterNonNumber(event.target.value);
        this.props.handleHopChange(updatedHop, index);
    };

    handleHopUseChange = (event, index) => {
        const updatedHop = this.props.hop;
        updatedHop.hopUse = event.target.value;
        this.props.handleHopChange(updatedHop, index);
    };

    buildHopUseOptions = () => [
        { value: 'boil', option: 'Boil' },
        { value: 'dryHop', option: 'Dry Hop' },
        { value: 'whirlpool', option: 'Whirlpool' },
        { value: 'hopback', option: 'Hopack' },
    ]

    render() {
        const {
            index,
            hop,
        } = this.props;
        return (
            <div className="row">
                <TextInput
                    label="Hop"
                    name="hop_type"
                    value={hop.hopType}
                    onChange={event => this.handleHopTypeChange(event, index)}
                />
                <TextInput
                    label="Amount (oz)"
                    name="hop_amount"
                    value={hop.amount}
                    onChange={event => this.handleHopAmountChange(event, index)}
                />
                <TextInput
                    label="Alpha Acid"
                    name="alpha_acid"
                    value={hop.alphaAcid}
                    onChange={event => this.handleAlphaAcidChange(event, index)}
                />
                <TextInput
                    label={hop.hopUse === 'boil' ? 'Time (min)' : 'Time (days)'}
                    name="time"
                    value={hop.time}
                    onChange={event => this.handleTimeChange(event, index)}
                />
                <Select
                    index={index}
                    name="hop_use"
                    label="Use"
                    value={hop.hopUse}
                    options={this.buildHopUseOptions()}
                    onChange={event => this.handleHopUseChange(event, index)}
                />
                <Button
                    type="button"
                    disabled={this.props.disableDelete}
                    onClick={() => this.props.handleDeleteHop(hop)}
                >Delete Hop
                </Button>
            </div>
        );
    }
}
