import React from 'react';
import { Input } from '@material-ui/core';

class Child2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
        <Input type='text'
        placeholder='see here'
        value={this.props.data}>
        </Input>);
    }
}

export default Child2;
