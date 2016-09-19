import React, { Component, PropTypes } from 'react'
import { connect, PromiseState } from 'react-refetch'
import UserList from './UserList';
import Error from './Error';
import LoadingAnimation from './LoadingAnimation';
import { Link } from 'react-router';


class Profile extends React.Component {

  render() {
    const { userFetch, deleteUser } = this.props
    //console.log("PromiseState.all([userFetch]): ", PromiseState.all([userFetch]).value)


    // compose multiple PromiseStates together to wait on them as a whole
    const allFetches = PromiseState.all([userFetch])

    // render the different promise states
    if (allFetches.pending) {
      return <LoadingAnimation/>
    } else if (allFetches.rejected) {
      return <Error error={allFetches.reason}/>
    } else if (allFetches.fulfilled) {
      // decompose the PromiseState back into individual
      const [user] = allFetches.value
      return (
        <div>        
        &nbsp;
        
     <Link to={'/manageuser'} >  <input type="button" value="Add Course" className="btn btn-primary" /> </Link>

        <UserList deleteUser={deleteUser} data={user}/>
        </div>
      )
    }
  }
}

// declare the requests for fetching the data, assign them props, and connect to the component.
export default connect(props => {
  return {
    // simple GET from a URL injected as `userFetch` prop
    // if `userId` changes, data will be refetched
    userFetch: `https://vince2ndtry.herokuapp.com/cities`
   
   
  }
})(Profile)


