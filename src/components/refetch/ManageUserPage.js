import React, { Component, PropTypes } from 'react'
import { connect, PromiseState } from 'react-refetch'
import UserForm from './UserForm';
import Error from './Error';
import LoadingAnimation from './LoadingAnimation';
import {browserHistory} from 'react-router';



class UserManagePage extends React.Component {
  
  constructor(props){
    super(props);


    this.updateUserState=this.updateUserState.bind(this);
    this.saveUser=this.saveUser.bind(this);
  }
 
  componentWillMount(){
    this.state={
      user:{name:"", people:""},
      errors:{}
    }
  }

  updateUserState(event){
    // const field = event.target.name;
    // let user = this.state.user;
    // user[field] = event.target.value;
    // return this.setState({user});
    console.log("updateUserState Loged");
  }

  saveUser(event){
    event.preventDefault();
    //this.props.actions.saveCourse(this.state.course);
    let someSubject = this.state.user;
    //let someSubject={name: "sdfdf", people: "dfdf"};
    let formBody = [];
    for (let property in someSubject) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(someSubject[property]);
    formBody.push(encodedKey + "=" + encodedValue);
                                    }
    formBody = formBody.join("&");

    // console.log("formBody",formBody);
    // console.log("someSubject",someSubject);
    this.props.addUser(formBody);
    alert(formBody+" Posted!");
    browserHistory.push('/users');
  }


  render() {
    const { addUser } = this.props
    //console.log("PromiseState.all([userFetch]): ", PromiseState.all([userFetch]).value)


    // compose multiple PromiseStates together to wait on them as a whole
    const allFetches = PromiseState.all([addUser])


      return (
        <div>        
        &nbsp;
          <UserForm 
          onChange={this.updateUserState}
          onSave={this.saveUser}
          user={this.state.user}
          errors={this.state.errors}
          />
        </div>
      )
    }
  }



// declare the requests for fetching the data, assign them props, and connect to the component.
export default connect(props => {
  return {
    // simple GET from a URL injected as `userFetch` prop
    // if `userId` changes, data will be refetched
    addUser: subject => ({
    addUserResponse: {
      url: `https://vince2ndtry.herokuapp.com/cities`,
      method: 'POST',
      //headers: {'Accept': 'application/x-www-form-urlencoded','Content-Type': 'application/x-www-form-urlencoded'},
      headers: {'Accept': 'application/x-www-form-urlencoded',
          'Content-Type': 'application/x-www-form-urlencoded'},
       body: subject
                     }
  }
   )
   
  }
})(UserManagePage)


