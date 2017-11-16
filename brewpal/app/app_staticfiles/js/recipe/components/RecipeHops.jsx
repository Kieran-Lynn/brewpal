import React from 'react'
import RecipeHopRow from './RecipeHopRow';
import TextInput from "../../shared/components/TextInput";
import { filterNonNumber } from "../../shared/utils";
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";

export default class RecipeHops extends React.Component {
    render() {
        const hops = this.props.hops;
        return (
            <div>
                <h3>Hops</h3>
                {hops.map((hop, index) => (
                    <RecipeHopRow
                        key={index}
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
        )
    }
}


RecipeHops.proptypes = {
    hops: PropTypes.array.required,
    handleDeleteHop: PropTypes.func.required,
    handleHopChange: PropTypes.func.required,
    handleAddHop: PropTypes.func.required,
    disableDelete: PropTypes.bool.required
};