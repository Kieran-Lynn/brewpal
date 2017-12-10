import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import TextInput from '../../shared/components/TextInput';
import Select from '../../shared/components/Select';
import {
    getGrainOptions,
    filterNonNumber,
} from '../../shared/utils';

export default class RecipeGrainRow extends React.Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        grain: PropTypes.object.isRequired,
        handleDeleteGrain: PropTypes.func.isRequired,
        handleGrainChange: PropTypes.func.isRequired,
        disableDelete: PropTypes.bool.isRequired,
    }

    handleGrainTypeChange = (event, index) => {
        const updatedGrain = this.props.grain;
        updatedGrain.grainType = event.target.value;
        this.props.handleGrainChange(updatedGrain, index);
    };

    handleGrainAmountChange = (event, index) => {
        const updatedGrain = this.props.grain;
        updatedGrain.amount = filterNonNumber(event.target.value);
        this.props.handleGrainChange(updatedGrain, index);
    };

    buildGrainOptions = () =>
        // TODO: filter out already selected grains
        getGrainOptions()
    ;

    render() {
        const {
            index,
            grain,
        } = this.props;
        return (
            <div className="row">
                <Select
                    index={index}
                    label="Grain"
                    name={`grains[${index}][grain_type]`}
                    value={grain.grainType}
                    options={this.buildGrainOptions()}
                    required
                    onChange={event => this.handleGrainTypeChange(event, index)}
                />
                <TextInput
                    label="Amount (lbs)"
                    name={`grains[${index}][amount]`}
                    value={grain.amount}
                    required
                    onChange={event => this.handleGrainAmountChange(event, index)}
                />
                <Button
                    type="button"
                    disabled={this.props.disableDelete}
                    onClick={() => this.props.handleDeleteGrain(grain)}
                >
                    DeleteGrain
                </Button>
            </div>
        );
    }
}

