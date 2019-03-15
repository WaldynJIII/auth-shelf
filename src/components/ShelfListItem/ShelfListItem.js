import React, { Component } from 'react';
import './ShelfListItem.css';
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
            <tr className="shelf-item">
                <td>{this.props.item.description}</td>
                <td>
                    { this.props.item.image_url ? <img src={this.props.item.image_url} /> :
                        <img src="/images/default_image.png" alt="an image of a house on a hill"/>
                    }
                </td>
                    
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
