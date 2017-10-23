import React from 'react'
import PropTypes from 'prop-types';
import {
    ControlLabel,
    FormControl,
    FormGroup
} from "react-bootstrap";

export default class TextInput extends React.Component {
    render() {
        return (
            <FormGroup className="col-md-3">
                <ControlLabel>{this.props.label}</ControlLabel>
                    <FormControl
                        type="text"
                        name={this.props.name}
                        value={this.props.value}
                        onChange={this.props.onChange}
                    />
            </FormGroup>
        )
    }
}

TextInput.PropTypes = {
    label: PropTypes.string,
    name: PropTypes.string.required,
    value: PropTypes.string.required,
    onChange: PropTypes.func
};