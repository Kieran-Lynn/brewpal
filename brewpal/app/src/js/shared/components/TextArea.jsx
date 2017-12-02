import React from 'react';
import PropTypes from 'prop-types';
import {
    ControlLabel,
    FormControl,
    FormGroup,
} from 'react-bootstrap';

export default class TextArea extends React.Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.isRequired,
    }

    render() {
        return (
            <FormGroup className="col-md-3">
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl
                    componentClass="textarea"
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </FormGroup>
        );
    }
}
