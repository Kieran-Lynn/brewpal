import React from 'react';
import PropTypes from 'prop-types';
import {
    ControlLabel,
    FormControl,
    FormGroup,
} from 'react-bootstrap';

export default class Select extends React.Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        index: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        options: PropTypes.array.isRequired,
        onChange: PropTypes.func.isRequired,
    }

    getOptionElements = () => {
        const options = [];
        this.props.options.forEach((option) => {
            options.push(<option key={option.value} value={option.value}>{option.option}</option>);
        });

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
                    onChange={event => this.props.onChange(event, this.props.index)}
                >
                    {this.getOptionElements()}
                </FormControl>
            </FormGroup>
        );
    }
}
