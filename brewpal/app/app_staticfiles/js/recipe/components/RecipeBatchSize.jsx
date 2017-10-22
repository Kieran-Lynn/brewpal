import React from 'react'
import PropTypes from 'prop-types';
import TextInput from "../../shared/components/TextInput";

export default class RecipeBatchSize extends React.Component {
    render() {
        return (
            <div className="row">
                <TextInput
                    label="Batch Size (gal)"
                    name="batch_size"
                    value={this.props.batchSize}
                    onChange={event => this.props.handleBatchSizeChange(event.target.value)}
                />
            </div>
        )
    }
}

RecipeBatchSize.PropTypes = {
    batchSize: PropTypes.string.required,
    handleBatchSizeChange: PropTypes.func.required,
};