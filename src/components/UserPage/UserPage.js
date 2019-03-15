import React, {Component} from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component{
  state={
    formData:{
      description: '',
      image: '',
      user_id: this.props.user.id
    }
  }
  handleChangeFor =(key)=>(event)=>{
    this.setState({
      ...this.state,
      formData:{...this.state.formData,
      [key]: event.target.value,
    }
    })
  }
  handleSubmit=(event)=>{
    event.preventDefault();
    this.props.dispatch({type: 'POST_ITEM', payload: this.state.formData})
    this.setState({
      ...this.state,
      formData:{...this.state.formData,
description:'',
image: '',
      }
    })
  }

 render(){
console.log(this.state.formData)
 return(
  <div>
    <h1 id="welcome">
      Welcome, { this.props.user.username }!
    </h1>
    <p>Your ID is: {this.props.user.id}</p>
    <LogOutButton className="log-in" />
    <form onSubmit={this.handleSubmit}>
<label>Item</label>
<input type='text'placeholder='description' value={this.state.formData.description} onChange={this.handleChangeFor('description')}/>
       <input type='text' placeholder='image' value={this.state.formData.image}onChange={this.handleChangeFor('image')}/>
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
