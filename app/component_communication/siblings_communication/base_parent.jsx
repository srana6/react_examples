import React from 'react';
import Child1 from './child1.jsx';
import Child2 from './child2.jsx';

class BaseParent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        }
        this.formChild1 = this.formChild1.bind(this);
    }

    formChild1(params) {
        this.setState({
            data: params,
        });
    }

    render() {
        return(
            <div>
            <h1>Parent</h1>
            <div><Child1 callBack={this.formChild1} /></div>
            <div><Child2 data={this.state.data}/></div>
            </div>
        );
    }
}

export default BaseParent;
