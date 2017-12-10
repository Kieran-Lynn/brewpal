import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../shared/components/TextInput';

export default class RecipeBatchSize extends React.Component {
    static propTypes = {
        batchSize: PropTypes.string.isRequired,
        handleBatchSizeChange: PropTypes.func.isRequired,
    }

    render() {
        return (
            <div className="row">
                <TextInput
                    label="Batch Size (gal)"
                    name="batch_size"
                    value={this.props.batchSize}
                    required
                    onChange={event => this.props.handleBatchSizeChange(event.target.value)}
                />
            </div>
        );
    }
}
