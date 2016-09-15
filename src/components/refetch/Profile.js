import React, { Component, PropTypes } from 'react'
import { connect, PromiseState } from 'react-refetch'
import User from './User';
import Error from './Error';
import LoadingAnimation from './LoadingAnimation';


class Profile extends React.Component {
//   static propTypes = {
//     params: PropTypes.shape({
//       userId: PropTypes.string.isRequired,
//     }).isRequired,
//     userFetch: PropTypes.instanceOf(PromiseState).isRequired
//     likesFetch: PropTypes.instanceOf(PromiseState).isRequired
//     updateStatus: PropTypes.func.isRequired
//     updateStatusResponse: PropTypes.instanceOf(PromiseState) // will not be set until after `updateStatus()` is called
//   }

  render() {
    const { userFetch } = this.props

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
          <User data={user}/>
        </div>
      )
    }

    // call `updateStatus()` on button click
    // <button onClick={() => { this.props.updateStatus("Hello World")} }>Update Status</button>

    // if (updateStatusResponse) {
    //   // render the different promise states, but will be `null` until `updateStatus()` is called
    // }
  }
}

// declare the requests for fetching the data, assign them props, and connect to the component.
export default connect(props => {
  return {
    // simple GET from a URL injected as `userFetch` prop
    // if `userId` changes, data will be refetched
    userFetch: `https://vince2ndtry.herokuapp.com/cities/57c35905cf82c8100ac41b26`

    // similar to `userFetch`, but using object syntax
    // specifies a refresh interval to poll for new data
    // likesFetch: {
    //   url: `/users/${props.userId}/likes`,
    //   refreshInterval: 60000
    // },

    // // declaring a request as a function
    // // not immediately fetched, but rather bound to the `userId` prop and injected as `updateStatus` prop
    // // when `updateStatus` is called, the `status` is posted and the response is injected as `updateStatusResponse` prop.
    // updateStatus: status => ({
    //   updateStatusResponse: {
    //     url: `/users/${props.params.userId}/status`,
    //     method: 'POST',
    //     body: status
    //   }
    // })
  }
})(Profile)