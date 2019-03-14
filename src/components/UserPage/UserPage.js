import React, {Component} from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component{
  state={}
 render(){

 return(
  <div>
    <h1 id="welcome">
      Welcome, { this.props.user.username }!
    </h1>
    <p>Your ID is: {this.props.user.id}</p>
    <LogOutButton className="log-in" />
    <form onSubmit={this.handleSubmit}>
<label>Item</label>
<input type='text'placeholder='description'/>
<input type='text'placeholder='image'/>
<br></br>
         <button type="submit">Add Guest</button>
</form>
  </div>
  
);
}
}
// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
