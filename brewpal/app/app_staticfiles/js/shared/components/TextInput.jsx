import React from 'react'

export default class TextInput extends React.Component {
    render() {
        return (
            <div>
                <label>
                    {this.props.label}
                    <input
                        type="text"
                        name={this.props.name}
                        value={this.props.value}
                        onChange={this.props.onChange}
                    />
                </label>
            </div>
        )
    }
}
