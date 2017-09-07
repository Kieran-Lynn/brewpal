import React from 'react'
import TextInput from "../../shared/components/TextInput";
import { filterNonNumber } from "../../shared/utils";
import PropTypes from 'prop-types';

export default class RecipeHop extends React.Component {
    updateHopState = (updatedHop) => {
        this.props.handleHopChange(this.props.index, updatedHop)
    };

    handleHopTypeChange = (event) => {
        const updatedHop = this.props.hop;
        updatedHop.hopType = event.target.value;
        this.updateHopState(updatedHop);
    };

    handleHopAmountChange = (event) => {
        const updatedHop = this.props.hop;
        updatedHop.amount = filterNonNumber(event.target.value);
        this.updateHopState(updatedHop);
    };

    handleAlphaAcidChange = (event) => {
        const updatedHop = this.props.hop;
        updatedHop.alphaAcid = filterNonNumber(event.target.value);
        this.updateHopState(updatedHop);
    };

    handleTimeChange = (event) => {
        const updatedHop = this.props.hop;
        updatedHop.time = filterNonNumber(event.target.value);
        this.updateHopState(updatedHop);
    };

    handleHopUseChange = (event) => {
        const updatedHop = this.props.hop;
        updatedHop.hopUse = event.target.value;
        this.updateHopState(updatedHop);
    };

    render() {
        const hop = this.props.hop;
        return (
            <div>
                <TextInput
                    label="Hop: "
                    name="hopType"
                    value={hop.hopType}
                    onChange={this.handleHopTypeChange}
                />
                <TextInput
                    label="Amount (oz)"
                    name="hopAmount"
                    value={hop.amount}
                    onChange={this.handleHopAmountChange}
                />
                <TextInput
                    label="Alpha Acid"
                    name="alphaAcid"
                    value={hop.alphaAcid}
                    onChange={this.handleAlphaAcidChange}
                />
                <TextInput
                    label={hop.hopUse === "boil" ? "Time (min)" : "Time (days)"}
                    name="time"
                    value={hop.time}
                    onChange={this.handleTimeChange}
                />
                <select
                    name="hopUse"
                    value={hop.hopUse}
                    onChange={this.handleHopUseChange}
                >
                    <option value="boil">Boil</option>
                    <option value="dryHop">Dry Hop</option>
                </select>
                <button
                    type="button"
                    disabled={this.props.disableDelete}
                    onClick={() => this.props.handleDeleteHop(this.props.index)}>Delete Hop
                </button>
            </div>
        )
    }
}


RecipeHop.proptypes = {
    hop: PropTypes.object.required,
    handleDeleteHop: PropTypes.func.required,
    handleHopChange: PropTypes.func.required,
    index: PropTypes.number.required,
    disableDelete: PropTypes.bool.required
};