import React from 'react';
import Child from './child.jsx';

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickFromChild = this.handleClickFromChild.bind(this);
    }

    handleClickFromChild() {
        console.log("heello from the child");
    }

    render() {
        return(
            <Child childMethod={this.handleClickFromChild} />
        );
    }
}

export default Parent;
