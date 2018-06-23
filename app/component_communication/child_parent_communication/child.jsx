import React from 'react';
import Button from '@material-ui/core/Button';

class Child extends React.Component {
    render() {
        return(
            <Button variant='raised' 
                    color='primary'
                    onClick={this.props.childMethod}>Call Parent Component</Button>
        );
    }
}

export default Child;
