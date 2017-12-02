import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import RecipeGrainRow from './RecipeGrainRow';

export default class RecipeGrains extends React.Component {
    static propTypes = {
        grains: PropTypes.array.isRequired,
        handleDeleteGrain: PropTypes.func.isRequired,
        handleGrainChange: PropTypes.func.isRequired,
        handleAddGrain: PropTypes.func.isRequired,
        disableDelete: PropTypes.bool.isRequired,
    }

    render() {
        const { grains } = this.props;
        return (
            <div>
                <h3>Grains</h3>
                {grains.map((grain, i) => (
                    <RecipeGrainRow
                        key={grain.grainType}
                        grain={grain}
                        index={i}
                        handleGrainChange={this.props.handleGrainChange}
                        handleDeleteGrain={this.props.handleDeleteGrain}
                        disableDelete={this.props.disableDelete}
                    />
                ))}
                <Button
                    type="button"
                    onClick={this.props.handleAddGrain}
                >
                    Add Grain
                </Button>
            </div>
        );
    }
}
