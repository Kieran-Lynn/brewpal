import React from 'react'
import PropTypes from 'prop-types';
import TextInput from "../../shared/components/TextInput";

export default class RecipeStyle extends React.Component {
    render() {
        return (
            <div className="row">
                <TextInput
                    label="Style"
                    name="style"
                    value={this.props.style}
                    onChange={event => this.props.handleStyleChange(event.target.value)}
                />
            </div>
        )
    }
}

RecipeStyle.PropTypes = {
    style: PropTypes.string,
    handleStyleChange: PropTypes.func.isRequired
};