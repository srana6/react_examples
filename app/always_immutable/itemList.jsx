import React from 'react';

class ItemList extends React.PureComponent {
    render() {
        return(
            <div>
                <ul>
                    { this.props.items.map(item => <li key={item.id}>{item.value}</li> )}
                </ul>
            </div>
        );
    }
}

export default ItemList;