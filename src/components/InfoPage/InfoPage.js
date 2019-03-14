import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShelfListItem from '../ShelfListItem/ShelfListItem'
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component {

componentDidMount(){
  console.log('Infopage mounted');
  this.props.dispatch({type: 'FETCH_SHELF'})
  
}


render(){
  console.log(this.props);
  
  return(
  <div>
    <p>
      SHELF
    </p>
    <table>
                <thead>
                    <tr><th>Item</th><th>Image</th><th>Added By</th><th>Delete</th></tr>
                </thead>
                <tbody>
                    {/* Render each item from the zooAnimal reducer */}
                    {this.props.shelfReducer.map((item, i) => {
                        return (<ShelfListItem key={i} item={item} />);
                    })}
                </tbody>
            </table>
  </div>
);
  }
}

const mapStateToProps = reduxState => (
  reduxState
);

export default connect(mapStateToProps)(InfoPage);
