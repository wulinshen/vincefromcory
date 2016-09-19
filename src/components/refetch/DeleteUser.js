import React, { Component, PropTypes } from 'react'
import { connect, PromiseState } from 'react-refetch'
import UserList from './UserList';
import Error from './Error';
import LoadingAnimation from './LoadingAnimation';
import {Table} from 'react-bootstrap';



class DeleteUser extends React.Component {

  render() {
    const { deleteUser } = this.props

      return (
        <div>
            <input type="submit" value="Delete" className="btn btn-primary" onClick={this.props.deleteUser} />
        </div>
      )
    }
  }



// declare the requests for fetching the data, assign them props, and connect to the component.
export default connect(props => {
  return {
    // simple GET from a URL injected as `userFetch` prop
    // if `userId` changes, data will be refetched
      deleteUser: (id)=> ({
      deleteUserResponse: {
        url: `https://vince2ndtry.herokuapp.com/cities/${props.params.userId}`,
        method: 'DELETE'
      }
    })   
  }
})(DeleteUser)


