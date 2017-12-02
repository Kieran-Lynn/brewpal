import React from 'react';
import PropTypes from 'prop-types';
import {
    ControlLabel,
    FormControl,
    FormGroup,
} from 'react-bootstrap';

export default class TextInput extends React.Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    }
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
        );
    }
}
