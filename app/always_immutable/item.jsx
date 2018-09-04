import React from 'react';
import ItemList from '../always_immutable/itemList.jsx';

class Item extends React.Component {
    constructor(props) {{
        super(props);

        this.state = {
            items: [],
        };
        this.nextItemId = 0;
        this.addItemImmutably = this.addItemImmutably.bind(this);
        this.addItemMutably = this.addItemMutably.bind(this);
    }}
    
    makeItem() {
        return {
            id: this.nextItemId++,
            value: Math.random()
        };
    }

    addItemImmutably() {
        this.setState({
            items: [...this.state.items, this.makeItem()]
        });
    }

    addItemMutably() {
        this.state.items.push(this.makeItem());
        this.setState({ items: this.state.items });
    }

    render() {
        return(
            <div>
                <button onClick={this.addItemImmutably}>
                    Add item Immutably
                </button>
                <button onClick={this.addItemMutably}>
                    Add item Mutably
                </button>
                <ItemList items={this.state.items} />
            </div>    
        );
    }
}

export default Item;