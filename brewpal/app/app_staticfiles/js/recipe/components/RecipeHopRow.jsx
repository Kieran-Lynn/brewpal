import React from 'react'
import PropTypes from 'prop-types';
import TextInput from '../../shared/components/TextInput';
import Select from '../../shared/components/Select'
import { Button } from 'react-bootstrap';
import { filterNonNumber } from '../../shared/utils';

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

    buildHopUseOptions = () => {
        return [
            { value:"boil", option :"Boil" },
            { value:"dryHop", option :"Dry Hop" },
            { value:"whirlpool", option :"Whirlpool" },
            { value:"hopback", option :"Hopack" }
        ]
    }

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
                    <Select
                        index={index}
                        name="hopUse"
                        label="Use"
                        value={hop.hopUse}
                        options={this.buildHopUseOptions()}
                        onChange={(event) => this.handleHopUseChange(event, index)}
                    />
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