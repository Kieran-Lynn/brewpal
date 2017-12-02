import React from 'react';
import serializeForm from 'form-serialize';
import axios from 'axios';
import cookies from 'browser-cookies';
import { Button } from 'react-bootstrap';
import RecipeYeastContainer from '../containers/RecipeYeastContainer';
import RecipeGrainsContainer from '../containers/RecipeGrainsContainer';
import RecipeHopsContainer from '../containers/RecipeHopsContainer';
import RecipeNameContainer from '../containers/RecipeNameContainer';
import RecipeStyleContainer from '../containers/RecipeStyleContainer';
import RecipeDescriptionContainer from '../containers/RecipeDescriptionContainer';
import RecipeBatchSizeContainer from '../containers/RecipeBatchSizeContainer';

export default class Recipe extends React.Component {
    saveRecipe = (event) => {
        event.preventDefault();
        const data = serializeForm(event.target, { hash: true });
        data.grains = [];
        for (let i = 0; i < data.grainType.length; i++) {
            const grainObject = {};
            grainObject.grain_type = data.grainType[i];
            grainObject.amount = data.grainAmount[i];
            data.grains.push(grainObject);
        }
        delete data.hopUse;
        delete data.hopAmount;
        delete data.grainAmount;
        delete data.grainType;
        console.log(data);
        const csrftoken = cookies.get('csrftoken');
        console.log(data);
        axios
            .post('/api/beers', data, { headers: { 'X-CSRFToken': csrftoken } })
            .then((response) => {})
            .catch((error) => {});
    };

    render() {
        return (
            <div className="container-fluid">
                <h1>Recipe</h1>
                <form onSubmit={this.saveRecipe}>
                    <RecipeNameContainer />
                    <RecipeStyleContainer />
                    <RecipeBatchSizeContainer />
                    <RecipeDescriptionContainer />
                    <RecipeYeastContainer />
                    <RecipeGrainsContainer />
                    <RecipeHopsContainer />
                    <Button type="submit">Save Recipe</Button>
                </form>
            </div>
        );
    }
}
