import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../shared/components/TextInput';
import { filterNonNumber } from '../../shared/utils';


export default class RecipeYeast extends React.Component {
    static propTypes = {
        yeast: PropTypes.object.isRequired,
        handleYeastChange: PropTypes.func.isRequired,
    }
    updateYeastStore = (updatedYeast) => {
        this.props.handleYeastChange(updatedYeast);
    };

    handleYeastTypeChange = (event) => {
        const updatedYeast = Object.assign({}, this.props.yeast, { yeastType: event.target.value });
        this.updateYeastStore(updatedYeast);
    };

    handleYeastFermTempChange = (event) => {
        const updatedYeast = Object.assign({}, this.props.yeast, { fermentationTemp: filterNonNumber(event.target.value) });
        this.updateYeastStore(updatedYeast);
    };

    render() {
        const { yeast } = this.props;
        return (
            <div className="row">
                <TextInput
                    label="Yeast"
                    name="yeast"
                    value={yeast.yeastType}
                    required
                    onChange={this.handleYeastTypeChange}
                />
                <TextInput
                    label="Fermentation Temp (F)"
                    name="fermentation_temp"
                    value={yeast.fermentationTemp}
                    required
                    onChange={this.handleYeastFermTempChange}
                />
            </div>
        );
    }
}
