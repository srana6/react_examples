import React from 'react';
import { Input } from '@material-ui/core';

class Child1 extends React.Component {
    constructor(props) {
        super(props);
        this.handleChild1Input = this.handleChild1Input.bind(this);
    }
    
    /**
     * Calls the callback method in the parent and sends the value
     */
    handleChild1Input(event) {
        this.props.callBack(event.target.value);
    }

    render() {
        return(
            <Input type='text'
                placeholder='type here'
                onChange={this.handleChild1Input}></Input>
        );
    }
}

export default Child1;
