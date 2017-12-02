import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import RecipeHopRow from './RecipeHopRow';

export default class RecipeHops extends React.Component {
    static propTypes = {
        hops: PropTypes.array.isRequired,
        handleDeleteHop: PropTypes.func.isRequired,
        handleHopChange: PropTypes.func.isRequired,
        handleAddHop: PropTypes.func.isRequired,
        disableDelete: PropTypes.bool.isRequired,
    }
    render() {
        const { hops } = this.props;
        return (
            <div>
                <h3>Hops</h3>
                {hops.map((hop, index) => (
                    <RecipeHopRow
                        key={hop.hopType}
                        index={index}
                        hop={hop}
                        disableDelete={this.props.disableDelete}
                        handleDeleteHop={this.props.handleDeleteHop}
                        handleHopChange={this.props.handleHopChange}
                    />
                ))}
                <Button type="button" onClick={this.props.handleAddHop}>
                    Add Hop
                </Button>
            </div>
        );
    }
}
