import React from 'react'
import PropTypes from 'prop-types';
import RecipeGrainRow from './RecipeGrainRow'
import { Button } from "react-bootstrap";

export default class RecipeGrains extends React.Component {
    render() {
        const grains = this.props.grains;
        return (
            <div>
                <h3>Grains</h3>
                {grains.map((grain, i) => (
                    <RecipeGrainRow
                        key={i}
                        grain={grain}
                        index={i}
                        handleGrainChange={this.props.handleGrainChange}
                        handleDeleteGrain={this.props.handleDeleteGrain}
                        disableDelete={this.props.disableDelete}
                    />
                ))}
                <Button 
                    type="button"
                    onClick={this.props.handleAddGrain}>
                    Add Grain
                </Button>
            </div>
        )
    }
}

RecipeGrains.proptypes = {
    grains: PropTypes.array.required,
    handleDeleteGrain: PropTypes.func.required,
    handleGrainChange: PropTypes.func.required,
    handleAddGrain: PropTypes.func.required,
    disableDelete: PropTypes.bool.required
};