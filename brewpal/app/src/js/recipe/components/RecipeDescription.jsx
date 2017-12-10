import React from 'react';
import PropTypes from 'prop-types';
import TextArea from '../../shared/components/TextArea';

export default class RecipeDescription extends React.Component {
    static propTypes = {
        description: PropTypes.string,
        handleDescriptionChange: PropTypes.func.isRequired,
    }
    static defaultProps = {
        description: '',
    }

    render() {
        return (
            <div className="row">
                <TextArea
                    label="Description"
                    name="description"
                    value={this.props.description}
                    required={false}
                    onChange={event => this.props.handleDescriptionChange(event.target.value)}
                />
            </div>
        );
    }
}

