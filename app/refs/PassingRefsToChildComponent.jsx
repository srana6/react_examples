require('bootstrap/dist/css/bootstrap.min.css');
import React from 'react';
import RefsChildComponent from './RefsChildComponent.jsx';

class PassingRefsToChildComponent extends React.Component {
    constructor(props) {
        super(props);
        this.sampleRef = React.createRef();
        this.onClickButton = this.onClickButton.bind(this);
    }

    onClickButton() {
    console.log(this.sampleRef.current.value);
    this.sampleRef.current.focus();
    }

    render() {
        return(
            <div>
            <RefsChildComponent refProp={this.sampleRef} />
            <button className='btn btn=primary' onClick={this.onClickButton} />
            </div>
        );
    }
}

export default PassingRefsToChildComponent;
