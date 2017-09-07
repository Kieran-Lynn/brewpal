import React from 'react'
import TextInput from "../../shared/components/TextInput";
import { filterNonNumber } from "../../shared/utils";

export default class RecipeYeast extends React.Component {

    updateYeastState = (updatedYeast) => {
        this.props.handleYeastChange(updatedYeast)
    };

    handleYeastTypeChange = (event) => {
        const updatedYeast = this.props.yeast;
        updatedYeast.yeastType = event.target.value;
        this.updateYeastState(updatedYeast);
    };

    handleYeastFermTempChange = (event) => {
        const updatedYeast = this.props.yeast;
        updatedYeast.fermentationTemp = filterNonNumber(event.target.value);
        this.updateYeastState(updatedYeast);
    };

    render() {
        const yeast = this.props.yeast;
        return (
            <div>
                <TextInput
                    label="Yeast :"
                    name="yeastType"
                    value={yeast.yeastType}
                    onChange={this.handleYeastTypeChange}
                />
                <TextInput
                    label="Fermentation Temp (F )"
                    name="fermTemp"
                    value={yeast.fermentationTemp}
                    onChange={this.handleYeastFermTempChange}
                />
            </div>
        )
    }
}