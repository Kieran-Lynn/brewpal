import React from 'react'
import TextInput from '../shared/components/TextInput'
import TextArea from '../shared/components/TextArea'
import RecipeGrain from "./components/RecipeGrain";
import RecipeHop from "./components/RecipeHop";
import {filterNonNumber} from "../shared/utils";
import RecipeYeast from "./components/RecipeYeast";

export class Recipe extends React.Component {
    state = {
        recipeName: "",
        style: "",
        batchSize: 0.0,
        description: "",
        grains: [{grainType: "", amount: "0.0"}],
        hops: [{hopType: "", alphaAcid: "", amount: "0.0", time: "", hopUse: "boil"}],
        yeast: {yeastType: "", fermentationTemp: ""}
    };

    handleGrainChange = (index, updatedGrain) => {
        const newGrains = this.state.grains;
        newGrains[index] = updatedGrain;
        this.setState({grains: newGrains});
    };

    handleAddGrain = () => {
        this.setState({
            grains: this.state.grains.concat([{grainType: "", amount: "0.0"}])
        })
    };

    handleDeleteGrain = (index) => {
        this.setState({
            grains: this.state.grains.filter((g, i) => index !== i)
        });
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

    handleYeastChange = (updatedYeast) => {
        this.setState({
            yeast: updatedYeast
        })
    };

    render() {
        const {
            recipeName,
            style,
            batchSize,
            description,
            grains,
            hops,
            yeast
        } = this.state;

        return (
            <div>
                <h1>Recipe</h1>
                <form>
                    <TextInput
                        label="Recipe Name :"
                        name="recipeName"
                        value={recipeName}
                        onChange={event => this.setState({recipeName: event.target.value})}
                    />
                    <TextInput
                        label="Style :"
                        name="style"
                        value={style}
                        onChange={event => this.setState({style: event.target.value})}
                    />
                    <TextInput
                        label="Batch Size (gal):"
                        name="batchSize"
                        value={batchSize}
                        onChange={event => this.setState({batchSize: filterNonNumber(event.target.value)})}
                    />
                    <TextArea
                        label="Description :"
                        name="description"
                        value={description}
                        onChange={event => this.setState({description: event.target.value})}
                    />
                    <br/>
                    <RecipeYeast
                        yeast={yeast}
                        handleYeastChange={this.handleYeastChange}
                    />
                    <br/>
                    <br/>
                    <br/>
                    {grains.map((grain, i) => (
                        <RecipeGrain
                            grain={grain}
                            key={i}
                            index={i}
                            disableDelete={grains.length === 1}
                            handleGrainChange={this.handleGrainChange}
                            handleDeleteGrain={this.handleDeleteGrain}
                        />
                    ))}
                    <br/>
                    <button type="button" onClick={this.handleAddGrain}>Add Grain</button>
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

