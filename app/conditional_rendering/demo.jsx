import React from 'react';
import Button from '@material-ui/core/Button';
import World from './world.jsx';

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stateHidden: true
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState({
            stateHidden: !this.state.stateHidden
        },  function(){console.log(this.state.stateHidden)});
    }

    render() {
        return(
            <div>
            <Button variant="contained" color="primary"
                onClick={this.handleClick}>
                 hello </Button>
                 {!this.state.stateHidden ? <World name='world'/> : null}
            </div>
        );
    }
}

export default Demo;
