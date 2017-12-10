import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../shared/components/TextInput';

export default class RecipeStyle extends React.Component {
    static propTypes = {
        style: PropTypes.string,
        handleStyleChange: PropTypes.func.isRequired,
    }
    static defaultProps = {
        style: '',
    }
    render() {
        return (
            <div className="row">
                <TextInput
                    label="Style"
                    name="style"
                    value={this.props.style}
                    required={false}
                    onChange={event => this.props.handleStyleChange(event.target.value)}
                />
            </div>
        );
    }
}

