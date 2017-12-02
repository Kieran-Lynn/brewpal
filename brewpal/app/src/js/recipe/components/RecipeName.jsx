import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../shared/components/TextInput';

export default class RecipeName extends React.Component {
    static propTypes = {
        recipeName: PropTypes.string,
        handleRecipeNameChange: PropTypes.func.isRequired,
    }
    static defaultProps = {
        recipeName: '',
    }

    render() {
        return (
            <div className="row">
                <TextInput
                    label="Recipe Name"
                    name="name"
                    value={this.props.recipeName}
                    onChange={event => this.props.handleRecipeNameChange(event.target.value)}
                />
            </div>
        );
    }
}
