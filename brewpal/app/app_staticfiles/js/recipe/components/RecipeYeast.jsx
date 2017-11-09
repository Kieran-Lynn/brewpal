import React from 'react'
import TextInput from "../../shared/components/TextInput";
import { filterNonNumber } from "../../shared/utils";
import PropTypes from 'prop-types';

export default class RecipeYeast extends React.Component {

    updateYeastStore = (updatedYeast) => {
        this.props.handleYeastChange(updatedYeast)
    };

    handleYeastTypeChange = (event) => {
        let updatedYeast = Object.assign({}, this.props.yeast, {yeastType: event.target.value});
        this.updateYeastStore(updatedYeast);
    };

    handleYeastFermTempChange = (event) => {
        let updatedYeast =  Object.assign({}, this.props.yeast, {fermentationTemp: filterNonNumber(event.target.value)});
        this.updateYeastStore(updatedYeast);
    };

    render() {
        let yeast = this.props.yeast;
        return (
            <div className="row">
                <TextInput
                    label="Yeast"
                    name="yeast"
                    value={yeast.yeastType}
                    onChange={this.handleYeastTypeChange}
                />
                <TextInput
                    label="Fermentation Temp (F)"
                    name="fermentation_temp"
                    value={yeast.fermentationTemp}
                    onChange={this.handleYeastFermTempChange}
                />
            </div>
        )
    }
}

RecipeYeast.proptypes = {
    yeast: PropTypes.object.required,
    handleYeastChange: PropTypes.func.required
};