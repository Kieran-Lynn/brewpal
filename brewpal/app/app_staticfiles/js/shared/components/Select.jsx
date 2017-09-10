import React from 'react'
import PropTypes from 'prop-types';

export default class Select extends React.Component {

    getOptionElements = () => {
        let options = [];
        for(let option of this.props.options){
            options.push(<option key={option.value} value={option.value}>{option.option}</option>)
        }

        return options;
    };

    render() {
        return (
            <div>
                {this.props.label}
                <select
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.handleOnChange}
                >
                    {this.getOptionElements()}
                </select>
            </div>
        )
    }
}

Select.PropTypes = {
    label: PropTypes.string,
    name: PropTypes.string.required,
    value: PropTypes.string.required,
    options: PropTypes.array.required,
    handleOnChange: PropTypes.func.required
}