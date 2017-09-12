import React from 'react'
import PropTypes from 'prop-types';
import TextInput from '../../shared/components/TextInput'
import TextArea from '../../shared/components/TextArea'
import RecipeHop from "./RecipeHop";
import RecipeYeastContainer from "../containers/RecipeYeastContainer";
import RecipeGrainContainer from "../containers/RecipeGrainContainer";

export default class Recipe extends React.Component {
    state = {
        hops: [{hopType: "", alphaAcid: "", amount: "0.0", time: "", hopUse: "boil"}]
    };

    handleDeleteGrain = (index) => {
        // this.setState({
        //     grains: this.state.grains.filter((g, i) => index !== i)
        // });
    };

    handleHopChange = (index, updatedHop) => {
        const newHops = this.state.hops;
        newHops[index] = updatedHop;
        this.setState({hops: newHops});
    };

    handleAddHop = () => {
        this.setState({
            hops: this.state.hops.concat([{hopType: "", alphaAcid: "", amount: "0.0", time: "", hopUse: "boil"}])
        })
    };
    handleDeleteHop = (index) => {
        this.setState({
            hops: this.state.hops.filter((g, i) => index !== i)
        });
    };

    render() {
        const {
            grains,
            hops
        } = this.state;

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
                    <RecipeGrainContainer />
                    <br/>
                    <button type="button" onClick={this.props.handleAddGrain}>Add Grain</button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    {hops.map((hop, i) => (
                        <RecipeHop
                            hop={hop}
                            key={i}
                            index={i}
                            disableDelete={hops.length === 1}
                            handleHopChange={this.handleHopChange}
                            handleDeleteHop={this.handleDeleteHop}
                        />
                    ))}
                    <button type="button" onClick={this.handleAddHop}>Add Hop</button>
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
    handleStyleChange: PropTypes.func.required,
    handleAddGrain: PropTypes.func.required
};