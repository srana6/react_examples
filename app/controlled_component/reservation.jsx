import React from 'react';

/**
 * Source - https://reactjs.org/docs/forms.html#handling-multiple-inputs
 */
class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    /**
     * Single method to control the event for two elements in the form.
     * @param {*} event - The event listener object
     */
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value,
        });
    }

    render() {
        return(
            <form>
                <label>
                    Is Going:
                    <input name='isGoing'
                        type='checkbox'
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                 </label>
                 <br />
                <label>
                    Number of guests:
                    <input name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }

}

export default Reservation;
