import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShelfListItem extends Component {
    // Renders the list of animals
    removeFromList = (event) => {
        console.log(event.target.value )
        this.props.dispatch({ type: 'REMOVE', payload: event.target.value })
    }
    render() {
        console.log(this.props.item)
        return (
            <tr>
                <td>{this.props.item.description}</td>
                <td>{this.props.item.image_url}</td>
                <td>{this.props.item.username}</td>
                <td><button value={this.props.item.id} onClick={this.removeFromList}>Delete</button></td>
            </tr>
        );
    }
}

const mapStateToProps = reduxState => (
    reduxState
);

export default connect(mapStateToProps)(ShelfListItem);
