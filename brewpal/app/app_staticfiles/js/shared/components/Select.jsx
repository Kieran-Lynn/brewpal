import React from 'react'
import PropTypes from 'prop-types';
import {
    ControlLabel,
    FormControl,
    FormGroup
} from "react-bootstrap";

export default class Select extends React.Component {

    getOptionElements = () => {
        let options = [];
        for (let option of this.props.options) {
            options.push(<option key={option.value} value={option.value}>{option.option}</option>)
        }

        return options;
    };

    render() {
        return (
            <FormGroup className="col-md-3">
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl
                    componentClass="select"
                    name={this.props.name}
                    value={this.props.value}
                    onChange={(event) => this.props.onChange(event, this.props.index)}
                >
                    {this.getOptionElements()}
                </FormControl>
            </FormGroup>
        )
    }
}

Select.PropTypes = {
    label: PropTypes.string,
    index: PropTypes.number.required,
    name: PropTypes.string.required,
    value: PropTypes.string.required,
    options: PropTypes.array.required,
    onChange: PropTypes.func.required
};