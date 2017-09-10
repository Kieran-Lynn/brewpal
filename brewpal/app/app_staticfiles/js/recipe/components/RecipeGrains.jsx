import React from 'react'
import PropTypes from 'prop-types';
import TextInput from "../../shared/components/TextInput";
import {filterNonNumber, getGrainOptions} from "../../shared/utils";
import Select from "../../shared/components/Select";

export default class RecipeGrains extends React.Component {

    updateGrainState = (updatedGrain, index) => {
        this.props.handleGrainChange(updatedGrain, index)
    };

    handleGrainTypeChange = (event, index) => {
        const updatedGrain = this.props.grains[index]
        updatedGrain.grainType = event.target.value;
        this.updateGrainState(updatedGrain, index);
    };

    handleGrainAmountChange = (event, index) => {
        const updatedGrain = this.props.grains[index]
        updatedGrain.amount = filterNonNumber(event.target.value);
        this.updateGrainState(updatedGrain, index);
    };

    buildGrainComponent = (grain, index) => {
        return (
            <div key={index}>
                <Select
                    label="Grain"
                    name="grainType"
                    value={grain.grainId}
                    options={this.buildGrainOptions()}
                    onChange={(event) => this.handleGrainTypeChange(event, index)}
                />
                <TextInput
                    label="Amount (lbs)"
                    name="grainAmount"
                    value={grain.amount}
                    onChange={(event) => this.handleGrainAmountChange(event, index)}
                />
            </div>
        )
    };

    buildGrainOptions = () => {
        //TODO: filter out already selected grains
        return getGrainOptions();
    };

    render() {
        const grains = this.props.grains;
        return (
            <div>
                {grains.map((grain, i) => (
                    this.buildGrainComponent(grain, i)
                ))}
                <button
                    type="button"
                    disabled={this.props.disableDelete}
                    onClick={() => this.props.handleDeleteGrain(this.props.index)}>Delete Grain
                </button>
            </div>
        )
    }
}

RecipeGrains.proptypes = {
    grains: PropTypes.object.required,
    handleDeleteGrain: PropTypes.func.required,
    handleGrainChange: PropTypes.func.required,
    disableDelete: PropTypes.bool.required
};