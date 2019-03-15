import React, { Component } from 'react';
import './ShelfListItem.css';


class ShelfListItem extends Component {
    // Renders the list of animals
    render() {
        return (
            <tr className="shelf-item">
                <td>{this.props.item.description}</td>
                <td><img src="/images/default_image.png"/></td>
                <td>{this.props.item.username}</td>
                <td><button>Delete</button></td>
            </tr>
        );
    }
}

export default ShelfListItem;
