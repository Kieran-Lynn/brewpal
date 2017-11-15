import React from 'react'
import PropTypes from 'prop-types';
import TextInput from "../../shared/components/TextInput";
import Select from "../../shared/components/Select";
import { Button } from "react-bootstrap";
import {
    getGrainOptions,
    filterNonNumber
} from "../../shared/utils";

export default class RecipeGrainRow extends React.Component {
    handleGrainTypeChange = (event, index) => {
        const updatedGrain = this.props.grain;
        updatedGrain.grainType = event.target.value;

        this.props.updateGrainStore(updatedGrain, index);
    };

    handleGrainAmountChange = (event, index) => {
        const updatedGrain = this.props.grain;;
        updatedGrain.amount = filterNonNumber(event.target.value);
        this.props.updateGrainStore(updatedGrain, index);
    };

    buildGrainOptions = () => {
        //TODO: filter out already selected grains
        return getGrainOptions();
    };

    render() {
        const index = this.props.index;
        const grain = this.props.grain;
        return(
            <div className="row">
                <Select
                    index={index}
                    label="Grain"
                    name="grainType"
                    value={grain.grainType}
                    options={this.buildGrainOptions()}
                    onChange={(event) => this.handleGrainTypeChange(event, index)}
                />
                <TextInput
                    label="Amount (lbs)"
                    name="grainAmount"
                    value={grain.amount}
                    onChange={(event) => this.handleGrainAmountChange(event, index)}
                />
                <Button
                    type="button"
                    disabled={this.props.disableDelete}
                    onClick={() => this.props.handleDeleteGrain(grain)}
                >
                    DeleteGrain
                </Button>
            </div>
        )
    }
}

RecipeGrainRow.proptypes = {
    grain: PropTypes.object.required,
    handleDeleteGrain: PropTypes.func.required,
    updateGrainStore: PropTypes.func.required,
    disableDelete: PropTypes.bool.required
};