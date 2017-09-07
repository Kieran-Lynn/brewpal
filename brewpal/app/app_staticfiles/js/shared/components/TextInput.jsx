import React from 'react'
import PropTypes from 'prop-types';

export default class TextInput extends React.Component {
    render() {
        return (
            <div>
                <label>
                    {this.props.label}
                    <input
                        type="text"
                        name={this.props.name}
                        value={this.props.value}
                        onChange={this.props.onChange}
                    />
                </label>
            </div>
        )
    }
}

TextInput.PropTypes = {
    label: PropTypes.string,
    name: PropTypes.string.required,
    value: PropTypes.string.required,
    onChange: PropTypes.func
}