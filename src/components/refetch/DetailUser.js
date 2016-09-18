import React, { Component, PropTypes } from 'react'
import { connect, PromiseState } from 'react-refetch'
import UserList from './UserList';
import Error from './Error';
import LoadingAnimation from './LoadingAnimation';
import {Table} from 'react-bootstrap';



class Profile extends React.Component {

  render() {
    const { userFetch } = this.props
    //console.log("PromiseState.all([userFetch]): ", PromiseState.all([userFetch]).value)

    // compose multiple PromiseStates together to wait on them as a whole
    const allFetches = PromiseState.all([userFetch])

    // render the different promise states
    if (allFetches.pending) {
      //alert ("allFetches.pending:", allFetches.pending); 
      return <LoadingAnimation/>
    } else if (allFetches.rejected) {
      //alert ("allFetches.rejected:", allFetches.rejected);   
      return <Error error={allFetches.reason}/>
    } else 
    
    if (allFetches.fulfilled) {
      // decompose the PromiseState back into individual
      const [user] = allFetches.value
      //console.log("user: ", user);

      return (
        <div className="jumbotron">  
        <div>
            {user.name}  
            </div>
            <div>
            {user.people}  
            </div>   
          <img width="300" length="300"  src="http://www.ilsussidiario.net/img/_THUMBWEB/Pikachu_pokemon_wikipedia_thumb400x275.jpg" 
          alt="..." className="img-thumbnail"/>
                    
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
    userFetch: `https://vince2ndtry.herokuapp.com/cities/${props.params.userId}`
   
  }
})(Profile)


