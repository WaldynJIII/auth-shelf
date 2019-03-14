import React, { Component } from 'react';


class ShelfListItem extends Component {
    // Renders the list of animals
    render() {
        return (
            <tr>
                <td>{this.props.item.description}</td>
                <td>{this.props.item.image_url}</td>
                <td>{this.props.item.username}</td>
                <td><button>Delete</button></td>
            </tr>
        );
    }
}

export default ShelfListItem;
