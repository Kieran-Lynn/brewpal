import React from 'react'
import PropTypes from 'prop-types';
import serializeForm from 'form-serialize'
import axios from 'axios'
import cookies from 'browser-cookies'
import TextInput from '../../shared/components/TextInput'
import TextArea from '../../shared/components/TextArea'
import RecipeYeastContainer from "../containers/RecipeYeastContainer";
import RecipeGrainsContainer from "../containers/RecipeGrainsContainer";
import RecipeHopsContainer from "../containers/RecipeHopsContainer";
import RecipeNameStyles from '../../../css/recipe/recipeName.css'
import { Button } from "react-bootstrap";

export default class Recipe extends React.Component {
    saveRecipe = (event) => {
        event.preventDefault();
        const data = serializeForm(event.target,{ hash: true });
        data['grains'] = [];
        for (let i=0; i<data.grainType.length; i++){
            let grainObject = {};
            grainObject['grain_type'] = data.grainType[i];
            grainObject['amount'] = data.grainAmount[i];
            data.grains.push(grainObject)
        }
        delete data['hopUse'];
        delete data['hopAmount'];
        delete data['grainAmount'];
        delete data['grainType'];
        console.log(data);
        const csrftoken = cookies.get('csrftoken');
        console.log(data);
        axios.post("/api/beers", data, { headers: {'X-CSRFToken' : csrftoken}}).then(response => {

        }).catch(error => {

        });

    };

    render() {
        return (
            <div className="container-fluid">
                <h1>Recipe</h1>
                <form onSubmit={this.saveRecipe}>
                    <TextInput
                        label="Recipe Name :"
                        name="name"
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
                        name="batch_size"
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
                    <Button type="submit">Save Recipe</Button>
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