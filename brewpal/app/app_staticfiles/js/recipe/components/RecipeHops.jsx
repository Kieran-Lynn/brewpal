import React from 'react'
import TextInput from "../../shared/components/TextInput";
import {filterNonNumber} from "../../shared/utils";
import PropTypes from 'prop-types';
import {Button} from "react-bootstrap";

export default class RecipeHops extends React.Component {
    updateHopState = (updatedHop, index) => {
        this.props.handleHopChange(updatedHop, index)
    };

    handleHopTypeChange = (event, index) => {
        const updatedHop = this.props.hops[index];
        updatedHop.hopType = event.target.value;
        this.updateHopState(updatedHop, index);
    };

    handleHopAmountChange = (event, index) => {
        const updatedHop = this.props.hops[index];
        updatedHop.amount = filterNonNumber(event.target.value);
        this.updateHopState(updatedHop, index);
    };

    handleAlphaAcidChange = (event, index) => {
        const updatedHop = this.props.hops[index];
        updatedHop.alphaAcid = filterNonNumber(event.target.value);
        this.updateHopState(updatedHop, index);
    };

    handleTimeChange = (event, index) => {
        const updatedHop = this.props.hops[index];
        updatedHop.time = filterNonNumber(event.target.value);
        this.updateHopState(updatedHop, index);
    };

    handleHopUseChange = (event, index) => {
        const updatedHop = this.props.hops[index];
        updatedHop.hopUse = event.target.value;
        this.updateHopState(updatedHop, index);
    };

    buildHopComponent = (hop, index) => {
        return (
            <div key={index} className="row">
                <TextInput
                        label="Hop: "
                        name="hopType"
                        value={hop.hopType}
                        onChange={(event) => this.handleHopTypeChange(event, index)}
                    />
                    < TextInput
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
    };

    render() {
        const hops = this.props.hops;
        return (
            <div>
                {hops.map((hop, index) => (
                    this.buildHopComponent(hop, index)
                    ))}
                <Button type="button" onClick={this.props.handleAddHop}>
                    Add Hop
                </Button>
            </div>
        )
    }
}


RecipeHops.proptypes = {
    hops: PropTypes.array.required,
    handleDeleteHop: PropTypes.func.required,
    handleHopChange: PropTypes.func.required,
    handleAddHop: PropTypes.func.required,
    disableDelete: PropTypes.bool.required
};