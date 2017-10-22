import React from 'react'
import PropTypes from 'prop-types';
import TextArea from "../../shared/components/TextArea";

export default class RecipeDescription extends React.Component {
    render() {
        return (
            <div className="row">
                <TextArea
                    label="Description"
                    name="description"
                    value={this.props.description}
                    onChange={event => this.props.handleDescriptionChange(event.target.value)}
                />
            </div>
        )
    }
}

RecipeDescription.PropTypes = {
    description: PropTypes.string,
    handleDescriptionChange: PropTypes.func.isRequired
};