import React from 'react';
import Button from '@material-ui/core/Button';
import Children1 from './children1.jsx';

/**
 * Parent calls the stateless component child
 * Renders the grocery list.
 */
class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            componentState: '',
            isShowing: false,
            gLButtonDisabled: false,
            pLButtonDisabled: false,
        }
        this.handleOnGLClick = this.handleOnGLClick.bind(this);
    }

    handleOnGLClick(prop) {
        if(prop==='grocery'){
            this.setState({
                componentState: prop,
                isShowing: !this.state.isShowing,
                pLButtonDisabled: !this.state.pLButtonDisabled,
            });
        } else if(prop==='pl') {
            this.setState({
                componentState: prop,
                isShowing: !this.state.isShowing,
                gLButtonDisabled: !this.state.gLButtonDisabled,
            });
        }
    }

    renderFunctionalComponent(items) {
        return <Children1 items={items}/>;
    }

    render() {
        const grocery_list=['Yogurt', 'Fruits', 'Eggs'];
        const pl_list=['Java', 'React', 'Ruby'];
        return(        
            <div>
                <Button variant='raised' 
                        color='primary'
                        disabled={this.state.gLButtonDisabled}
                        onClick={() => this.handleOnGLClick('grocery')}>Grocery List</Button>
                <p></p>
                <Button variant='raised'
                        color='secondary'
                        disabled={this.state.pLButtonDisabled}
                        onClick={() => this.handleOnGLClick('pl')}>Programming Language</Button>
                {(this.state.isShowing && this.state.componentState==='grocery') ? 
                    this.renderFunctionalComponent(grocery_list) 
                    : ((this.state.isShowing && this.state.componentState==='pl') ? 
                    this.renderFunctionalComponent(pl_list): null)}
            </div>);
    }
}

export default Parent;
