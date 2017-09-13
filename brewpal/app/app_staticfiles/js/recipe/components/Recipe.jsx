import React from 'react'
import PropTypes from 'prop-types';
import TextInput from '../../shared/components/TextInput'
import TextArea from '../../shared/components/TextArea'
import RecipeYeastContainer from "../containers/RecipeYeastContainer";
import RecipeGrainsContainer from "../containers/RecipeGrainsContainer";
import RecipeHopsContainer from "../containers/RecipeHopsContainer";

export default class Recipe extends React.Component {
    render() {
        return (
            <div>
                <h1>Recipe</h1>
                <form>
                    <TextInput
                        label="Recipe Name :"
                        name="recipeName"
                        value={this.props.recipeName}
                        onChange={event => this.props.handleRecipeNameChange(event.target.value)}
                    />
                    <TextInput
                        label="Style :"
                        name="style"
                        value={this.props.style}
                        onChange={event => this.props.handleStyleChange(event.target.value)}
                    />
                    <TextInput
                        label="Batch Size (gal):"
                        name="batchSize"
                        value={this.props.batchSize}
                        onChange={event => this.props.handleBatchSizeChange(event.target.value)}
                    />
                    <TextArea
                        label="Description :"
                        name="description"
                        value={this.props.description}
                        onChange={event => this.props.handleDescriptionChange(event.target.value)}
                    />
                    <br/>
                    <RecipeYeastContainer/>
                    <br/>
                    <br/>
                    <br/>
                    <RecipeGrainsContainer />
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <RecipeHopsContainer />
                </form>
            </div>
        )
    }
}

Recipe.PropTypes = {
    batchSize: PropTypes.string.required,
    handleBatchSizeChange: PropTypes.func.required,
    description: PropTypes.string.required,
    handleDescriptionChange: PropTypes.func.required,
    recipeName: PropTypes.string.required,
    handleRecipeNameChange: PropTypes.func.required,
    style: PropTypes.string.required,
    handleStyleChange: PropTypes.func.required
};