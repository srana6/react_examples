require('bootstrap/dist/css/bootstrap.min.css');
import React from 'react';
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
            <button className='btn btn-primary'
                onClick={this.handleClick}>
                 hello </button>
                 {!this.state.stateHidden ? <World name='world'/> : null}
            </div>
        );
    }
}

export default Demo;
