import React from 'react';

class RefsChildComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('call to child component');
        return(
            <div>
                <input type='text'
                        defaultValue="input here"
                        ref={this.props.refProp}/>
            </div>
        );
    }
}

export default RefsChildComponent;
