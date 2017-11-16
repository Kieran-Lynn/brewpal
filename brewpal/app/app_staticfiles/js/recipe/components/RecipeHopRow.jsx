import React from 'react'
import PropTypes from 'prop-types';
import TextInput from "../../shared/components/TextInput";
import { Button } from "react-bootstrap";
import { filterNonNumber } from "../../shared/utils";

export default class RecipeHopRow extends React.Component {
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

    render() {
        const index = this.props.index;
        const hop = this.props.hop;
        return (
            <div className="row">
                <TextInput
                        label="Hop: "
                        name="hopType"
                        value={hop.hopType}
                        onChange={(event) => this.handleHopTypeChange(event, index)}
                    />
                    <TextInput
                        label="Amount (oz)"
                        name="hopAmount"
                        value={hop.amount}
                        onChange={(event) => this.handleHopAmountChange(event, index)}
                    />
                    <TextInput
                        label="Alpha Acid"
                        name="alphaAcid"
                        value={hop.alphaAcid}
                        onChange={(event) => this.handleAlphaAcidChange(event, index)}
                    />
                    <TextInput
                        label={hop.hopUse === "boil" ? "Time (min)" : "Time (days)"}
                        name="time"
                        value={hop.time}
                        onChange={(event) => this.handleTimeChange(event, index)}
                    />
                    <select
                        name="hopUse"
                        value={hop.hopUse}
                        onChange={(event) => this.handleHopUseChange(event, index)}
                    >
                        <option value="boil">Boil</option>
                        <option value="dryHop">Dry Hop</option>
                        <option value="whirlpool">Whirlpool</option>
                        <option value="hopback">Hopback</option>
                    </select>
                    <Button
                        type="button"
                        disabled={this.props.disableDelete}
                        onClick={() => this.props.handleDeleteHop(hop)}>Delete Hop
                    </Button>
            </div>
        )
    }
}

RecipeHopRow.PropTypes = {
    index: PropTypes.number.required,
    hop: PropTypes.object.required,
    disableDelete: PropTypes.bool.required,
    handleDeleteHop: PropTypes.func.required,
    handleHopChange: PropTypes.func.required,
}