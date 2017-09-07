import React from 'react'
import PropTypes from 'prop-types';
import TextInput from "../../shared/components/TextInput";
import {filterNonNumber} from "../../shared/utils";

export default class RecipeGrain extends React.Component {

    updateGrainState = (updatedGrain) => {
        this.props.handleGrainChange(this.props.index, updatedGrain)
    };

    handleGrainTypeChange = (event) => {
        const updatedGrain = this.props.grain;
        updatedGrain.grainType = event.target.value;
        this.updateGrainState(updatedGrain);
    };

    handleGrainAmountChange = (event) => {
        const updatedGrain = this.props.grain;
        updatedGrain.amount = filterNonNumber(event.target.value);
        this.updateGrainState(updatedGrain);
    };

    render() {
        const grain = this.props.grain;
        return (
            <div>
                <TextInput
                    label="Grain"
                    name="grainType"
                    value={grain.grainType}
                    onChange={this.handleGrainTypeChange}
                />
                <TextInput
                    label="Amount (lbs)"
                    name="grainAmount"
                    value={grain.amount}
                    onChange={this.handleGrainAmountChange}
                />
                <button
                    type="button"
                    disabled={this.props.disableDelete}
                    onClick={() => this.props.handleDeleteGrain(this.props.index)}>Delete Grain
                </button>
            </div>
        )
    }
}

RecipeGrain.proptypes = {
    grain: PropTypes.object.required,
    handleDeleteGrain: PropTypes.func.required,
    handleGrainChange: PropTypes.func.required,
    index: PropTypes.number.required,
    disableDelete: PropTypes.bool.required
};