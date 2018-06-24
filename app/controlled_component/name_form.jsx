import React from 'react';

/**
 * Source - https://reactjs.org/docs/forms.html#controlled-components
 */
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: '+ this.state.value);
        event.preventDefualt();
    }

    handleOnChange(event) {
        this.setState({
            value: event.target.value.toUpperCase()
        });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type='text' value={this.state.value} onChange={this.handleOnChange} />
                </label>
                <input type='submit' value='Submit' />
            </form>
        );
    }
}

export default NameForm;
